import Header from "../../header";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Loader from "../atoms/loader";
import {IProduct} from "../../../models/IProduct";
import star from "../../../assets/star.svg"

function OneProduct() {
    const { id } = useParams();

    const [product, setProduct] = useState<IProduct>({})
    const [isLoading, setIsLoading] = useState(true)

    const discountPrice = (product.price * ((100 - product.discountPercentage) / 100)).toFixed(2).slice(0, -1)
    const starRating = Array.from({ length: Math.round(product.rating) }, (_, i) => i);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                //setError("API connection error.");
            })
            .finally(() => setIsLoading(false));
    }, [id]);

    return (
        <>
            <Header type={"secondary"} />
            {isLoading && <Loader />}
            {product &&
                <section className="container block admin-page">
                    <h2 className="block__title">Product {product.id}</h2>
                    <div className="admin-page__container">
                        <div className="gallery-products">
                            <div className="gallery-products__main-image-container">
                                <img src={product.thumbnail} className="gallery-products__main-image" alt={`main image of product ${product.title}`} />
                            </div>
                            <ul className="gallery-products__list">
                                {product.images && product.images.map(image =>
                                <li className="gallery-products__list-item">
                                    <img src={image} className="gallery-products__preview" alt={`preview image of product ${product.title}`} />
                                </li>
                                )}
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
                                {starRating.map((i) => <img key={i} src={star} className="gallery-products__preview" alt={"star of the rating"}/>)}
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
            }
        </>
    )
}

export default OneProduct