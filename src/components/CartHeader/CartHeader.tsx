type Props = {
    ProductsInCart: {
        [id: number]: number
    }
}

const CartHeader = ({ ProductsInCart }: Props) => {
    return (
        <div>
            <div>
                {Object.keys(ProductsInCart).map((productId) => (
                <div key={productId}> {productId} : {ProductsInCart[parseInt(productId)]}
                </div>)
                )}
            </div>
        </div>
    )
}
export default CartHeader
