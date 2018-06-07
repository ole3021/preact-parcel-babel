import { h, render } from "preact";
import "preact/devtools";
import "./style";

import App from "./components/app";

const mountNode = document.getElementById("root");

render(<App />, mountNode, mountNode.lastChild);
