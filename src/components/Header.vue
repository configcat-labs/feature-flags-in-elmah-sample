<template>
  <header>
    <Navbar />
    <Banner />
  </header>
</template>

<script>
import Navbar from './Navbar.vue';
import Banner from './Banner.vue';

  export default {
    components: {
      Navbar, Banner
    }
  }

</script>