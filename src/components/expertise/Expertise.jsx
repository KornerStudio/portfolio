import "./styles.css";

function Expertise(props){
    
    const Years = () => {
        const yearList = [];
        for(var i = 1; i<=10; i++) {
            let className="expertise-year"
            if(i<=props.years){
                className=className+" has-expertise"
            }
            yearList.push(<div key={`year-${i}`} className={className}/>);
        }

        return yearList;
    };

    return(
        <div className="expertise">
            <Years/>
        </div>
    )
}
export default Expertise