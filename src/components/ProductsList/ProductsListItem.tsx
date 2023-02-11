import { Button, Card, CardContent, CardActions, TextField } from '@mui/material'
import { type } from '@testing-library/user-event/dist/type'
import { Component } from 'react'
import './ProductsListItem.scss'

type Props = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

type State = {
    count: number
}

class ProductsListItem extends Component<Props, State> {
    state = {
        count: 1,
    }

    onIncrementClick = (num: number) => {
        this.setState((prevState: State) => ({
            count: prevState.count + num,
        }))
    }

    onDecrementClick = () => {
        this.setState((prevState: State) => ({
            count: prevState.count - 1,
        }))
    }

    render() {
        const {title, description, type, capacity, price, image,} = this.props
        return (
            <Card variant="outlined" className="product">
                <CardContent>
                    <div className="product-image">
                        <img src={image} alt="" />
                    </div>
                    <div className="product-title">{title}</div>
                    <div className="product-desc" dangerouslySetInnerHTML={{__html: description}}></div>
                    <div className="product-features">Type: {type}</div>
                    <div className="product-features">Capacity: {capacity} Gb</div>
                    <div className="product-price">{price}$</div>
                    <div className="product-quantity">
                        <Button variant='outlined' onClick={this.onDecrementClick}>-</Button>
                        <TextField size='small' value={this.state.count} />
                        <Button variant='outlined' onClick={() => this.onIncrementClick(3)}>+</Button>
                    </div>
                </CardContent>
                <CardActions className="product-btn-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </Card>
        )
    }
}


export default ProductsListItem
