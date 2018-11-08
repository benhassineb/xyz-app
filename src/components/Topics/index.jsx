import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Topic } from './topic';

export class Topics extends React.Component {
    render() {
        return <div>
            <h2>Topics</h2>
            <ul className='nav'>
                <li className='nav-item'>
                    <NavLink className='nav-link' to={`${this.props.match.url}/components`}>Components</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to={`${this.props.match.url}/props-v-state`}>Props v. State</NavLink>
                </li>
            </ul>

            <Route path={`${this.props.match.path}/:id?`} component={Topic} />
        </div>
    }
}



