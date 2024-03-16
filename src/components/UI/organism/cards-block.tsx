import imageSrc from "../../../assets/sneakers.jpg"
import Button from "../atoms/button";

function CardsBlock() {
    return (
        <section className="cards-block">
            <ul className="cards-block__list">
                <li>
                    <article className="card">
                        <img src={imageSrc} className="card__image" alt="Photo of the product Sneakers"/>
                        <h4 className="card__title">Nike Air Force 1 '07 QS</h4>
                        <p className="card__text">110 $</p>
                    </article>
                </li>
                <li>
                    <article className="card">
                        <img src={imageSrc} className="card__image" alt="Photo of the product Sneakers"/>
                        <h4 className="card__title">Nike Air Force 1 '07 QS</h4>
                        <p className="card__text">110 $</p>
                    </article>
                </li>
                <li>
                    <article className="card">
                        <img src={imageSrc} className="card__image" alt="Photo of the product Sneakers"/>
                        <h4 className="card__title">Nike Air Force 1 '07 QS</h4>
                        <p className="card__text">110 $</p>
                    </article>
                </li>
                <li>
                    <article className="card">
                        <img src={imageSrc} className="card__image" alt="Photo of the product Sneakers"/>
                        <h4 className="card__title">Nike Air Force 1 '07 QS</h4>
                        <p className="card__text">110 $</p>
                    </article>
                </li>
                <li>
                    <article className="card">
                        <img src={imageSrc} className="card__image" alt="Photo of the product Sneakers"/>
                        <h4 className="card__title">Nike Air Force 1 '07 QS</h4>
                        <p className="card__text">110 $</p>
                    </article>
                </li>
                <li>
                    <article className="card">
                        <img src={imageSrc} className="card__image" alt="Photo of the product Sneakers"/>
                        <h4 className="card__title">Nike Air Force 1 '07 QS</h4>
                        <p className="card__text">110 $</p>
                    </article>
                </li>
            </ul>
            <Button type={"primary"} size={"sm"} name={"Show more"} />
        </section>
    )
}

export default CardsBlock