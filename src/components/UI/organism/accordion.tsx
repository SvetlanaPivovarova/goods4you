
function Accordion() {
    return (
        <>
            <section className="section-dropdown-menu">
                <div className="section-dropdown">
                    <div className="section-dropdown__item">
                        <input className="dropdown-sub" type="checkbox" id="dropdown-sub-1" name="dropdown-sub-1"/>
                        <label className="for-dropdown-sub" htmlFor="dropdown-sub-1">Question 1<i
                            className="ui-arrow"></i></label>
                        <div className="section-dropdown-sub">
                            <p className="section-dropdown-sub__text">Long answer to the first question</p>
                        </div>
                    </div>
                    <div className="section-dropdown__item">
                        <input className="dropdown-sub" type="checkbox" id="dropdown-sub-2" name="dropdown-sub-2"/>
                        <label className="for-dropdown-sub" htmlFor="dropdown-sub-2">Question 2<i
                            className="ui-arrow"></i></label>
                        <div className="section-dropdown-sub">
                            <p className="section-dropdown-sub__text">Long answer to the second question</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Accordion