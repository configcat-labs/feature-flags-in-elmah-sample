<template>
  <section class="intro-section">
    <div class="container">
      <div class="intro-text">
        <h1 class="intro-title">Email marketing without the hassle?</h1>
      </div>
      <div class="intro-button-wrapper">
        <button class="intro-button">Show me how</button>
      </div>
    </div>
  </section>
</template>


<style lang="scss">
.intro-section {
  height: 65vh;
  background-color: #FFBF00;
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