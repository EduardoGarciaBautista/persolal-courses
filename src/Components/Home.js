import React from "react";

class Home extends React.Component {
    state = {
        loading: true,
        error: null,
        results: [],
        nextPage: 1
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    compo
    componentDidMount() {
        this.setState({loading: true, error: null});
        this.fetchCharacters().then(r => {
            console.log(r);
        });
    }

    fetchCharacters = async () => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`);
            const data = await response.json();
            this.setState({
                results: data.results
            });
            this.setState({loading: false, error: null, nextPage: this.state.nextPage + 1});
        } catch (e) {
            this.setState({loading: true, error: e});
        }
    }

    render() {
        if (this.state.error) {
            return <h1>Error</h1>;
        }
        if (this.state.loading) {
            return <h1>Loading..</h1>;
        }

        return (
            <div>
                {
                    this.state.results.map(result => {
                        return (
                            <ul>
                                <li key={result.id}>{result.name}</li>
                            </ul>
                        )
                    })
                }
                {!this.state.loading && (
                    <button onClick={() => this.fetchCharacters()}>Load More</button>
                )

                }
                <input type="text" keyd/>
            </div>
        )
    }
}

export default Home;
