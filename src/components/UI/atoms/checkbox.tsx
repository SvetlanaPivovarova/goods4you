function Checkbox(props: string) {
    const { name } = props
    return (
        <label className="checkbox-default">
            {name}
            <input type="checkbox" />
                <span className="checkbox-default__label"></span>
        </label>
    )
}

export default Checkbox