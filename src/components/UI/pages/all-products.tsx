import Header from "../../header";
import CardsBlock from "../organism/cards-block";
import SearchForm from "../molecules/search-form";

function AllProductsPage() {
    return (
        <>
            <Header type={"secondary"} />
            <section className="container block admin-page">
                <h2 className="block__title">
                    All products
                </h2>
                <SearchForm />
                <CardsBlock />
            </section>
        </>
    )
}

export default AllProductsPage