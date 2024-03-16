
type ButtonProps = {
    type: string,
    size: string,
    name: string
}

function Button({type, size = 'normal', name}: ButtonProps) {
    const buttonClass = `button button_type_${type} button_size_${size}`
    return (
        <button className={buttonClass}>
            {name}
        </button>
    )
}

export default Button