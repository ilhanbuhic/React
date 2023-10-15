import './css/button.css'

export const Button = ({ className, btnText }) => {
    return (
        <button className = {className}>{btnText}</button>

    )
}