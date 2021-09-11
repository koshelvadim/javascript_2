class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this._goods = [];
    this._allProducts = [];

    this._fetchGoods();
    this._render();

    this.addPrice();
  }

  _fetchGoods() {
    this._goods = [
      {id: 1, title: 'Notebook', price: 20000},
      {id: 2, title: 'Mouse', price: 1500},
      {id: 3, title: 'Keyboard', price: 5000},
      {id: 4, title: 'Gamepad', price: 4500},
    ];
  }

  _render() {
    const block = document.querySelector(this.container);

    for (let product of this._goods) {
      const productObject = new ProductItem(product);
      
      this._allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
    
  }

  /**метод определяющий суммарную стоимость товаров каталога
   * добавляет сумму в текст параграфа
   */
  addPrice() {
    let results = 0;
    for (let price of this._goods) results += price.price;  
    document.querySelector('.sumproducts').innerText += results;
  }
}

class ProductItem {
  constructor(product, img = 'https://via.placeholder.com/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
  }
}

//класс для корзины товаров
class BasketProducts {
  // метод, отслеживающий событие нажатия на кнопку "Корзина"
  // метод, отслеживающий событие нажатия на кнопки "Купить"
  // метод, который будет добавлять в разметку перечень выбранных товаров
  // метод, подсчитывающий общую стоимость Корзины
}
// класс для элемента корзины
class BasketElement {
  // метод добавляющий/удаляющий количество выбранных товаров на иконке "Корзина"
}

const list = new ProductList();


/*
1.Добавить пустые классы для Корзины товаров и Элемента корзины товаров.
Продумайте, какие методы понадобятся для работы с этими сущностями.

2.Добавьте для ProductList метод, определяющий суммарную стоимость всех товаров.
*/

