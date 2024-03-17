import Button from "./UI/atoms/button";

function Cover() {
    return (
        <section className="cover">
            <div className="container">
                <div className="cover__title">
                    <h1 className="title">Any products from famous brands with worldwide delivery</h1>
                    <p className="subtitle">We&nbsp;sell smartphones, laptops, clothes, shoes and many other products at&nbsp;low prices</p>
                </div>
                <Button color={"primary"} size={"normal"} name={"Go to shopping"} />
            </div>
        </section>
    )
}

export default Cover