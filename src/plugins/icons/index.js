import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes, faAngleDoubleUp, faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTimes, faAngleDoubleUp, faAngleDoubleDown);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
