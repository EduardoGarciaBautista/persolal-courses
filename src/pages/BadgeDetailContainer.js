import React from "react";
import './styles/BadgeDetails.css'

import PageLoading from "../Components/PageLoading";
import PageError from "../Components/PageError";
import api from '../api'
import BadgeDetail from "./BadgeDetail";


class BadgeDetailContainer extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false
    }

    componentDidMount() {
        this.fetchData();
    }


    fetchData = async () => {
        this.setState({loading: true, error: null});
        try {
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({loading: false, error: null, data: data});
        } catch (e) {
            this.setState({loading: false, error: e});
        }
    }

    handleCloseModal = () => {
        this.setState({modalIsOpen: false});
    }
    handleOpenModal = () => {
        this.setState({modalIsOpen: true});
    }
    handleDeleteBadge = async () => {
        this.setState({loading: true, error: null});
        try {
            await api.badges.remove(this.props.match.params.badgeId);
            this.props.history.push('/badges')
            this.setState({loading: false, error: null});
        } catch (e) {
            this.setState({loading: false, error: e});
        }
    }

    render() {
        if (this.state.loading) {
            return <PageLoading/>
        }
        if (this.state.error) {
            return <PageError error={this.state.error}/>
        }
        const badge = this.state.data;
        return (
            <BadgeDetail
                onCloseModal={this.handleCloseModal}
                onOpenModal={this.handleOpenModal}
                modalIsOpen={this.state.modalIsOpen}
                onDeleteBadge={this.handleDeleteBadge}
                badge={badge}/>
        )
    }
}

export default BadgeDetailContainer;
