import * as React from "react";

export class PageDetails extends React.Component {
    public render() {
        let postId = (this.props as any).match.params.postId;

        return (
            <span>Details by ID: {postId}</span>
        );
    }
}