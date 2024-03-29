import Button from "../atoms/button";
import React, {useEffect, useState} from "react";
import {IProduct} from "../../../models/IProduct";
import {NUMBER_PATTERN} from "../../../utils/constants";

type EditProductFormProps = {
    product: IProduct,
    setEditedData: (data: IProduct) => void,
    setIsEditing: (data: boolean) => void
}

function EditProductForm({product, setEditedData, setIsEditing}: EditProductFormProps) {

    const [price, setPrice] = useState(product.price)
    const [discountPercentage, setDiscountPercentage] = useState(product.discountPercentage)
    const [isLoading, setIsLoading] = useState(false)
    const [errorDiscount, setErrorDiscount] = useState('')
    const [error, setError] = useState('')

    const computeDiscountPrice = (price * ((100 - discountPercentage) / 100)).toFixed(2).slice(0, -1)

    const changeDiscount = (e: React.ChangeEvent) => {
        setDiscountPercentage(Number(e.target.value))
    }

    function handleChangeDiscount(event: React.ChangeEvent) {
        changeDiscount(event)
        setErrorDiscount('')
    }

    function handleSubmit(event:  React.SyntheticEvent) {
        event.preventDefault();

        const form = event.target
        const formData = new FormData(form)
        formData.delete('discount-price')

        const formJson = Object.fromEntries(formData.entries());

        if(NUMBER_PATTERN.test(formJson.discountPercentage)) {
            setIsLoading(true)

            fetch(`https://dummyjson.com/products/${product.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(
                    formJson
                )
            })
                .then(res => res.json())
                .then(res => {
                    setEditedData(res);
                    setIsEditing(false)
                })
                .catch(() => {
                    setError('Failed to edit product. Try later.')
                })
                .finally(() => setIsLoading(false))
        } else setErrorDiscount('Incorrect percentage entry format')
    }

    useEffect(() => {
        if(error) {
            setTimeout(() => setError(''), 3000)
        }
    }, [error])

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="base-price" className={"description__label"}>Base price
                <input
                    className={"description__input"}
                    type={"number"}
                    placeholder="Base price"
                    name={"price"}
                    defaultValue={product.price}
                    onChange={e => setPrice(Number(e.target.value))}
                    autoFocus={true}
                    required={true}
                />
            </label>
            <label htmlFor="base-price" className={"description__label"}>Discount percentage
                <input
                    className={"description__input"}
                    type={"text"}
                    placeholder="Discount percentage"
                    name={"discountPercentage"}
                    defaultValue={product.discountPercentage}
                    onChange={handleChangeDiscount}
                    required={true}
                />
                {errorDiscount && <p className="description__input-error">{errorDiscount}</p>}
            </label>
            <label htmlFor="base-price" className={"description__label"}>Discount price
                <input
                    className={"description__input description__input_type_readonly"}
                    type={"text"}
                    name={"discount-price"}
                    value={`${computeDiscountPrice}$`}
                    readOnly={true}
                />
            </label>
            <label htmlFor="base-price" className={"description__label"}>Stock
                <input
                    className={"description__input"}
                    type={"number"}
                    placeholder="Stock"
                    name={"stock"}
                    defaultValue={product.stock}
                    required={true}
                />
            </label>
            <label htmlFor="base-price" className={"description__label"}>Brand
                <input
                    className={"description__input"}
                    type={"text"}
                    placeholder="Brand"
                    name={"brand"}
                    defaultValue={product.brand}
                />
            </label>
            <label htmlFor="base-price" className={"description__label"}>Category
                <input
                    className={"description__input"}
                    type={"text"}
                    placeholder="Category"
                    name={"category"}
                    defaultValue={product.category}
                />
            </label>
            <label htmlFor="base-price" className={"description__label"}>Description
                <input
                    className={"description__input"}
                    type={"text"}
                    placeholder="Description"
                    name={"description"}
                    defaultValue={product.description}
                    maxLength={50}
                />
            </label>
            <Button
                color={"primary"}
                size={"large"}
                name={isLoading ? "Saving..." : "Save"}
                disabled={isLoading || !!error}
            />
            <p className={"description__error"}>{error}</p>
        </form>
    )
}

export default EditProductForm