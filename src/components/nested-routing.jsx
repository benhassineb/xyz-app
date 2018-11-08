import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Topics } from "./Topics";
import { Layout } from "./layout";



const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;


export class NestedRouting extends React.Component {
    render() {
        return <Router>
            <Layout>
                <Route exact path="/nested-routing" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} />
            </Layout>            
        </Router>;
    }
}
