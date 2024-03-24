import Header from "../../header";
import CardsBlock from "../organism/cards-block";
import SearchForm from "../molecules/search-form";
import {productsBySearchingAPI} from "../../../services/ProductsBySearching";
import {useEffect, useState} from "react";
import {useAppDispatch} from "../../../hooks/redux";
import {categorySlice} from "../../../store/reducers/CategorySlice";
import {searchSlice} from "../../../store/reducers/SearchSlice";

function AllProductsPage() {
    const [productSearch, setProductSearch] = useState('')
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (productSearch) {
            dispatch(searchSlice.actions.addSearch(productSearch));
        }
    }, [productSearch])

    return (
        <>
            <Header type={"secondary"} />
            <section className="container block admin-page">
                <h2 className="block__title">
                    All products
                </h2>
                <SearchForm setProductSearch={setProductSearch} />
                <CardsBlock />
            </section>
        </>
    )
}

export default AllProductsPage