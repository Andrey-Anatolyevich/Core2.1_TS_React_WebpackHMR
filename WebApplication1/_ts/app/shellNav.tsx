import * as React from "react";
import { NavLink } from "react-router-dom";

export class ShellNav extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <ul>
                    <li><NavLink to="/" exact>Index</NavLink></li>
                    <li><NavLink to="/page" exact>Some page</NavLink></li>
                    <li><NavLink to="/pageDetails/123" exact>Details on page 123</NavLink></li>
                </ul>
            </React.Fragment>
        );
    }
}