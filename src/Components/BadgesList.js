import React from "react";
import {Link} from "react-router-dom";

function useSearchBadges(badges) {
    const [query, setQuery] = React.useState('');
    const [filteredResults, setFilteredResults] = React.useState(badges);
    React.useMemo(() => {
        const filter = badges.filter(badge => `${badge.firstName} ${badge.lastName}`
            .toLowerCase().includes(query.toLowerCase()));
        setFilteredResults(filter);
    }, [badges, query]);
    return {query, setQuery, filteredResults}
}

function BadgesList(props) {

    const badges = props.badges;
    const {query, setQuery, filteredResults} = useSearchBadges(badges);


    if (badges.length === 0) {
        return (
            <div>
                <h3>No badges Found</h3>
                <Link className="btn btn-primary" to="/badges/new">Create new Badge</Link>
            </div>
        )
    }
    return (
        <React.Fragment>
            <div className="form-group">
                <label>Badges</label>
                <input type="text" className="form-control"
                       value={query}
                       onChange={(e) => {
                           setQuery(e.target.value);
                       }}
                />
            </div>
            <ul className="list-unstyled">
                {
                    filteredResults.map((badge) => {
                        return (
                            <li key={badge.id}>
                                <Link to={`/badges/${badge.id}`} className="text-reset text-decoration-none">
                                    <div className="card">
                                        <div className="card-body">
                                            <p>{badge.firstName}{badge.lastName}</p>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </React.Fragment>
    )
}

export default BadgesList;
