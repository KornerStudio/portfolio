/* eslint-disable jsx-a11y/anchor-is-valid */
import './tabs.css';


function Tabs({ options, setActiveTab, activeTab }) {
    const toggleTab =(event, index) => {
        event.preventDefault();
        setActiveTab(index)
    }

    return (
        <div className="container tabs-container">
            <ul className="nav nav-pills">
                {options.map((option, index) => (
                    <li key={`tab-${index}`} className="nav-item">
                        <a
                            className={`nav-link ${activeTab === index && "active"}`}
                            onClick={(event) => {toggleTab(event, index)}}
                            href="#"
                        >
                            {option}
                        </a>
                    </li>
                ))}
            </ul>
        </div> 
    )
    }
    export default Tabs;