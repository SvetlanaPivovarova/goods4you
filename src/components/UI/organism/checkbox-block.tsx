import CheckboxList from "../molecules/checkbox-list";
import Stepper from "../molecules/stepper";
import {categoriesAPI} from "../../../services/CategoriesService";

function CheckboxBlock() {
    const {data} = categoriesAPI.useFetchAllCategoriesQuery('')
    return (
        <section className="checkbox-block container block">
            <div className="block__container-with-dash">
                <h2 className="title block__title">We will select the perfect product for you</h2>
                <p className="subtitle subtitle_type_grey">Answer three questions and we will send you a catalog with the most suitable products for you.</p>
            </div>
            <div className="block__container-with-dash">
                <h3 className="block__title block__title_type_secondary">
                    What type of product are you considering?
                </h3>
                {data&& <CheckboxList items={data} />}
            </div>
            <Stepper />
        </section>
    )
}

export default CheckboxBlock
