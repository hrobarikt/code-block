import a11ydark from "./styles/a11y-dark.css";
import atomdark from "./styles/atom-dark.css";
import dracula from "./styles/dracula.css";
import darcula from "./styles/darcula.css";
import ghcolors from "./styles/ghcolors.css";
import vs from "./styles/vs.css";
import synthwave84 from "./styles/synthwave84.css";
import shadesofpurple from "./styles/shades-of-purple.css";
import prism from "../../../node_modules/prismjs/themes/prism.css";
import xonokai from "./styles/xonokai.css";
import vsdark from "./styles/vsc-dark-plus.css";
import nord from "./styles/nord.css";
import pojoaque from "./styles/pojoaque.css";

export const THEMES = {
    prism,
    a11ydark,
    atomdark,
    dracula,
    darcula,
    ghcolors,
    vs,
    synthwave84,
    shadesofpurple,
    xonokai,
    vsdark,
    nord,
    pojoaque
};

export default (theme) => {
    return (<style type="text/css">
        {THEMES[theme]}
    </style>)
}