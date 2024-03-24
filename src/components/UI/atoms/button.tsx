
type ButtonProps = {
    color: string,
    size: string,
    name: string
}

function Button({color, size = 'normal', name}: ButtonProps) {
    const buttonClass = `button button_type_${color} button_size_${size}`
    return (
        <button className={buttonClass} aria-label={name}>
            {name}
        </button>
    )
}

export default Button