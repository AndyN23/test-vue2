<template>
  <header class="header">
    <h3>Товаров в корзине на: {{ cartPrice }} {{ currency }}</h3>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    cart: Array,
    required: true,
    default: {},
    currency: String,
  },
  data() {
    return {
      cartPrice: 0,
    }
  },
  watch: {
    cart(cart) {
      let countItem = 0;
      cart.forEach((item) => {
        countItem += item.price * item.amount
      })
      this.cartPrice = countItem
    },
  },
}
</script>

<style scoped>
  .header {
    padding: 10px 20px;
    background-color: #e5e5e5;
  }
</style>
