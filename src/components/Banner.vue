<template>
  <section class="intro-section">
    <div class="container">
      <div class="intro-text">
        <h1 class="intro-title">Email marketing without the hassle?</h1>
      </div>
      <div class="intro-button-wrapper">
        <button @click="handleUserSignup" class="intro-button">
          Show me how
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import Elmahio from "elmah.io.javascript";
import { useFetch } from "@vueuse/core";

export default {
  setup() {
    const logger = new Elmahio({
      apiKey: "7a2ca5201f4f41348b30d9b895d71724",
      logId: "12a66ce3-a7de-42da-887e-3040437c42c8",
      application: "My marketing startup site",
    });

    return {
      logger,
    };
  },
  data() {
    return {
      salePromotions: [],
    };
  },
  methods: {
    handleUserSignup() {
      const url = "https://my-promotions-api/get-promotions";

      const { error, data } = useFetch(url);

      if (error) {
        console.log(error);
        this.logger.error("Could not fetch sale promotions");
      }

      // Do something with data
    },
  },
};
</script>

<style lang="scss">
.intro-section {
  height: 65vh;
  background-color: #ffbf00;
  display: flex;
  align-items: center;
  justify-content: center;

  .intro-text {
    max-width: 65%;

    .intro-title {
      font-size: 64px;
      font-weight: 400;
      line-height: 1.25;
    }
  }

  .intro-button {
    margin-top: 32px;
    background-color: #232323;
    border: 0;
    padding: 12px 16px;
    font-size: 18px;
    font-weight: 700;
    color: whitesmoke;
    text-transform: uppercase;
  }
}
</style>
