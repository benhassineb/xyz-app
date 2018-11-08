import * as React from 'react';
import { NavMenu } from './nav-menu';

export class Layout extends React.Component {
    constructor() {
        super();
        this.menu = [{
            href: '/home',
            label: 'Home'
        }, {
            href: '/about',
            label: 'About'
        }, {
            href: '/topics',
            label: 'Topics'
        }]
    }

    render() {
        return <div className='container-fluid'>
            <div className='row'>
                <div className='col-2'>
                   <NavMenu menu={this.menu}/>
                </div>
                <div className='col-10'>
                    {this.props.children}
                </div>
            </div>
        </div>;
    }
}
