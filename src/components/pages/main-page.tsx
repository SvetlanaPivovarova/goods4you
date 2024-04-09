import Header from "../UI/organism/header";
import Cover from "../UI/molecules/cover";
import AboutBlock from "../UI/organism/about-block";
import Quiz from "../UI/organism/quiz";
import Team from "../UI/organism/team";
import FAQ from "../UI/organism/faq";
import Footer from "../UI/organism/footer";
import RadiosBlock from "../UI/organism/radios-block";
import CardsBlock from "../UI/organism/cards-block";

function MainPage() {
    return (
        <>
            <Header type={"primary"} />
            <main className="main">
                <Cover />
                <section className="block" id={"catalog"}>
                    <h2 className="block__title">Catalog</h2>
                    <div className="block__flex-container">
                        <RadiosBlock />
                        <CardsBlock />
                    </div>
                </section>
                <AboutBlock />
                <Quiz />
                <Team />
                <FAQ />
                <Footer />
            </main>
        </>
    )
}

export default MainPage