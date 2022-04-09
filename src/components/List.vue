<template>
  <ul class="product-list">
    <li 
      class="card" 
      v-for="product in allProducts" 
      :key="product.id">
      <h4 class="card__title">{{ product.title }}</h4>
      <img 
        class="card__image" 
        :src="product.image" 
        :alt="product.title">
      <p class="card__price">Цена: {{ product.price }} {{ currency }}</p>

      <div>
        <input 
          type="number" 
          ref="amount" 
          :id="product.id">
        <span>кг</span>
      </div>

      <button @click="addToCart(product)"> В корзину </button>
    </li>
  </ul>
</template>

<script>
import {mapGetters, mapActions} from "vuex"
  export default {
    props: {
      currency: String,
    },
    computed: {
      ...mapGetters(['allProducts']),
    },
    methods: {
      ...mapActions(['getProductsList']),
      addToCart(product) {
        let amount = this.$refs.amount.find((input) => input.id === product.id).value
        let data = {
          amount,
          price: product.price,
          title: product.title,
        }
        this.$parent.cart.push(data)
        this.$refs.amount.find((input) => input.id === product.id).value = '';
      },
    },
    async mounted() {
      setInterval(this.getProductsList, 2000)
    },
  };
</script>

<style>
  .product-list {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .card {
    display: inline-block;
    max-width: 32%;
    border: 1px solid #908888;
    border-radius: 5px;
    text-align: center;
    padding: 10px;
    margin: 10px 0;
  }

  .card__image {
    width: 100%;
  }

  button {
    padding: 5px;
    margin: 5px;
  }

  @media (max-width: 840px) {
    .card{
      max-width: 48%;
    }
  }

  @media (max-width: 420px) {
    .card{
      max-width: 90%;
    }
  }
</style>
