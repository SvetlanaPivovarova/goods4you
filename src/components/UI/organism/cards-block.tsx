import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import Card from "../molecules/card";
import Button from "../atoms/button";
import Loader from "../atoms/loader";
import {allProductsAPI} from "../../../services/AllProductsService";
import {useAppSelector} from "../../../hooks/redux";
import {RootState} from "../../../store/store";

function CardsBlock() {
    const location = useLocation();
    const category = useAppSelector((state: RootState) => state.categoryReducer.category)
    const search = useAppSelector((state: RootState) => state.searchReducer.search)

    const [skip, setSkip] = useState(0)

    const {data, isLoading, error} = allProductsAPI.useFetchAllProductsQuery(0)
    const {data: limitedCards, isLoading: limitedLoading, error: limitedError} = allProductsAPI.useFetchProductsLimitsQuery(skip)
    const {data: searchedCards, isLoading: searchedLoading, error: searchedError} = allProductsAPI.useFetchProductsBySearchingQuery(search)

    const [cardsData, setCardsData] = useState(data)
    const [isLoadingCards, setIsLoadingCards] = useState(true)
    const [errorLoadingCards, setErrorLoadingCards] = useState('')
    const [cardsNumber, setCardsNumber] = useState(9);
    const [renderingCards, setRenderingCards] = useState([]);
    const [isButtonMoreShown, setIsButtonMoreShown] = useState(false)

    useEffect(() => {
        if (isLoading || searchedLoading || limitedLoading) {
            setIsLoadingCards(true)
        }
    }, [isLoading, searchedLoading, limitedLoading])

    useEffect(() => {
        setErrorLoadingCards('')
        if (location.pathname !== '/products') {
            if (data) {
                setCardsData(data)
                setIsLoadingCards(isLoading)
                if (error) {
                    setErrorLoadingCards('No products found')
                }
            }
            if (category) {
                setIsLoadingCards(true)
                fetch(`https://dummyjson.com/products/category/${category}`)
                    .then((res) => res.json())
                    .then((data) => {
                        setCardsData(data)
                    })
                    .catch(() => {
                        setErrorLoadingCards('No products found in the selected categories')
                    })
                    .finally(() => {
                        setIsLoadingCards(false)
                    })
            }
        }
    }, [category, data, isLoading, location, error])

    useEffect(() => {
        setErrorLoadingCards('')
        if (location.pathname === '/products') {
            if (limitedCards) {
                setCardsData(limitedCards)
                setIsLoadingCards(limitedLoading)
                if (skip < limitedCards.total - 9) {
                    setIsButtonMoreShown(true)
                }
                if (limitedError) {
                    setErrorLoadingCards('No products found')
                }
            }
            if (search && searchedCards) {
                setCardsData(searchedCards)
                setIsLoadingCards(searchedLoading)
                setIsButtonMoreShown(false)
                if (searchedError || searchedCards.products.length === 0) {
                    setErrorLoadingCards('No products found for this search query')
                }
            }
        }
    }, [data, isLoading, location, search, limitedCards, searchedCards, searchedLoading, limitedLoading, limitedError, skip, searchedError])


    useEffect(() => {
        if (cardsData) {
            setIsLoadingCards(false)
            const cards = cardsData.products
            const moreRenderingCards = cards.slice(0, cardsNumber);
            setRenderingCards(moreRenderingCards);
            if (moreRenderingCards.length < cards.length) {
                setIsButtonMoreShown(true);
            } else setIsButtonMoreShown(false);
        }
    }, [cardsNumber, data, cardsData, skip]);

    function addMoreCard() {
        setCardsNumber(cardsNumber + cardsNumber);
    }

    function addSkip() {
        setSkip(skip => skip + 9)
    }

    return (
        <section className="cards-block">
            {isLoadingCards && <Loader />}
            {errorLoadingCards && <p>{errorLoadingCards}</p>}
            {(data || cardsData) && (
                <>
                    <ul className="cards-block__list">
                        {renderingCards.map((item) => <li key={item.id}><Card product={item} /></li>)}
                    </ul>
                    {location.pathname !== "/products" &&
                        <Button color={"primary"} size={"sm"} name={"Show more"}
                            onClick={addMoreCard}
                            isVisible={isButtonMoreShown}
                    />}
                    {(location.pathname === "/products" && !search && limitedCards) &&
                        <Button color={"primary"} size={"sm"} name={"Show more"}
                        onClick={addSkip}
                        isVisible={skip < limitedCards.total}
                        />}
                </>
            )}
            {error && <p>Not found any products</p>}
        </section>
    )
}

export default CardsBlock