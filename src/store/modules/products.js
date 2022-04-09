import productsApi from '../../../api/products';

export default{
    actions: {
        async getProductsList(ctx) {
            const products = await productsApi.getProductsList();
            ctx.commit('updateProductList', products)
            return products;
        },
    },
    mutations: {
        updateProductList(state, products){
            state.products = products
        }
    },
    state: {
        products: []
    },
    getters: {
        allProducts(state){
            return state.products
        }
    },
}