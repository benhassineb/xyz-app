import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Topic } from './topic';
import { routes } from '../../routes/routes';

export class Topics extends React.Component {
    constructor(props) {
        super(props);
        this.menu = routes.find((item) => item.href === this.props.match.path);
    }
    render() {
        return <div>
            <h2>Topics</h2>
            {this.menu && this.menu.children &&
                <div>
                    <ul className='nav nav-pills'>
                        {this.menu.children.map((item) =>
                            <li key={item.id} className='nav-item'>
                                <NavLink className='nav-link' to={`${this.props.match.url + item.href}`}>{item.label}</NavLink>
                            </li>
                        )}
                    </ul>
                    <Route path={`${this.props.match.path}/:id?`} component={Topic} />
                </div>}
        </div>
    }
}







