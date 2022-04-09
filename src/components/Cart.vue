<template>
  <div class="cart-list">
    <h3 class="card-list__title">Список покупок</h3>
    <ol>
      <li
        v-for="item in items" 
        :key="item.id"
        class="card-list__item">
        <span>{{item.title}}</span> <span>{{item.price}}</span> <span>{{item.amount}}</span>
      </li>
    </ol>
      
  </div>
</template>

<script>
  export default {
    props: {
      cart: Array,
    },
    computed: {
        items() {
            return this.cart.reverse();
        },
    },
  };
</script>

<style>
  .cart-list{
    margin: 20px 40px;
  }

  .card-list__item{
    margin: 10px;
    padding: 5px 0;
    max-width: 450px;
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
  }
</style>
