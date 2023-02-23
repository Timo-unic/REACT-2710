import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import * as React from 'react'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'
import { Container } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home'
import CartPage from 'pages/Cart/CartPage'

type Props = {}

type ProductsInCart = {
    [id: number]: number
}

const App = (props: Props) => {
    const [ProductsInCart, setProductsInCart] = useState<ProductsInCart>({
        1: 5,
        2: 5,
    })

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }
    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState) => {
            let prevProductsInCart = {...prevState}
            delete prevProductsInCart[id]
            return prevProductsInCart
        })
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={ProductsInCart} />
            <button onClick={() => removeProductFromCart(1)}>
                Delete product
                </button>
            <Container sx={{ padding: '60px 0' }}>
                <Routes>
                    <Route
                        path="/"
                        element={<Home addProductToCart={addProductToCart} />}
                    />
                    <Route path="cart" element={<CartPage productsInCart={ProductsInCart} />} />
                </Routes>
            </Container>
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
