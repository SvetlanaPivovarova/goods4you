type CardProps = {
    product: {
        imageSrc: string,
        name: string,
        typeOfProduct: string,
        price: string,
    },
}

function Card(props: CardProps) {
    const {product} = props

    return (
        <article className="card">
            <img src={product.imageSrc} className="card__image" alt={`Photo of the product ${product.typeOfProduct}`} />
            <h4 className="card__title">{product.name}</h4>
            <p className="card__text">{product.price}</p>
        </article>
    )
}

export default Card