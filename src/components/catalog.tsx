import CardsBlock from "./UI/organism/cards-block";
import RadiosBlock from "./UI/organism/radios-block";

function Catalog() {
    return (
        <section className="block">
            <h4 className="block__title">Catalog</h4>
            <div className="block__flex-container">
                <RadiosBlock />
                <CardsBlock />
            </div>
        </section>
    )
}

export default Catalog