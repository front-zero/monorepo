import { IMenu } from "../types";

const menus: IMenu[] = [
    {
        id: 1,
        label: "Dashboard",
        url: "/",
        icon: "icon ion-ios-home-outline",
        submenu: [
            {
                id: 11,
                label: "Dashboard 01",
                url: "/",
            },
            {
                id: 12,
                label: "Dashboard 02",
                url: "/dashboard-two",
            },
            {
                id: 13,
                label: "Dashboard 03",
                url: "/dashboard-three",
            },
            {
                id: 14,
                label: "Dashboard 04",
                url: "/dashboard-four",
            },
            {
                id: 15,
                label: "Dashboard 05",
                url: "/dashboard-five",
            },
        ],
    },
    {
        id: 2,
        label: "UI Elements",
        url: "#!",
        icon: "icon ion-ios-filing-outline",
        megamenu: [
            {
                id: 21,
                title: "UI Components",
                submenu: [
                    {
                        id: 211,
                        label: "Button",
                        url: "https://stor-react-component.netlify.app/?path=/docs/ui-buttons--button-controls",
                    },
                    {
                        id: 212,
                        label: "Breadcrumb",
                        url: "https://stor-react-component.netlify.app/?path=/docs/ui-breadcrumb--basic-styling",
                    },
                    {
                        id: 213,
                        label: "Card",
                        url: "https://stor-react-component.netlify.app/?path=/docs/ui-cards--bottom-image-card",
                    },
                    {
                        id: 214,
                        label: "Dropdown",
                        url: "https://stor-react-component.netlify.app/?path=/docs/ui-dropdown--basic-example",
                    },
                    {
                        id: 215,
                        label: "List Group",
                        url: "https://stor-react-component.netlify.app/?path=/docs/ui-list-group--active-item",
                    },
                    {
                        id: 216,
                        label: "Media",
                        url: "https://stor-react-component.netlify.app/?path=/docs/ui-media--alignments",
                    },
                    {
                        id: 217,
                        label: "Modal",
                        url: "https://stor-react-component.netlify.app/?path=/docs/ui-modal--basic-example",
                    },
                    {
                        id: 218,
                        label: "Progress",
                        url: "https://stor-react-component.netlify.app/?path=/docs/ui-progress--basic-progress",
                    },
                    {
                        id: 219,
                        label: "Spinner",
                        url: "https://stor-react-component.netlify.app/?path=/docs/ui-spinner--spinner-01",
                    },
                    {
                        id: 220,
                        label: "Tab",
                        url: "https://stor-react-component.netlify.app/?path=/docs/ui-tab--basic-example",
                    },
                ],
            },
            {
                id: 22,
                title: "Charts",
                submenu: [
                    {
                        id: 221,
                        label: "Chartist Charts",
                        url: "https://stor-react-component.netlify.app/?path=/docs/charts-chartist-charts--bar-chart",
                    },
                    {
                        id: 222,
                        label: "ChartJS Charts",
                        url: "https://stor-react-component.netlify.app/?path=/docs/charts-chartjs-charts--area-chart",
                    },
                    {
                        id: 223,
                        label: "E Charts",
                        url: "https://stor-react-component.netlify.app/?path=/docs/charts-e-charts-charts--area-chart",
                    },
                    {
                        id: 224,
                        label: "Sparkline Charts",
                        url: "https://stor-react-component.netlify.app/?path=/docs/charts-sparkline-charts--area-chart",
                    },
                ],
            },
            {
                id: 23,
                title: "Other Components",
                submenu: [
                    {
                        id: 231,
                        label: "Form Elements",
                        url: "https://stor-react-component.netlify.app/?path=/docs/forms-form-elements--active-state-color-variant",
                    },
                    {
                        id: 232,
                        label: "Forms Editors",
                        url: "https://stor-react-component.netlify.app/?path=/docs/forms-editors--quill-editor",
                    },
                    {
                        id: 233,
                        label: "Google Maps",
                        url: "https://stor-react-component.netlify.app/?path=/docs/maps-google-maps--basic-map",
                    },
                    {
                        id: 234,
                        label: "Vector Maps",
                        url: "https://stor-react-component.netlify.app/?path=/docs/maps-vector-maps--basic-map",
                    },
                    {
                        id: 235,
                        label: "Basic Tables",
                        url: "https://stor-react-component.netlify.app/?path=/docs/tables-basic-tables--bordered-table",
                    },
                ],
            },
            {
                id: 34,
                title: "Other Pages",
                submenu: [
                    {
                        id: 341,
                        label: "Pricing",
                        url: "/pricing-01",
                    },
                    {
                        id: 342,
                        label: "Pricing 02",
                        url: "/pricing-02",
                    },
                    {
                        id: 343,
                        label: "Pricing 03",
                        url: "/pricing-03",
                    },
                    {
                        id: 344,
                        label: "Invoice",
                        url: "/invoice",
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        label: "Pages",
        url: "#!",
        icon: "icon ion-ios-book-outline",
        submenu: [
            {
                id: 31,
                label: "Profile Page",
                url: "/profile",
            },
            {
                id: 32,
                label: "Invoice",
                url: "/invoice",
            },
            {
                id: 33,
                label: "Timeline",
                url: "/timeline",
            },
            {
                id: 34,
                label: "Pricing",
                url: "/pricing-01",
                submenu: [
                    {
                        id: 341,
                        label: "Pricing 01",
                        url: "/pricing-01",
                    },
                    {
                        id: 342,
                        label: "Pricing 02",
                        url: "/pricing-02",
                    },
                    {
                        id: 343,
                        label: "Pricing 03",
                        url: "/pricing-03",
                    },
                ],
            },
            {
                id: 35,
                label: "Sign In",
                url: "/signin",
                submenu: [
                    {
                        id: 351,
                        label: "Signin Simple",
                        url: "/signin",
                    },
                    {
                        id: 352,
                        label: "Signin Split",
                        url: "/signin-02",
                    },
                ],
            },
            {
                id: 36,
                label: "Sign Up",
                url: "/signup",
                submenu: [
                    {
                        id: 361,
                        label: "Signup Simple",
                        url: "/signup",
                    },
                    {
                        id: 362,
                        label: "Signup Split",
                        url: "/signup-02",
                    },
                ],
            },
            {
                id: 37,
                label: "Error Pages",
                url: "#!",
                submenu: [
                    {
                        id: 361,
                        label: "404 Not Found",
                        url: "/404",
                    },
                    {
                        id: 362,
                        label: "505 Forbidden",
                        url: "/error-500",
                    },
                    {
                        id: 363,
                        label: "500 Internal Server",
                        url: "/error-503",
                    },
                    {
                        id: 364,
                        label: "503 Service Unavailable",
                        url: "/error-505",
                    },
                ],
            },
        ],
    },
    {
        id: 4,
        label: "Forms",
        url: "#!",
        icon: "icon ion-ios-gear-outline",
        submenu: [
            {
                id: 41,
                label: "Form Layouts",
                url: "/form-layouts",
            },
            {
                id: 42,
                label: "Form Validation",
                url: "/form-validation",
            },
        ],
    },
    {
        id: 5,
        label: "Apps",
        url: "#!",
        icon: "icon ion-ios-chatboxes-outline",
        submenu: [
            {
                id: 51,
                label: "Contact Manager",
                url: "/apps/contact",
            },
            {
                id: 52,
                label: "File Manager",
                url: "/apps/file-manager",
            },
            {
                id: 53,
                label: "Calendar",
                url: "/apps/calendar",
            },
            {
                id: 54,
                label: "Messages",
                url: "/apps/messages",
            },
        ],
    },
    {
        id: 6,
        label: "Widgets",
        url: "/widgets",
        icon: "icon ion-ios-analytics-outline",
    },
];

export default menus;
