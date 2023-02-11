import { Button, Card, CardContent, CardActions, TextField } from '@mui/material'
import { green } from '@mui/material/colors'
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
    color: string
}

class ProductsListItem extends Component<Props, State> {
    state = {
        count: 1,
        color: 'green',
    }

    onIncrementClick = () => {
        this.setState((prevState: State) => ({
            count: prevState.count + 1,
        }))
    }

    onDecrementClick = () => {
        this.setState((prevState: State) => ({
            count: prevState.count - 1,
        }))
    }

    changeColor = () => {
        this.setState((prevState: State) => {
            if (prevState.color === 'green') {
                return {
                    color: 'red',
                }
            } else {
                return {
                    color: 'green',
                }
            }
        })
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
                    <p>Color: {' '} <span className={this.state.color}>{this.state.color}</span></p>
                    <button onClick={this.changeColor}>Change color</button>
                    <div className="product-price">{price}$</div>
                    <div className="product-quantity">
                        <Button variant='outlined' onClick={this.onDecrementClick}>-</Button>
                        <TextField size='small' value={this.state.count} />
                        <Button variant='outlined' onClick={() => this.onIncrementClick()}>+</Button>
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
