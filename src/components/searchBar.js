import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search DailySmarty"/>
            </form>
        );
    }
}

export default SearchBar;