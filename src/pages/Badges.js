import React from "react";
import '../Components/styles/Badges.css';
import confLogo from '../images/badge-header.svg'
import BadgesList from "../Components/BadgesList";
import {Link} from "react-router-dom";
import api from "../api";
import PageLoading from "../Components/PageLoading";
import PageError from "../Components/PageError";



class Badges extends React.Component {
    state = {
        loading: true,
        error: null,
        data: [],
    }
    constructor(props) {
        super(props);
        console.log('1-constructor');
    }


    componentDidMount() {
        console.log('3.-Did Mount');
        this.fetchData();
        this.idInterval = setInterval(this.fetchData, 5000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('5 Did Update')
        console.log('prev', prevProps, 'Prev State', prevState);
        console.log('actual', this.props, 'state actual', this.state);
    }

    componentWillUnmount() {
        console.log('6.- Will Unmount');
        clearTimeout(this.timeoutId);
        clearInterval(this.idInterval);
    }

    fetchData = async () => {
        this.setState({loading: true, error: null});
        try {
            const data = await api.badges.list();
            this.setState({loading: false, data: data});
        } catch (e) {
            this.setState({loading: false, error: e});
        }
    }

    render() {
        console.log('2/4.-Rneder');
        if (this.state.loading && !this.state.data) {
            return <PageLoading/>;
        }
        if (this.state.error) {
            return <PageError error={this.state.error} />
        }
        return (
            <div>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges-conf-logo" src={confLogo} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="Badge__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new">New Badge</Link>
                    </div>
                    <div className="BadgesList">
                        <div className="Badges__container">
                            <BadgesList badges={this.state.data}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Badges;
