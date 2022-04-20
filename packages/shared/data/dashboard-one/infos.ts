import { IInfo } from "../../types";

import SvgIcon01 from "../../images/icon1.svg";
import SvgIcon02 from "../../images/icon2.svg";

const infos: IInfo[] = [
    {
        id: 1,
        title: "Safe & Secure",
        description:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Even the all-powerful Pointing has no control about the blind texts.",
        button: {
            text: "Getting Started",
            path: "/profile",
        },
        SVGIcon: SvgIcon01,
    },
    {
        id: 2,
        title: "Instant Exchange",
        description:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Even the all-powerful Pointing has no control about the blind texts.",
        button: {
            text: "Take a tour",
            path: "/profile",
        },
        SVGIcon: SvgIcon02,
    },
];

export default infos;
