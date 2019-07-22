import * as React from "react";
export interface ListItemProps { name: string, rank: number, points: number, key: string }
export class ListItem extends React.Component<ListItemProps>{
    render() {
        return <li key={this.props.key}>{this.props.name}: {this.props.points} points.</li>
    }
}