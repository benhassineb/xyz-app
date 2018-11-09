import * as React from 'react';
import { NavMenu } from './nav-menu';

export class Layout extends React.Component {
    render() {
        return <div className='container-fluid'>
            <div className='row'>
                <div className='col-2'>
                    <NavMenu menu={this.props.menu} />
                </div>
                <div className='col-10'>
                    {this.props.children}
                </div>
            </div>
        </div>;
    }
}
