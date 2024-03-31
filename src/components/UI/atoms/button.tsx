
type ButtonProps = {
    color: string,
    size: string,
    name: string,
    onClick: () => void,
    isVisible?: boolean
}

function Button({color, size = 'normal', name, onClick, isVisible}: ButtonProps) {
    const buttonClass = isVisible ? `button button_type_${color} button_size_${size}` : `button button_type_${color} button_size_${size} button_unvisible`
    return (
        <button className={buttonClass} aria-label={name} onClick={onClick}>
            {name}
        </button>
    )
}

export default Button