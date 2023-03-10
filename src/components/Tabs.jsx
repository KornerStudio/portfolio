import './Tabs.styles.css';

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
                        <button
                            className={`nav-link ${activeTab === index && "active"}`}
                            onClick={(event) => {toggleTab(event, index)}}
                        >
                            {option}
                        </button>
                    </li>
                ))}
            </ul>
        </div> 
    )
    }
    export default Tabs;