import "./Button.css"
const Button = (props) => {
    return (
        <div>
            <button name="button" value="OK" type="button" onclick="" className={props.className}>{props.name}</button>  
        </div>
    )
}

export default Button