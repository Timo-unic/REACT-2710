import { Button, Card, CardContent, CardActions, TextField } from '@mui/material'
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

class ProductsListItem extends Component<Props> {
    render() {
        return (
            <Card variant="outlined" className="product">
                <CardContent>
                    <div className="product-image">
                        <img src={this.props.image} alt="" />
                    </div>
                    <div className="product-title">{this.props.title}</div>
                    <div className="product-desc" dangerouslySetInnerHTML={{__html: this.props.description}}></div>
                    <div className="product-features">Type: {this.props.type}</div>
                    <div className="product-features">Capacity: {this.props.capacity} Gb</div>
                    <div className="product-price">{this.props.price}$</div>
                    <div className="product-quantity">
                        <Button variant='outlined'>-</Button>
                        <TextField size='small' value={1} />
                        <Button variant='outlined'>+</Button>
                    </div>
                </CardContent>
                <CardActions className="product-btn-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </Card>
        )
    }
}

// const ProductsListItem = ({
//     title,
//     description,
//     type,
//     capacity,
//     price,
//     image,
// }: Props) => {
    
// }

export default ProductsListItem
