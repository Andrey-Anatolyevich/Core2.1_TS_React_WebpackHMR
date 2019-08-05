import * as React from "react";
import * as ReactDOM from "react-dom";
import { List } from "./List";
import { ListItemProps } from "./ListItem";

const items: ListItemProps[] = [
    { name: 'Luke Szklarz', rank: 1, points: 5758, key: '01' },
    { name: 'Rayan Isran 01', rank: 2, points: 5748, key: '02' }
];

ReactDOM.render(
    <List items={items} />,
    document.getElementById("example")
);

if (module['hot']) {
    module['hot'].accept();
}