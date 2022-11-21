<script>
import Header from './components/Header.vue';
import Product from './components/Product.vue';

export default {
  components: {
    Header, Navbar, Product
  }
}

</script>

<template>
  <Header />
  <main>
    <Product></Product>
  </main>
</template>
