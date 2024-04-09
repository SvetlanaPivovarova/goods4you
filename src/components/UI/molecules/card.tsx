import {Link, useLocation} from "react-router-dom";

type CardProps = {
    product: {
        id: string | number,
        title: string,
        price: number,
        discountPercentage: number,
        rating: number,
        stock: number,
        brand: string,
        category: string,
        thumbnail: string,
        images: string[]
    },
}

function Card(props: CardProps) {
    const {product} = props
    const location = useLocation()

    const cardClassname = location.pathname === '/products' ? 'card card_type_large' : 'card'

    return (
        <article className={cardClassname}>
            <Link className="card__link" to={`/products/${product.id}`} key={product.id}>
                <div className="card__image-container">
                    <img src={product.thumbnail} className="card__image" alt={`Photo of the product ${product.title}`} />
                </div>
                <h4 className="card__title">{product.title}</h4>
                <p className="card__text">{product.price}$</p>
            </Link>

        </article>
    )
}

export default Card