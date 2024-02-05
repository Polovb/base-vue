import { createApp } from "vue";
import "./style.css";
import { Quasar } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";

import App from "./App.vue";

createApp(App)
    .use(Quasar, {
        plugins: {}, // import Quasar plugins and add here
    })
    .mount("#app");
