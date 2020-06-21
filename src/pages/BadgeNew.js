import React from "react";
import header from '../images/platziconf-logo.svg'
import Badge from "../Components/Badge";
import '../Components/styles/BadgeNew.css'
import BadgeForm from '../Components/BadgeForm';
import api from "../api";
import PageLoading from "../Components/PageLoading";

class BadgeNew extends React.Component {
    state = {
        form: {},
        loading: false,
        error: null
    }
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });

    }
    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({loading: true, error: null});
        try {
            await api.badges.create(this.state.form);
            this.setState({loading: false, error: null});
            this.props.history.push('/badges');
        } catch (e) {
            this.setState({loading: false, error: e});
        }
    }

    render() {
        if (this.state.loading) {
            return <PageLoading/>
        }
        return (
            <div>

                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName={this.state.form.firstName || 'FIRST NAME'}
                                   lastName={this.state.form.lastName || 'LAST NAME'}
                                   jobTitle={this.state.form.jobTitle || 'JOB TITTLE'}
                                   twitter={this.state.form.twitter || 'TWITTER'}
                                   email={this.state.form.email || 'EMAIL'}
                                   avatar="https://s.gravatar.com/avatar/843edf194594ed3006b8b72e17735239?s=80"/>
                        </div>
                        <div className="col-6">
                            <BadgeForm
                                onChange={this.handleChange}
                                formValues={this.state.form}
                                onSubmit={this.handleSubmit}
                                error={this.state.error}
                                isEdition={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;
