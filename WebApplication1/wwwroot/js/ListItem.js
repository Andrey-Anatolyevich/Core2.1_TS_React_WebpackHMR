import * as React from "react";
export class ListItem extends React.Component {
    render() {
        return React.createElement("li", null,
            this.props.name,
            ": ",
            this.props.points,
            " points");
    }
}
//# sourceMappingURL=ListItem.js.map