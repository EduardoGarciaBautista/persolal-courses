import React from "react";
import confLogo from "../images/platziconf-logo.svg";
import Badge from "../Components/Badge";
import {Link} from "react-router-dom";
import DeleteBadgeModal from "../Components/DeleteBadgeModal";

function useIncreasoCount(max) {
    const [count, setCount] = React.useState(0);
    if (count > max) {
        setCount(0);

    }
    return [count, setCount];
}

function BadgeDetail(props) {
    const [count, setCount] = useIncreasoCount(4);

    return (
        <React.Fragment>

            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={confLogo} alt="Logo"/>
                        </div>
                        <div className="col-md-6 BadgeDetails__hero-attendant-name">
                            <h1>{props.badge.firstName} {props.badge.lastName}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge
                            firstName={props.badge.firstName}
                            lastName={props.badge.lastName}
                            email={props.badge.email}
                            twitter={props.badge.twitter}
                            jobTitle={props.badge.jobTitle}
                        />
                    </div>
                    <div className="col">
                        <h2>Actions</h2>
                        <div>
                            <div>
                                <button onClick={() => {
                                    setCount(count + 1)
                                }} className="btn btn-primary"> Count
                                </button>
                                increase count: {count}
                                <Link className="btn btn-primary mb-4" to={`/badges/${props.badge.id}/edit`}>Edit</Link>
                            </div>
                            <div>
                                <button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
                                <DeleteBadgeModal
                                    isOpen={props.modalIsOpen}
                                    onDeleteBadge={props.onDeleteBadge}
                                    onCloseModal={props.onCloseModal}> Hola</DeleteBadgeModal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default BadgeDetail;
