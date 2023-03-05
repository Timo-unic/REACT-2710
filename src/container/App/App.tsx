import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { Container } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home'
import CartPage from 'pages/Cart/CartPage'
import CheckoutPage from 'pages/Checkout/CheckoutPage'
import { useAppDispatch } from 'redux/hooks'
import { fetchProducts } from 'redux/ProductsReducer'
import { useEffect } from 'react'

type Props = {}

const App = (props: Props) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    })

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Container sx={{ padding: '60px 0' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="checkout" element={<CheckoutPage />} />
                </Routes>
            </Container>
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
