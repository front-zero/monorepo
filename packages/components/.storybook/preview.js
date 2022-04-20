import "../src/styles/tailwindcss.css";
import "../src/charts/chartist/chartist.min.css";
import "../src/maps/vector-map/style.css";
import "../src/ui/tab/style.css";
import "../src/ui/modal/style.css";
import "@ht/shared/fonts/font-awesome.css";
import { MemoryRouter } from "react-router-dom";
var beautify_html = require("js-beautify").html;

export const decorators = [
    (Story) => (
        <div style={{ margin: "3em" }}>
            <MemoryRouter>
                <div className="story-demo">
                    <Story />
                </div>
            </MemoryRouter>
        </div>
    ),
];

const customViewports = {
    extraLargeDevices: {
        name: "Extra Large Devices",
        styles: {
            width: "1200px",
            height: "1024px",
        },
    },
    largeDevices: {
        name: "Large Devices",
        styles: {
            width: "992px",
            height: "1024px",
        },
    },
    mediumDevices: {
        name: "Medium Devices",
        styles: {
            width: "768px",
            height: "1024px",
        },
    },
    smallDevices: {
        name: "Small devices",
        styles: {
            width: "576px",
            height: "720px",
        },
    },
    extraSmallDevices: {
        name: "Extra Small devices",
        styles: {
            width: "360px",
            height: "640px",
        },
    },
};

export const parameters = {
    actions: {
        argTypesRegex: "^on[A-Z].*",
    },
    viewport: {
        viewports: customViewports,
    },
    // Storybook a11y addon configuration
    a11y: {
        // the target DOM element
        element: "#root",
        // sets the execution mode for the addon
        manual: false,
    },
    docs: {
        transformSource: (input) => beautify_html(input),
    },
};
