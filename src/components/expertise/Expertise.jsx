import "./styles.css";

function Expertise(props){
    return(
        <div className="expertise-grid__item" style={{backgroundColor:props.color}} >
            <span className="expertise-grid__title">{props.name}</span>
            <p className="expertise-grid__years">{props.years}x</p>
        </div>
    )
}
export default Expertise