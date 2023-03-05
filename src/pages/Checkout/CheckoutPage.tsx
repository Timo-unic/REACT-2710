import { Typography } from '@mui/material'
import axios from 'axios'
import { useState } from 'react'

type Props = {}

type Order = {
    name: string
    address: string
}

const CheckoutPage = (props: Props) => {
    const [isOrderSend, setIsOrderSend] = useState<boolean>(false)

    const [orderData, setOrderData] = useState<Order>({
        name: '',
        address: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) =>
        setOrderData((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))

    const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) =>
        setOrderData((prevState) => ({
            ...prevState,
            address: e.target.value,
        }))

    const orderSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        axios
            .post(
                'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
                {
                    name: orderData.name,
                    address: orderData.address,
                }
            )
            .then((res) => res.data)
            .then(({ name, address }) => {
                setOrderData({
                    name,
                    address,
                })
                setIsOrderSend(true)
            })
    }

    const renderForm = () => {
        return (
            <form onSubmit={orderSend}>
                <div>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={orderData.name}
                        onChange={handleName}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Your Address"
                        value={orderData.address}
                        onChange={handleAddress}
                    />
                </div>
                <button type="submit" >Send</button>
            </form>
        )
    }

    const renderMessage = () => {
        return (
            <div>
                <div>Dear, {orderData.name} thanks for Your order!</div>
                <div>Address: {orderData.address} </div>
            </div>
        )
    }

    return (
        <>
            <Typography
                variant="h4"
                component={'h1'}
                sx={{ margin: '0 0 40px 0' }}
            >
                Checkout
            </Typography>
            {isOrderSend ? renderMessage() : renderForm()}
        </>
    )
}

export default CheckoutPage
