import * as React from "react";
import { ListItem } from "./ListItem";
export class List extends React.Component {
    render() {
        const Items = this.props.items.map((item) => {
            return React.createElement(ListItem, { name: item.name, rank: item.rank, points: item.points });
        });
        return (React.createElement("ol", null, Items));
    }
}
//# sourceMappingURL=List.js.map