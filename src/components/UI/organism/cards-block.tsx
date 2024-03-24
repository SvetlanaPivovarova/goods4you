import {useEffect, useState} from "react";
import Card from "../molecules/card";
import Button from "../atoms/button";
import Loader from "../atoms/loader";
import {allProductsAPI} from "../../../services/AllProductsService";
import {useAppSelector} from "../../../hooks/redux";
import {RootState} from "../../../store/store";
import {useSelector} from "react-redux";

function CardsBlock() {
    const count = useAppSelector((state: RootState) => state.categoryReducer.category)
    const countN = useSelector((state: RootState) => state.categoryReducer.category)
    console.log('selected', count, countN)

    const {data, isLoading, error} = allProductsAPI.useFetchAllProductsQuery(9)

    const [cardsNumber, setCardsNumber] = useState(9);
    const [renderingCards, setRenderingCards] = useState([]);
    const [isButtonMoreShown, setIsButtonMoreShown] = useState(false);

    useEffect(() => {
        if (data) {
            const cards = data.products
            const moreRenderingCards = cards.slice(0, cardsNumber);
            setRenderingCards(moreRenderingCards);
            if (moreRenderingCards.length < cards.length) {
                setIsButtonMoreShown(true);
            } else setIsButtonMoreShown(false);
        }
    }, [cardsNumber, data]);

    function addMoreCard() {
        setCardsNumber(cardsNumber + cardsNumber);
    }

    return (
        <section className="cards-block">
            {isLoading && <Loader />}
            {data && (
                <>
                    <ul className="cards-block__list">
                        {renderingCards.map((item) => <li key={item.id}><Card product={item} /></li>)}
                    </ul>
                    <Button color={"primary"} size={"sm"} name={"Show more"}
                            onClick={addMoreCard}
                            isVisible={isButtonMoreShown}
                    />
                </>
            )}
            {error && <p>Not found any products</p>}
        </section>
    )
}

export default CardsBlock