import Vue from "vue";
import "vue-material-design-icons/styles.css";
import RocketLaunchOutline from "vue-material-design-icons/RocketLaunchOutline.vue";
import ApacheKafka from "vue-material-design-icons/ApacheKafka.vue";
import LightbulbOutline from "vue-material-design-icons/LightbulbOutline.vue";
import LockOpenOutline from "vue-material-design-icons/LockOpenOutline.vue";
import CogOutline from "vue-material-design-icons/CogOutline.vue";
import Delete from "vue-material-design-icons/Delete.vue";
import Pencil from "vue-material-design-icons/Pencil.vue";
import CreditCardMultipleOutline from "vue-material-design-icons/CreditCardMultipleOutline.vue";



export default function materialIcons() {
  Vue.component("RocketLaunchOutline-icon", RocketLaunchOutline);
  Vue.component("ApacheKafka-icon", ApacheKafka);
  Vue.component("LightbulbOutline-icon", LightbulbOutline);
  Vue.component("LockOpenOutline-icon", LockOpenOutline);
  Vue.component("CogOutline-icon", CogOutline);
  Vue.component("Delete-icon", Delete);
  Vue.component("Pencil-icon", Pencil);
  Vue.component("CreditCardMultipleOutline-icon", CreditCardMultipleOutline);
}
