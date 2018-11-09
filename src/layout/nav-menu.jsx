import * as React from 'react';
import { NavLink } from 'react-router-dom';

export class NavMenu extends React.Component {
    render() {
        return <div className="container">
            <div className='nav flex-column nav-pills'>
                {this.props.menu && this.props.menu.map((item) =>
                    <li key={item.id} className='nav-item'>
                        <NavLink exact={item.exact} activeClassName='active' className='nav-link' to={item.href}>{item.label}</NavLink >
                    </li>
                )}
            </div>
        </div>
    }
}


