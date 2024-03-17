function Radiobutton(props: string) {
    const { name } = props
    return (
        <label className="radio-button-default">
            <input type="radio" />
            <span className="radio-button-default__label">{name}</span>
        </label>
    )
}

export default Radiobutton