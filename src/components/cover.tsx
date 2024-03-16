import Button from "./UI/atoms/button";

function Cover() {
    return (
        <section className="cover">
            <div className="cover__title">
                <h1 className="title">Any products from famous brands with worldwide delivery</h1>
                <p className="subtitle">We&nbsp;sell smartphones, laptops, clothes, shoes and many other products at&nbsp;low prices</p>
            </div>
            <Button type="primary" name="Go to shopping" />
        </section>
    )
}

export default Cover