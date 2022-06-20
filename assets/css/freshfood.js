
// Slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
}

// Cart - Add Product
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const iconCarts = $$('.icon-cart');
iconCarts.forEach((iconCart, index) => 
  iconCart.onclick = (event) => {
    const iconItem = event.target;

    const product = iconItem.parentElement.parentElement.parentElement;
    const productImg = product.querySelector('img').src;
    const productName = product.querySelector('.product-detail .product-name a').innerText; 
    const productPrice = product.querySelector('.product-price').innerText;

    addCart(productImg, productName, productPrice)

  }
)

const addCart = (productImg, productName, productPrice) =>  {
  const addTr = document.createElement('tr');
  var cartItem = $$('.total-product tr');
  for (var i = 0; i < cartItem.length; i++) {
    var productT = $$('.title')
    if (productT[i].innerHTML == productName) {
      alert('Sản phẩm của bạn đã có trong giỏ hàng');
    }
  }
  addTr.innerHTML = `
      <tr>
      <td style="display: flex; align-items: center;">
          <img src="${productImg}" alt="" class="cart-img">
          <h5 class="cart-item-name title">${productName}</h5>
      </td>
      <td>
          <span class="cart-item-price">${productPrice}</span>
      </td>
      <td style="text-align: center;">
          <input type="number" value="1" min="1" class="input-cart">
      </td>
      <td class="delete-cart" style="font-size: 1.3rem; color: black; font-weight: 500;">Xóa</td>
    </tr>
  
  `;
  const cartTable = $('tbody');
  cartTable.append(addTr);

  cartTotal(); //Khi ta thêm sp vô cart nó sẽ gọi hàm này
  deleteCart(); 

}

// Cart - Total Price

const cartTotal = () => {
  var cartItem = $$('.total-product tr');
  var totalMoney = 0;

  for (var i = 0; i < cartItem.length; i++) { //cartItem.length là độ dài sản phẩm trong giỏ hàng
    
      var inputValue = cartItem[i].querySelector('.input-cart').value;

      var productPrice = cartItem[i].querySelector('.cart-item-price').innerHTML;
      var numb = Number.parseFloat(productPrice).toFixed(3);

      var totalMultiplied = inputValue * numb;

      totalMoney = totalMoney + totalMultiplied;

  }

  var cartTotalPrices = $('.table__total-prices #total-view-cart');
  cartTotalPrices.innerHTML = totalMoney.toFixed(3);
  inputChange();

}

// Cart - Delete Cart
 deleteCart = () => {
  var cartItem = $$('.total-product tr');
  for (var i = 0; i < cartItem.length; i++) {
    var deleteElements = $$('.delete-cart');
    deleteElements[i].onclick = (event) => {
      var cartDel = event.target.parentElement;
      cartDel.remove();
      cartTotal();
    }
  }
}

// Cart - Input Change
const inputChange = (event) => {
  var cartItem = $$('.total-product tr');
  for (var i = 0; i < cartItem.length; i++) {
    var inputElement = cartItem[i].querySelector('.input-cart');
    inputElement.onchange = () => {
      cartTotal();
    }
  }
}






      

  


  

