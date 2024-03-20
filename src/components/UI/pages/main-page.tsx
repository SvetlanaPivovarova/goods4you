import Header from "../../header";
import Cover from "../../cover";
import Catalog from "../../catalog";
import AboutBlock from "../organism/about-block";
import Quiz from "../../quiz";
import Team from "../../team";
import FAQ from "../../faq";
import {Counter} from "../../some";
import Footer from "../../footer";

function MainPage() {
    return (
        <>
            <Header />
            <Cover />
            <Catalog />
            <AboutBlock />
            <Quiz />
            <Team />
            <FAQ />
            <Counter />
            <Footer />
        </>
    )
}

export default MainPage