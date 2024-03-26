
type CheckboxProps = {
    name: string;
    value: string,
    checked: boolean,
    index: number,
    onChange: () => void
}

function Checkbox(props: CheckboxProps) {
    const { name, value, index, checked, onChange } = props

    return (
        <label className="checkbox-default">
            {name}
            <input type="checkbox" value={value} checked={checked} onChange={() => onChange(index)} />
                <span className="checkbox-default__label"></span>
        </label>
    )
}

export default Checkbox