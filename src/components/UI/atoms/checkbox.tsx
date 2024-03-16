function Checkbox(props: string) {
    const { name } = props
    return (
        <label className="checkbox-default">
            <input type="checkbox" />
            <span className="checkbox-default__label">{name}</span>
        </label>
    )
}

export default Checkbox