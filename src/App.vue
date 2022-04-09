<template>
  <div id="app">
    <Header 
      :cart="cart" 
      :currency="currency"/>
    <List :currency="currency"/>
    <Cart :cart="cart"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import List from '@/components/List.vue';
import Cart from '@/components/Cart.vue';

export default {
  name: 'App',
  components: {
    Header,
    List,
    Cart,
  },
  data() {
    return {
      cart: [],
      currency: 'VGTB',
    };
  },
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color: #2c3e50;
  }

  span{
    margin: 3px 5px;
  }
</style>
