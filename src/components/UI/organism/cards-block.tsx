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
    console.log('selectedCategory', count, countN)
    const {data, isLoading, error} = allProductsAPI.useFetchAllProductsQuery(9)

    return (
        <section className="cards-block">
            {isLoading && <Loader />}
            {data && (
                <>
                    <ul className="cards-block__list">
                        {data.products.map((item) => <li key={item.id}><Card product={item} /></li>)}
                    </ul>
                    <Button color={"primary"} size={"sm"} name={"Show more"} />
                </>
            )}
            {error && <p>Not found any products</p>}
        </section>
    )
}

export default CardsBlock