import { checkForPunctuation } from "./js/puncChecker";
import { handleSubmit } from "./js/formHandler";

import logo from "./images/memoji_mike_optimized.png";

export { checkForPunctuation, handleSubmit, logo };

import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

document.getElementById("logo").src = logo;
