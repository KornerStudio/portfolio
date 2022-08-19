import ProjectList from './project-list/ProjectList';
import Icon from './icon/Icon';

function Dialog({ activeDialog, companies, setActiveDialog }){
    const handlePrev = () => {
        if (activeDialog > 0) {
            setActiveDialog(activeDialog - 1);
        }
    }
    
    const handleNext = () => {
        if (activeDialog < companies?.length - 1) {
            const nextCompany = activeDialog + 1;
            setActiveDialog(nextCompany);
        }
    }

    if (!companies[activeDialog]) {
        return null;
    }

    return(
        <div className="modal fade" id="project-dialog">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{companies[activeDialog].name}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="card-text">Projects: {companies?.projects?.length}</p> 
                        <ProjectList projects={companies[activeDialog]?.projects}/>
                        
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn
                            btn-primary"
                            onClick={handlePrev}
                            disabled={activeDialog === 0}
                        >
                            <Icon use="ArrowLeft"/>
                            Previous
                        </button>
                        <button
                            type="button"
                            className="btn
                            btn-primary"
                            onClick={handleNext}
                            disabled={activeDialog === companies.length - 1}
                        >
                            Next
                            <Icon use="ArrowRight"/>
                        </button>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default Dialog;