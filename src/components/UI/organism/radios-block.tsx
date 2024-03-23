import Button from "../atoms/button";
import RadiosList from "../molecules/radios-list";
import {categoriesAPI} from "../../../services/CategoriesService";

function RadiosBlock() {

    const {data} = categoriesAPI.useFetchAllCategoriesQuery('')

    //useEffect(() => {
    //    fetch("https://dummyjson.com/products/categories")
    //        .then((res) => res.json())
    //        .then((data) => setCategories(data));
    //}, []);


    return (
        <section className="radios-block block">
            <h3 className="block__title">Selection by parameters</h3>
            <h4 className="block__title block__title_type_secondary">Category</h4>
            <form className="form">
                {data && <RadiosList categories={data} />}
                <Button color={"secondary"} size={"medium"} name={"Apply"} />
                <Button color={"transparent"} size={"xs"} name={"Reset"} />
            </form>
        </section>
    )
}

export default RadiosBlock