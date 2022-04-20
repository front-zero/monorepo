import React from "react";
import ReactDOM from "react-dom";
import "@ht/components/dist/style.css";
import "@ht/shared/fonts/fonts.css";
import "@ht/shared/fonts/font-awesome.css";
import "@ht/shared/fonts/ionicons.css";
import "@ht/shared/fonts/flag-icon.min.css";
import "./assets/css/tailwind.css";
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
