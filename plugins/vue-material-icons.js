import Vue from "vue";
import "vue-material-design-icons/styles.css";
import RocketLaunchOutline from "vue-material-design-icons/RocketLaunchOutline.vue";
import ApacheKafka from "vue-material-design-icons/ApacheKafka.vue";
import LightbulbOutline from "vue-material-design-icons/LightbulbOutline.vue";

export default function materialIcons() {
  Vue.component("RocketLaunchOutline-icon", RocketLaunchOutline);
  Vue.component("ApacheKafka-icon", ApacheKafka);
  Vue.component("LightbulbOutline-icon", LightbulbOutline);

}
