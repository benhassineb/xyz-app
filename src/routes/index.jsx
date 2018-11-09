import React from "react";
import { Route } from "react-router-dom";
import { Layout } from '../layout/index';
import { routes } from "./routes";

export const Home = () => <h2>Home</h2>;
export const About = () => <h2>About</h2>;
export class ApplicationRoutes extends React.Component {
    constructor() {
        super();
        this.menu = routes;
    }

    render() {
        return <Layout menu={this.menu}>
            {this.menu && this.menu.map((item) =>
                <Route exact={item.exact} key={item.id} path={item.href} component={item.component} />
            )}
        </Layout >
    }
}
