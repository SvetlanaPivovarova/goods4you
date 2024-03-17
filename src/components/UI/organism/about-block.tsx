import aboutImage from "../../../assets/about-block.png"
import aboutFigure from "../../../assets/about-figure.svg"

function AboutBlock() {
    return (
        <section className="block block_type_dark about-block">
            <img src={aboutFigure} className="block__back block__back_type_left"></img>
            <div className="block__content">
                <h2 className="block__title">About us</h2>
                <p className="block__text">
                    Every day a&nbsp;person has a&nbsp;choice what to&nbsp;spend his money&nbsp;on. Stores and websites offer an&nbsp;endless list of&nbsp;products. But we&nbsp;will help you make the right choice!
                </p>
                <p className="block__caption">
                    <span className="block__cite"></span>
                    Goods4you
                </p>
            </div>
            <img src={aboutImage} className="about-block__img" alt={'Illustration '} />
        </section>
    )
}

export default AboutBlock