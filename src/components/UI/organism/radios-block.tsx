import {categories} from "../../../utils/constants";
import Button from "../atoms/button";
import RadiosList from "../molecules/radios-list";

function RadiosBlock() {
    return (
        <section className="radios-block block">
            <h3 className="block__title">Selection by parameters</h3>
            <h4 className="block__title block__title_type_secondary">Category</h4>
            <RadiosList categories={categories} />
            <Button type={"secondary"} size={"medium"} name={"Apply"} />
            <Button type={"transparent"} size={"xs"} name={"Reset"} />
        </section>
    )
}

export default RadiosBlock