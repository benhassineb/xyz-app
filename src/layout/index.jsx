import * as React from 'react';
import { NavMenu } from './nav-menu';

export class Layout extends React.Component {
    constructor() {
        super();
        this.menu = [{
            id: 0,
            href: '/',
            label: 'Home',
            exact: true
        }, {
            id: 1,
            href: '/about',
            label: 'About',
            exact: false
        }, {
            id: 2,
            href: '/topics',
            label: 'Topics',
            exact: false
        },
        {
            id: 3,
            href: '/todolist',
            label: 'Todo List',
            exact: false
        },
        {
            id: 4,
            href: '/counter',
            label: 'Counter',
            exact: false
        }]
    }

    render() {
        return <div className='container-fluid'>
            <div className='row'>
                <div className='col-2'>
                    <NavMenu menu={this.menu} />
                </div>
                <div className='col-10'>
                    {this.props.children}
                </div>
            </div>
        </div>;
    }
}
