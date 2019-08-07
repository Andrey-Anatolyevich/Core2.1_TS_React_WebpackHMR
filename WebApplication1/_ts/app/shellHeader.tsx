import * as React from "react";
import { NavLink } from "react-router-dom";


export class ShellHeader extends React.Component {
    public render() {
        return <React.Fragment>
            <NavLink to="/">GO HOME</NavLink>
        </React.Fragment>;
    }
}