import CheckboxList from "../molecules/checkbox-list";
import Stepper from "../molecules/stepper";
import {categoriesAPI} from "../../../services/CategoriesService";
import {useEffect, useState} from "react";
import Card from "../molecules/card";
import Loader from "../atoms/loader";
import {IProduct} from "../../../models/IProduct";

function CheckboxBlock() {
    const {data} = categoriesAPI.useFetchAllCategoriesQuery('')
    const [categoriesList, setCategoriesList] = useState([])
    const [currentStep, setCurrentStep] = useState(1)
    const [products, setProducts] = useState([])
    const [popularProducts, setPopularProducts] = useState([])
    const [disabled, setDisabled] = useState(true)
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    function handleChooseCategory() {
        setIsLoading(true)
        const fetchPromises = categoriesList.map((item) => {
            fetch(`https://dummyjson.com/products/category/${item}`)
                .then(res => res.json())
                .then(res => {setProducts((state: IProduct[]) => [...state, res.products])})
                .catch(error => {
                    setError('No products found in the selected categories')
                    console.log(error)
                })
            })
        Promise.allSettled(fetchPromises).then((results) =>
            results.forEach((result) => {
                getPopularProducts(products.flat())
                if (result.status == "fulfilled") {
                    setError('')
                    setIsLoading(false)
                }
                else if (result.status == "rejected") {
                    setError('No products found in the selected categories')
                    setIsLoading(false)
                }
            }),
        );
    }

    useEffect(() => {
        if (categoriesList.length !== 0) {
            setDisabled(false)
        } else setDisabled(true)
    }, [categoriesList])

    useEffect(() => {
        getPopularProducts(products.flat())
    }, [products])

    function sortingProducts(array: object[]): object[] {
        const key = 'rating'
        return  array.sort((a, b) => a[key] < b[key] ? 1 : -1);
    }

    function getPopularProducts(array: object[]) {
        const sorted = sortingProducts(array).slice(0, 3)
        setPopularProducts(sorted)
    }

    function handleChangeSelection() {
        setCategoriesList([])
        setCurrentStep(1)
    }

    return (
        <section className="checkbox-block container block">
            {currentStep === 1 &&
                <>
                    <div className="block__container-with-dash">
                        <h2 className="title block__title">We will select the perfect product for you</h2>
                        <p className="subtitle subtitle_type_grey">Answer three questions and we will send you a catalog with the most suitable products for you.</p>
                    </div>
                    <div className="block__container-with-dash">
                        <h3 className="block__title block__title_type_secondary">
                            What type of product are you considering?
                        </h3>
                        {data && <CheckboxList items={data} setList={setCategoriesList}/>}
                    </div>
                    <Stepper
                        handleStep={handleChooseCategory}
                        currentStep={currentStep}
                        setCurrentStep={setCurrentStep}
                        isDisabledButton={disabled}
                    />
                </>
                }
            {currentStep === 2 &&
                <>
                    <div className="block__container-with-dash">
                        <h2 className="title block__title">Your selection is ready!</h2>
                    </div>
                    <div className="block__container-with-dash">

                        {popularProducts &&
                            <ul className="cards-block__list block__dark-container">
                                {isLoading && <Loader />}
                                {error && <div>{error}</div>}
                                {popularProducts.map((item) => <li key={item.id}><Card product={item} /></li>)}
                            </ul>
                        }
                    </div>
                    <Stepper
                        handleStep={handleChangeSelection}
                        currentStep={currentStep}
                        setCurrentStep={setCurrentStep}
                        isDisabledButton={false}
                    />
                </>
                }

        </section>
    )
}

export default CheckboxBlock
