import React from "react";
import { useState } from "react";
import {useAppDispatch} from "../../../hooks/redux";
import {categorySlice} from "../../../store/reducers/CategorySlice"

type RadiosProps = {
    categories: string[]
}

function RadiosList(props: RadiosProps) {
    const { categories } = props
    const [option, setOption] = useState("")
    const dispatch = useAppDispatch()

    function changeValue(event: React.ChangeEvent<HTMLInputElement>) {
        setOption(event.target.value)
        dispatch(categorySlice.actions.addCategory(event.target.value))
    }

    const listItems = categories.map(item =>
        <li key={item}>
            <label className="radio-button-default">
                <input type="radio" value={item} onChange={changeValue} checked={option == item}/>
                <span className="radio-button-default__label">{item}</span>
            </label>
        </li>
    )
    return <ul className="radios-list">{listItems}</ul>;
}

export default RadiosList