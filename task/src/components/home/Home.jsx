
import React from 'react';
import './home.css';
import Search from '../search/Search.jsx';
export default class Home extends React.Component {
    render() {
        return (
        <div className='min-home-div'>
            <header className='min-header'>
                <h1 className='min-title'>My Tasks</h1>
            <Search />
            </header>
        </div>
        );
    }
    }
