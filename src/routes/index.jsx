import React from "react";
import { Route } from "react-router-dom";
import {Layout} from '../layout/index';
import {Topics} from '../components/topics/index'
import {TodoApp} from "../components/todo/AppTodo";
import counter from "../components/counter";

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;

export const routes = <Layout>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/topics" component={Topics} />
    <Route path="/todolist" component={TodoApp} />
    <Route path="/counter" component={counter} />
</Layout>;
