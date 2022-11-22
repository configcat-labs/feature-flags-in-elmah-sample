import { reactive } from "vue";
import * as configcat from "configcat-js";

let configCatClient = configcat.createClient("YOUR_CONFIGCAT_SDK_KEY");

export const featureFlagStore = reactive({
  promotionsApiError: null,

  getPromotionsApiErrorFlagStatus() {
    return configCatClient.getValueAsync("promotionsapierror", false);
  },
});
