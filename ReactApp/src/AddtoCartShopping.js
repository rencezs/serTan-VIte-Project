/*window.addEventListener('DOMContentLoaded', () => {
  const openShopping = document.querySelector('.shopping');
  const closeShopping = document.querySelector('.closeShopping');
  const list = document.querySelector('.list');
  const listCard = document.querySelector('.listCard');
  const body = document.querySelector('body');
  const total = document.querySelector('.total');
  const quantity = document.querySelector('.quantity');

  openShopping.addEventListener('click', () => body.classList.add('active'));
  closeShopping.addEventListener('click', () => body.classList.remove('active'));

  const products = [
    { id: 1, name: 'PRODUCT NAME 1', image: 'group1-removebg-preview.png', price: 100 },
    { id: 2, name: 'PRODUCT NAME 2', image: 'group2-removebg-preview.png', price: 120 },
    { id: 3, name: 'PRODUCT NAME 3', image: 'group3-removebg-preview.png', price: 130 },
    { id: 4, name: 'PRODUCT NAME 4', image: 'group4-removebg-preview.png', price: 140 },
    { id: 5, name: 'PRODUCT NAME 5', image: 'group5-removebg-preview.png', price: 150 },
    { id: 6, name: 'PRODUCT NAME 6', image: 'group6-removebg-preview.png', price: 160 },
    { id: 7, name: 'PRODUCT NAME 7', image: 'group7.png', price: 170 },
    { id: 8, name: 'PRODUCT NAME 8', image: 'group8.png', price: 180 },
    { id: 9, name: 'PRODUCT NAME 9', image: 'group9.png', price: 190 },
    { id: 10, name: 'PRODUCT NAME 10', image: 'group10.png', price: 200 }
  ];

  function toggleCart() {
  document.body.classList.toggle("active");
  }
 
  let listCards = JSON.parse(localStorage.getItem('cartItems')) || [];

  function saveCart() {
    localStorage.setItem('cartItems', JSON.stringify(listCards));
  }
  

  function initApp() {
    list.innerHTML = '';
    products.forEach((product, key) => {
      const newDiv = document.createElement('div');
      newDiv.classList.add('item');
      newDiv.innerHTML = `
        <img src="/${product.image}" alt="${product.name}"  title="${product.name}"  />
        <div class="title">${product.name}</div>
        <div class="price">${product.price.toLocaleString()}</div>
        <button title="Add To Cart" onclick="addtoCard(${key})">Add To Cart</button>
        <p class="seeMore"> seeMore </p>
        <p id="backToAll"> Back </p>
      `;
      list.appendChild(newDiv);
    });
  }

  function addtoCard(key) {
    if (!listCards[key]) {
      listCards[key] = { ...products[key], quantity: 1 };
    } else {
      listCards[key].quantity++;
    }
    reloadCard();
    saveCart();
  }

  function changeQuantity(key, newQuantity) {
    if (newQuantity <= 0) {
      delete listCards[key];
    } else {
      listCards[key].quantity = newQuantity;
    }
    reloadCard();
    saveCart();
  }

  function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    for (const key in listCards) {
      const item = listCards[key];
      if (!item) continue;

      count += item.quantity;
      totalPrice += item.price * item.quantity;

      const li = document.createElement('li');
      li.innerHTML = `
        <div><img src="/${item.image}" alt="${item.name}" /></div>
        <div>${item.name}</div>
        <div>${(item.price * item.quantity).toLocaleString()}</div>
        <div>
          <button class="minus" onclick="changeQuantity(${key}, ${item.quantity - 1})">-</button>
          <div class="count">${item.quantity}</div>
          <button class="plus" onclick="changeQuantity(${key}, ${item.quantity + 1})">+</button>
        </div>
      `;
      listCard.appendChild(li);
    }

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
  }

 
  window.addtoCard = addtoCard;
  window.changeQuantity = changeQuantity;


  initApp();
  reloadCard();
      
});*/




 window.addEventListener('DOMContentLoaded', () => {
      const openShopping = document.querySelector('.shopping');
      const closeShopping = document.querySelector('.closeShopping');
      const list = document.querySelector('.list');
      const listCard = document.querySelector('.listCard');
      const body = document.querySelector('body');
      const total = document.querySelector('.total');
      const quantity = document.querySelector('.quantity');

      openShopping.addEventListener('click', () => body.classList.add('active'));
      closeShopping && closeShopping.addEventListener('click', () => body.classList.remove('active'));

      const products = [
        { id: 1, name: 'PRODUCT NAME 1', image: 'group1-removebg-preview.png', price: 100 },
        { id: 2, name: 'PRODUCT NAME 2', image: 'group2-removebg-preview.png', price: 120 },
        { id: 3, name: 'PRODUCT NAME 3', image: 'group3-removebg-preview.png', price: 130 },
        { id: 4, name: 'PRODUCT NAME 4', image: 'group4-removebg-preview.png', price: 140 },
        { id: 5, name: 'PRODUCT NAME 5', image: 'group5-removebg-preview.png', price: 150 },
        { id: 6, name: 'PRODUCT NAME 6', image: 'group6-removebg-preview.png', price: 160 },
        { id: 7, name: 'PRODUCT NAME 7', image: 'group7.png', price: 170 },
        { id: 8, name: 'PRODUCT NAME 8', image: 'group8.png', price: 180 },
        { id: 9, name: 'PRODUCT NAME 9', image: 'group9.png', price: 190 },
        { id: 10, name: 'PRODUCT NAME 10', image: 'group10.png', price: 200 }
      ];

      const productsInsideSeeMore = [ {
        id: 1,
        name: 'PRODUCT NAME 1',
        variants_Image: [ 'group1-removebg-preview.png', 'grouped1-removebg-preview.png',
          'Normalsize.png.png',
          'Oversized.png.png'
         ],
            },
      {
        id:2,
        name: 'PRODUCT NAME 2',
        variants_Image: [ 'group2-removebg-preview.png','grouped2-removebg-preview.png',
          'Normalsize.png.png',
          'Oversized.png.png'     
         ],
      } ,
      {
        id:3,
        name: "PRODUCT NAME 3",
        variants_Image: [ 'group3-removebg-preview.png', "grouped3-removebg-preview.png",
          'Normalsize.png.png',
          'Oversized.png.png'  
        ]
      },
      {
        id: 4,
        name: 'PRODUCT NAME 4',
        variants_Image: [  'grouped4BLACK-removebg-preview.png',
          'grouped4WHITE-removebg-preview.png',
          'Normalsize.png.png',
          'Oversized.png.png'
        ]
      },
      {
        id:5,
        name: 'PRODUCT NAME 5',
        variants_Image: [
          'group5-removebg-preview.png',
          'grouped5-removebg-preview.png',
          'Normalsize.png.png',
          'Oversized.png.png'
        ]
      },
      {
        id: 6,
        name: 'PRODUCT NAME 6',
        variants_Image: [
          'group6-removebg-preview.png',
          'grouped6-removebg-preview.png',
          'Normalsize.png.png',
          'Oversized.png.png'
        ]
      },
      {
        id: 7,
        name: 'PRODUCT NAME 7',
        variants_Image: [
          'group7.png',
          'Normalsize.png.png',
          'Oversized.png.png'
        ]
      },
      {
        id: 8,
        name: 'PRODUCT NAME 8',
        variants_Image: [
          'group8.png',
          'Normalsize.png.png',
          'Oversized.png.png'
        ]
      },
      {
        id: 9,
        name: 'PRODUCT NAME 9',
        variants_Image: [
          'group9.png',
          'Normalsize.png.png',
          'Oversized.png.png'
        ]
      },
      {
        id: 10,
        name: 'PRODUCT NAME 10',
        variants_Image: [
          'group10.png',
          'Normalsize.png.png',
          'Oversized.png.png'
        ]
      }
      
    
    ];


    function showNotification(item, qty) {
    const notif = document.createElement('div');
    notif.className = 'cart-notif';
    notif.innerHTML = `
      <img src="/${item.image}" alt="${item.name}" class="notif-img" />
      <div class="notif-info">
        <p class="notif-name">${item.name}</p>
        <p class="notif-price">${item.price.toLocaleString()}</p>
        <p class="notif-qty">Quantity: ${qty}</p>
      </div>
    `;
    document.body.appendChild(notif);
    // Remove after 3 seconds
    setTimeout(() => {
      notif.classList.add('fade');
      notif.addEventListener('transitionend', () => notif.remove());
    }, 3000);
  }

  function addtoCard(key) {
    const prod = products[key];
    if (!listCards[key]) {
      listCards[key] = { ...prod, quantity: 1 };
    } else {
      listCards[key].quantity++;
    }
    reloadCard();
    saveCart();
    showNotification(products[key], listCards[key].quantity);
  }



      let listCards = JSON.parse(localStorage.getItem('cartItems')) || [];

      function initApp() {
        list.innerHTML = '';
        products.forEach((product, key) => {    

          const info = productsInsideSeeMore.find(p => p.id === product.id) || {};

          const variants = info.variants_Image  || [];  
          let detailIndex = 0;

        

          const newDiv = document.createElement('div');
          newDiv.classList.add('item');
          newDiv.innerHTML = `
            <img src="/${product.image}" alt="${product.name}" />
            <div class="title">${product.name}</div>
            <div class="price">${product.price.toLocaleString()}</div>
            <button title="Add To Cart" onclick="addtoCard(${key})">Add To Cart</button>
            <p class="seeMore">See More</p>
            

       


         <div class="details">
          <div class="Container-details">
             
            <button class="prev-detail">Prev</button>

            <img  class="detail-img" src="/${variants[0]}" 
              alt="Detail of ${product.name}" />

            <button class="next-detail">Next</button>


            <p class="SelectSize"> <b> Select your size:  </b> </p>
           



            <label class="Small">
            <input  type="Radio" name="size" value="Small"> </input>
            <b> Small </b>
            </label>
            <label class="Medium">
            <input  type="Radio" name="size" value="Medium"> </input>
            <b> Medium </b>
            </label>
            <label class="Large">
            <input  type="Radio" name="size" value="Large"> </input>
            <b> Large </b>
            </label>
            <label class="XL">
            <input  type="Radio" name="size" value="XL"> </input>
            <b> XL </b>
            </label>
            <label class="XXL">
            <input  type="Radio" name="size" value="XXL"> </input>
            <b> XXL </b>
            </label>

           

            </div>

          </div>
          
          `;

          if (product.id === 4) {
  const container = newDiv.querySelector('.Container-details');
  container.insertAdjacentHTML('beforeend', `
    <p class="SelectWhiteOrBlack"><strong>Select Color:</strong></p>
    <label class="White"><input type="radio" name="color-${key}" value="White"> White</label>
    <label class="Black"><input type="radio" name="color-${key}" value="Black"> Black</label>
  `);
  const colorLabel = document.createElement('p');
  colorLabel.className = 'SelectedColor';
  container.append(colorLabel);
  container.querySelectorAll(`input[name="color-${key}"]`).forEach(radio => {
    radio.addEventListener('change', () => {
      colorLabel.textContent = ` ${radio.value}`;
    });
  });
}


          list.appendChild(newDiv);


          // Select Size print
          const sizeLabel = newDiv.querySelector('.SelectSize');
          newDiv.querySelectorAll('input[name="size"]').forEach(radio => {
           radio.addEventListener('change', () => {
          sizeLabel.textContent = `Select your size: ${radio.value}`;
  });
});


          // 4) Wire up  Prev/Next On SeeMore Details
          const imgEl = newDiv.querySelector('.detail-img');
          newDiv.querySelector('.prev-detail').addEventListener('click', () => {
           if (variants.length === 0) return;
          detailIndex = (detailIndex - 1 + variants.length) % variants.length;
          imgEl.src = '/' + variants[detailIndex];
          });
           newDiv.querySelector('.next-detail').addEventListener('click', () => {
          if (variants.length === 0) return;
         detailIndex = (detailIndex + 1) % variants.length;
        imgEl.src = '/' + variants[detailIndex];
            });
        });
      }

      initApp();

      //ai
       const arrows = document.querySelector('.arrows');

// SEE MORE: show only clicked item and Go Back button
list.addEventListener('click', e => {
  const item = e.target.closest('.item');
  if (!item || !e.target.classList.contains('seeMore')) return;
  list.querySelectorAll('.item').forEach(i => i.classList.remove('active'));
  item.classList.add('active');
  list.classList.add('showDetail');
  arrows.classList.add('showDetail');

  
 //ai
  const img = item.querySelector('img');
  function onEnd(ev) {
    if (ev.propertyName === 'transform') {
      img.classList.add('border-on');
      img.removeEventListener('transitionend', onEnd);
    }
  }
  img.addEventListener('transitionend', onEnd);
  
  
 //ai

});

// GO BACK: restore slideshow
document.getElementById('GoBack').addEventListener('click', () => {
  list.classList.remove('showDetail');
  arrows.classList.remove('showDetail');
  list.querySelectorAll('.item').forEach(i => i.classList.remove('active'));
});

      //ai

      //ai
  const nextButton = document.getElementById('Next');
  const prevButton = document.getElementById('Prev');

  // 2) wire up their click handlers
  nextButton.addEventListener('click', () => slide('next'));
  prevButton.addEventListener('click', () => slide('prev'));


let unAcceptClick;

function slide(dir) {
   nextButton.style.pointerEvents = 'none';
  prevButton.style.pointerEvents = 'none';
   clearTimeout(unAcceptClick);
  const items = Array.from(list.children);
  arrows.classList.remove('showDetail');
  if (dir === 'next') {
    
    list.classList.add('Next');
    list.appendChild(items.shift()); } 
  else {
    
    list.classList.add('Prev');
    list.prepend(items.pop());}

      unAcceptClick = setTimeout(() => {
    nextButton.style.pointerEvents = 'auto';
    prevButton.style.pointerEvents = 'auto';
  }, 1000);


  // triggers CSS reposition via nth-child

  // If we’re in detail mode, re-apply the active highlight to the new centered item
  if (list.classList.contains('showDetail')) {
    list.querySelectorAll('.item').forEach(i => i.classList.remove('active'));
    // Use the first child (or whichever ends up centered) as the new active
    const current = list.children[0];
    current.classList.add('active');
  }
}


      //ai

      //ai
      function saveCart() {
        localStorage.setItem('cartItems', JSON.stringify(listCards));
      }
      function addtoCard(key) {
        if (!listCards[key]) listCards[key] = { ...products[key], quantity: 1 };
        else listCards[key].quantity++;
        reloadCard(); saveCart();
       //AI
        showNotification(products[key], listCards[key].quantity);
      }
      function changeQuantity(key, newQty) {
        if (newQty <= 0) delete listCards[key];
        else listCards[key].quantity = newQty;
        reloadCard(); saveCart();
      }
      function reloadCard() {
        listCard.innerHTML = '';
        let count = 0, totalPrice = 0;
        for (const key in listCards) {
          const item = listCards[key]; if (!item) continue;
          count += item.quantity;
          totalPrice += item.price * item.quantity;
          const li = document.createElement('li');
          li.innerHTML = `
            <div><img src="/${item.image}" alt="${item.name}" /></div>
            <div>${item.name}</div>
            <div>${(item.price * item.quantity).toLocaleString()}</div>
            <div>
              <button class="minus" onclick="changeQuantity(${key}, ${item.quantity - 1})">-</button>
              <div class="count">${item.quantity}</div>
              <button class="plus" onclick="changeQuantity(${key}, ${item.quantity + 1})">+</button>
            </div>
          `;
          listCard.appendChild(li);
        }
        total.innerText = totalPrice.toLocaleString();
        quantity.innerText = count;
      }

      window.addtoCard = addtoCard;
      window.changeQuantity = changeQuantity;
      reloadCard();
    });