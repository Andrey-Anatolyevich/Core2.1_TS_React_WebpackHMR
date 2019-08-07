import * as React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import { ShellHeader } from './shellHeader';
import { ShellNav } from './shellNav';
import { PagesList } from "./pagesList";
import { PageItem } from "./pageItem";
import { PageDetails } from "./pageDetails";

export class AppShell extends React.Component {
    private initialTitle: string;

    public componentDidMount() {
        this.initialTitle = document.title;
        document.title = 'The app';
    };

    public componentWillUnmount() {
        document.title = this.initialTitle;
    }

    public render() {
        return <Router>
            <header>
                <ShellHeader key='Shell' />
            </header>
            <nav>
                <ShellNav key='NavBar' />
            </nav>
            <main>
                <Switch>
                    <Route path="/pageDetails/:postId" component={PageDetails} />
                    <Route exact path="/page" component={PageItem} />} />
                    <Route exact path="/" component={PagesList} />} />
                    <Redirect to="/" />
                </Switch>
            </main>
            <footer>
                footer
            </footer>
        </Router>;
    }
}