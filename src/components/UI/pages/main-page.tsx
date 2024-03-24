import Header from "../../header";
import Cover from "../../cover";
import Catalog from "../../catalog";
import AboutBlock from "../organism/about-block";
import Quiz from "../../quiz";
import Team from "../../team";
import FAQ from "../../faq";
import Footer from "../../footer";
import {categoriesAPI} from "../../../services/CategoriesService";
import Loader from "../atoms/loader";


function MainPage() {
    const {isLoading} = categoriesAPI.useFetchAllCategoriesQuery('');

    return (
        <>
            {isLoading && <Loader />}
            <Header type={"primary"} />
            <Cover />
            <Catalog />
            <AboutBlock />
            <Quiz />
            <Team />
            <FAQ />
            <Footer />
        </>
    )
}

export default MainPage