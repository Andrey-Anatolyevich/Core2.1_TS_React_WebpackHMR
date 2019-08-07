import * as React from "react";
import * as ReactDOM from "react-dom";

import { AppShell } from './app/appShell';

ReactDOM.render(
    <AppShell />,
    document.getElementById("applicationBox")
);

if (module['hot']) {
    module['hot'].accept();
}