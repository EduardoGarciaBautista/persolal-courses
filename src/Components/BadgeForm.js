import React from "react";

class BadgeForm extends React.Component {

    handleChange = e => {
    };
    handleClick = (e) => {
        console.log(this.state);
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <React.Fragment>
                {this.props.isEdition ?
                    <h1>New Attendant</h1>:
                    <h1>Editing Attendant</h1>
                }
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text"
                               onChange={this.props.onChange}
                               className="form-control"
                               name="firstName"
                               value={this.props.formValues.firstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text"
                               onChange={this.props.onChange}
                               className="form-control"
                               name="lastName"
                               value={this.props.formValues.lastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>E-mail</label>
                        <input type="email"
                               onChange={this.props.onChange}
                               className="form-control"
                               name="email"
                               value={this.props.formValues.email}
                        />
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input type="text"
                               onChange={this.props.onChange}
                               className="form-control"
                               name="jobTitle"
                               value={this.props.formValues.jobTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input type="text"
                               onChange={this.props.onChange}
                               className="form-control"
                               name="twitter"
                               value={this.props.formValues.twitter}
                        />
                    </div>
                    <button type="button" className="btn btn-primary"
                            onClick={this.props.onSubmit}>Save
                    </button>
                </form>
                {this.props.error && (
                    <p className="text-danger">{this.props.error.message}</p>
                )
                }
            </React.Fragment>
        )
    }
}

export default BadgeForm;
