import React from "react";
import { useState } from "react";

type RadiosProps = {
    categories:
        {
            name: string,
            id: number | string
        }[]
}


function RadiosList(props: RadiosProps) {
    const { categories } = props
    const [option, setOption] = useState("1")

    function changeValue(event: React.ChangeEvent<HTMLInputElement>) {
        setOption(event.target.value)
    }

    const listItems = categories.map(item =>
        <li key={item.id}>
            <label className="radio-button-default">
                <input type="radio" value={item.id} onChange={changeValue} checked={option == item.id}/>
                <span className="radio-button-default__label">{item.name}</span>
            </label>
        </li>
    )
    return <ul className="radios-list">{listItems}</ul>;
}

export default RadiosList