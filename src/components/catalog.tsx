import CheckboxBlock from "./UI/organism/checkbox-block";
import CardsBlock from "./UI/organism/cards-block";

function Catalog() {
    return (
        <section className="block">
            <h4 className="block__title">Catalog</h4>
            <div className="block__flex-container">
                <CheckboxBlock />
                <CardsBlock />
            </div>
        </section>
    )
}

export default Catalog