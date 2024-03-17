import {ChangeEvent} from 'react'

type RadiobuttonProps = {
    name: string,
    id: string,
    onChange: (e: ChangeEvent) => void;
    option: string | number
}

function Radiobutton(props: RadiobuttonProps) {
    const { name, id, onChange, option } = props

    return (
        <label className="radio-button-default">
            <input type="radio" value={id} onChange={onChange} checked={option == id}/>
            <span className="radio-button-default__label">{name}</span>
        </label>
    )
}

export default Radiobutton