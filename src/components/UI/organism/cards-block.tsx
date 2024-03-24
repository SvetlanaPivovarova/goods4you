import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import Card from "../molecules/card";
import Button from "../atoms/button";
import Loader from "../atoms/loader";
import {allProductsAPI} from "../../../services/AllProductsService";
import {useAppSelector} from "../../../hooks/redux";
import {RootState} from "../../../store/store";
import {productsByCategoryAPI} from "../../../services/ProductsByCategoryService";
import {productsLimitsAPI} from "../../../services/ProductsLimitsService";
import {productsBySearchingAPI} from "../../../services/ProductsBySearching";

function CardsBlock() {
    const location = useLocation();
    const category = useAppSelector((state: RootState) => state.categoryReducer.category)
    const search = useAppSelector((state: RootState) => state.searchReducer.search)

    const [skip, setSkip] = useState(0)

    const {data, isLoading, error} = allProductsAPI.useFetchAllProductsQuery(0)
    const {data: filteredData, isLoading: isLoadingFiltered, error: filteredError} = productsByCategoryAPI.useFetchProductsByCategoryQuery(category)
    const {data: limitedCards, isLoading: limitedLoading, error: limitedError} = productsLimitsAPI.useFetchProductsLimitsQuery(skip)
    const {data: searchedCards, isLoading: searchedLoading, error: searchedError} = productsBySearchingAPI.useFetchProductsBySearchingQuery(search)

    const [cardsData, setCardsData] = useState(data)
    const [isLoadingCards, setIsLoadingCards] = useState(true)
    const [cardsNumber, setCardsNumber] = useState(9);
    const [renderingCards, setRenderingCards] = useState([]);
    const [isButtonMoreShown, setIsButtonMoreShown] = useState(false)

    useEffect(() => {
        if (isLoading || isLoadingFiltered || searchedLoading || limitedLoading) {
            setIsLoadingCards(true)
        }
    }, [isLoading, isLoadingFiltered, searchedLoading, limitedLoading])

    useEffect(() => {
        if (location.pathname === '/products') {
            if (limitedCards) {
                setCardsData(limitedCards)
                setIsLoadingCards(limitedLoading)
                if (skip < limitedCards.total - 9) {
                    setIsButtonMoreShown(true)
                }
            }
            if (search && searchedCards) {
                setCardsData(searchedCards)
                setIsLoadingCards(searchedLoading)
                setIsButtonMoreShown(false)
            }
        }
        else {
            if (category) {
                setCardsData(filteredData)
                setIsLoadingCards(isLoadingFiltered)
            } else {
                setCardsData(data)
                setIsLoadingCards(isLoading)
            }
        }
    }, [data, isLoading, filteredData, isLoadingFiltered, category, location, search, limitedCards, searchedCards, searchedLoading])


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

    function addSkip(event) {
        event.preventDefault()
        setSkip(skip => skip + 9)
    }

    return (
        <section className="cards-block">
            {isLoadingCards && <Loader />}
            {(error || filteredError || searchedError || limitedError) && <p>Can`t find products</p>}
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