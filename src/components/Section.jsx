import "./Section.styles.css" 

const Section = ({ title, children }) =>{
    return(
        <div id="skills-section" className="section">
            <div className="container">
                <h2>{title}</h2> 
                {children}
            </div>
        </div>
    )
}

export default Section;
