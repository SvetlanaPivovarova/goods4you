import Header from "../UI/organism/header";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Loader from "../UI/atoms/loader";
import Button from "../UI/atoms/button";
import EditProductForm from "../UI/organism/edit-product-form";
import star from "../../assets/star.svg"
import {IProduct} from "../../models/IProduct";

function OneProduct() {
    const { id } = useParams();

    const [product, setProduct] = useState<IProduct>({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const [isEditing, setIsEditing] = useState(false)
    const [editedProduct, setEditedProduct] = useState(product)

    const discountPrice = (product.price * ((100 - product.discountPercentage) / 100)).toFixed(2).slice(0, -1)
    const starRating = Array.from({ length: Math.round(product.rating) }, (_, i) => i);

    useEffect(() => {
        window.scrollTo(0, 0)
        setError('')
        fetch(`https://dummyjson.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => {
                if(data.message) {
                    setError(data.message)
                } else setProduct(data);
            })
            .catch(() => {
                setError("API connection error. Try later.");
            })
            .finally(() => setIsLoading(false));
    }, [id]);

    useEffect(() => {
        setProduct(editedProduct);
    }, [editedProduct, setProduct])

    function handleEdit() {
        setIsEditing(true)
    }

    return (
        <>
            <Header type={"secondary"} />
            {isLoading && <Loader />}
            {error && <p className={"error"}>{error}</p>}
            {product && !error &&
                <section className="container block admin-page">
                    <h2 className="block__title">Product {product.id}</h2>
                    <div className="admin-page__container">
                        <div className="gallery-products">
                            <div className="gallery-products__main-image-container">
                                <img src={product.thumbnail} className="gallery-products__main-image" alt={`main image of product ${product.title}`} />
                            </div>
                            <ul className="gallery-products__list">
                                {product.images && product.images.map(image =>
                                <li className="gallery-products__list-item" key={image}>
                                    <img src={image} className="gallery-products__preview" alt={`preview image of product ${product.title}`} />
                                </li>
                                )}
                            </ul>
                        </div>
                        {!isEditing &&
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
                            <p className="description__paragraph description__paragraph_type_last">
                                Description
                                <span className="description__value">{product.description}</span>
                            </p>
                            <Button color={"primary"} size={"large"} name={"Edit"} onClick={handleEdit} />
                        </div>
                        }
                        {isEditing &&
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
                                <EditProductForm product={product} setEditedData={setEditedProduct} setIsEditing={setIsEditing}/>
                            </div>
                        }
                    </div>
                </section>
            }
        </>
    )
}

export default OneProduct