import React from 'react';


class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = event => {
        // use event.preventDefault to stop the user accidentally submitting a form
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        {/* Don't put () after this.onInputChange() when we pass a callback function cause you don't want it to be invoked automatically */}
                        <input type="text" value={this.state.term} onChange={e => this.setState({ term: e.target.value })}></input>
                    </div>
                </form>
            </div>
        );
    }

}

export default SearchBar;