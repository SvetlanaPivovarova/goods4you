import Button from "../atoms/button";
import {categoriesAPI} from "../../../services/CategoriesService";
import React, {useEffect, useState} from "react";
import {useAppDispatch} from "../../../hooks/redux";
import {categorySlice} from "../../../store/reducers/CategorySlice";

function RadiosBlock() {
    const [option, setOption] = useState('');
    const [listItems, setListItems] = useState(null)

    const {data} = categoriesAPI.useFetchAllCategoriesQuery('');

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (data) {
            const list = data.map(item =>
                <li key={item}>
                    <label className="radio-button-default">
                        <input type="radio" value={item} onChange={changeValue} checked={option == item}/>
                        <span className="radio-button-default__label">{item}</span>
                    </label>
                </li>
            )
            setListItems(list)
        }
    }, [data, option])

    function handleChoose(event) {
        event.preventDefault();
        dispatch(categorySlice.actions.addCategory(option));
    }

    function handleReset(event) {
        event.preventDefault();
        setOption('');
        dispatch(categorySlice.actions.addCategory(''));
    }

    function changeValue(event: React.ChangeEvent<HTMLInputElement>) {
        setOption(event.target.value)
    }

    return (
        <section className="radios-block block">
            <h3 className="block__title">Selection by parameters</h3>
            <h4 className="block__title block__title_type_secondary">Category</h4>
            <form className="form">
                {data && <ul className="radios-list">{listItems}</ul>}
                <Button color={"secondary"} size={"medium"} name={"Apply"} onClick={handleChoose} isVisible={true}/>
                <Button color={"transparent"} size={"xs"} name={"Reset"} onClick={handleReset} isVisible={true} />
            </form>
        </section>
    )
}

export default RadiosBlock