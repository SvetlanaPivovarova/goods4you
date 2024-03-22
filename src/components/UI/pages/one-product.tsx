import Header from "../../header";
import productImage from "../../../assets/sneakers.jpg";
import star from "../../../assets/star.svg";


type ProductProps = {
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
    }
}

const one = {
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "...",
    "images": ["...", "...", "..."]
}

function OneProduct(props: ProductProps) {
    //const { product } = props
    const product = one
    const discountPrice = product.price * ((100 - product.discountPercentage) / 100)
    const starRating = Array.from({ length: Math.round(product.rating) }, (_, i) => i);

    return (
        <>
            <Header type={"secondary"} />
            <section className="container block admin-page">
                <h2 className="block__title">Product {product.id}</h2>
                <div className="admin-page__container">
                    <div className="gallery-products">
                        <img src={productImage} className="gallery-products__main-image" alt={`main image of product ${product.title}`} />
                        <ul className="gallery-products__list">
                            <li className="gallery-products__list-item">
                                <img src={productImage} className="gallery-products__preview" alt={`preview image of product ${product.title}`} />
                            </li>
                            <li className="gallery-products__list-item">
                                <img src={productImage} className="gallery-products__preview" alt={`preview image of product ${product.title}`} />
                            </li>
                        </ul>
                    </div>
                    <div className="description">
                        <div className="description__title">
                            <h3 className="block__title block__title_type_secondary">{product.title}</h3>
                            <p className="description__id">SKU ID <span>{String(product.id)}</span></p>
                        </div>
                        <p className="description__paragraph">
                            Rating
                            <span className="description__rating">
                                {starRating.map((i) => <img key={i} src={star} className="gallery-products__preview" alt={"star of the raiting"}/>)}
                            </span>
                        </p>
                        <p className="description__paragraph">
                            Base price
                            <span className="description__value">{product.price}$</span>
                        </p>
                        <p className="description__paragraph">
                            Discount percentage
                            <span className="description__value">{product.discountPercentage}%</span>
                        </p>
                        <p className="description__paragraph">
                            Discount price
                            <span className="description__value">{discountPrice}$</span>
                        </p>
                        <p className="description__paragraph">
                            Stock
                            <span className="description__value">{product.stock}</span>
                        </p>
                        <p className="description__paragraph">
                            Brand
                            <span className="description__value">{product.brand}</span>
                        </p>
                        <p className="description__paragraph">
                            Category
                            <span className="description__value">{product.category}</span>
                        </p>
                        <p className="description__paragraph">
                            Description
                            <span className="description__value">{product.description}</span>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OneProduct