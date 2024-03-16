import CheckboxList from "../../checkbox-list";
import {categories} from "../../../constants";
import Button from "../atoms/button";

function CheckboxBlock() {
    return (
        <section className="checkbox-block block">
            <h3 className="block__title">Selection by parameters</h3>
            <h4 className="block__title block__title_type_secondary">Category</h4>
            <CheckboxList categories={categories} />
            <Button type={"secondary"} size={"medium"} name={"Apply"} />
            <Button type={"transparent"} size={"xs"} name={"Reset"} />
        </section>
    )
}

export default CheckboxBlock
