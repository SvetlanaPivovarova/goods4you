//import imageSrc from "../../../assets/sneakers.jpg"
import Card from "../molecules/card";
import Button from "../atoms/button";
import { product } from "../../../utils/constants";

function CardsBlock() {
    return (
        <section className="cards-block">
            <ul className="cards-block__list">
                <li>
                    <Card product={product} />
                </li>
                <li>
                    <Card product={product} />
                </li>
                <li>
                    <Card product={product} />
                </li>
                <li>
                    <Card product={product} />
                </li>
                <li>
                    <Card product={product} />
                </li>
                <li>
                    <Card product={product} />
                </li>
                <li>
                    <Card product={product} />
                </li>
                <li>
                    <Card product={product} />
                </li>
                <li>
                    <Card product={product} />
                </li>
            </ul>
            <Button color={"primary"} size={"sm"} name={"Show more"} />
        </section>
    )
}

export default CardsBlock