const Greet2 = (props) => {
    return <div>
        <button style = {{backgroundColor: props.bgColor , color: props.color }}> {props.text} </button>
    </div>
}
export default Greet2;