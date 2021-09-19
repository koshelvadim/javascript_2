/** Домашка к пятому уроку
 * 1. Добавить методы и обработчики событий для поля поиска. Создать в объекте данных поле searchLine и привязать к нему содержимое поля ввода. На кнопку «Искать» добавить обработчик клика, вызывающий метод FilterGoods.
 * 2. Добавить корзину. В html-шаблон добавить разметку корзины. Добавить в объект данных поле isVisibleCart, управляющее видимостью корзины.
 * 3. *Добавлять в .goods-list заглушку с текстом «Нет данных» в случае, если список товаров пуст.
*/
//v-on @  v-bind :
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    products: [], // массив для хранения товаров, полученных с сервера
    basketProducts: [], // массив для хранения товаров корзины
    filtredProducts: [], // массив для хранения отфильтрованных товаров
    imgCatalog: 'https://via.placeholder.com/200x150',
    invisible: true, // поле для отображения/скрытия корзины
    searchLine: '',
    quantity: 0,

  },
  methods: {
    getJson(url){
      return fetch(url)
          .then(result => result.json())
          .catch(error => {
            console.log(error);
          })
    },

    addProduct(product) {  // метод в разработке !!!
      // console.log(product);
      console.log(product);
      console.log(this.products);
      console.log(this.basketProducts);
      if (this.basketProducts.length !== 0) {
            // let productId = this.products.dataset['id'];
            let find = this.basketProducts.find(product => product.id_product === productId);
            if (find) {
              find.quantity++;
              console.log('ok');
            }   
        } else {
        product.quantity = 1;
        this.basketProducts.push(product); 
      }
      
      
       
    
    
      // if(this.basketProducts.length === 0) {
      //       product.quantity = 1;
      //       this.basketProducts.push(product); 
      //   } else {
      //     product.quantity++;
          
      //     console.log(product.price);
      //   }
      // console.log(this.basketProducts); // вывод корзины для себя
    },

    removeItem() {
      console.log('click');
      // this.basketProducts.splice(product);
    },

    isVisibleCart() {
      if(this.invisible === true) {
        this.invisible = false;
      } else {this.invisible = true;
      }
    },

    inputSearchValue(event) {
      return this.searchLine = event.target.value;
    },

    filterGoods() {
      console.log(this.searchLine); // вывод значения поиска для себя 
      const regexp = new RegExp (this.searchLine, 'i'); 
      this.filtredProducts = this.products.filter(product => regexp.test(product.product_name));
    
      // this.products.forEach(el => {
      //   const block = document.querySelector(`.product-item[key]`);
      //   if(!this.filtredProducts.includes(el)){
      //     block.classList.add('invisible');
      //   } else {
      //     block.classList.remove('invisible');
      //   }
      // });
    }
  },
      

  beforeCreate() {

  },
  created() {
    this.getJson(`${API + this.catalogUrl}`)
        .then(data => {
          for(let el of data){
            this.products.push(el);
            this.filtredProducts.push(el);
          }
        });
  },
  beforeMount() {
  
  },
  mounted() {

  },
  beforeUpdate() {

  },
  updated() {

  },
  beforeDestroy() {

  },
  destroyed() {

  }
});
