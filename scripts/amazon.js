
// Step 1- Save the data (create a javascript that closely matches the page)
// we start by saving the data in a variable
// We have to create an array since it represents a list
// Then an object since it lets us group multiple values together
// The object should be created inside an array
// const products = [{
//     // create an object 
//     // black and Gray Athletic cotton
//     image:'images/products/athletic-cotton-socks-6-pairs.jpg',
//     name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
//     rating: {
//         stars: 4.5,
//         count: 87,
//     },
//     priceCents: 1090
//     // Javascript has challenges dealing with decimals
//     // Price should be saved as cents
// }, {
//     // Intermediate Size basketball
//     image:'images/products/intermediate-composite-basketball.jpg',
//     name: 'Intermediate Size Basketball',
//     rating: {
//         stars: 4,
//         count: 127,
//     },
//     priceCents: 2095    
// },

// {
//     // Adults plain cotton T-shirt- 2 pack
//     image:'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
//     name: 'Adults Plain Cotton T-Shirt - 2 Pack',
//     rating: {
//         stars: 4,
//         count: 56,
//     },
//     priceCents: 799    
// }, 

// {
//     // slot toaster -black
//     image:'images/products/black-2-slot-toaster.jpg',
//     name: 'Adults Plain Cotton T-Shirt - 2 Pack',
//     rating: {
//         stars: 5,
//         count: 2197,
//     },
//     priceCents: 1899    
// }, 

// ];
// End of saving the data

// step 3- step 2 is below step 3, combine all the HTML in one 
let productsHTML = ''; 

// EACH TIME we go through the loop we will add the HTML up there







// Step 2, use the data to generate the HTML
// To generate the HTML, We can loop through the arrays to create HTML for each of the products
// 

// step 2 - Generate the HTML Using javascript
// Looping through the array
products.forEach(
    // create a function here. for each takes each product and saves it in a parameter called product, then runs the function
    
    // updated from step 3 now
    // updated from step 3- accumulator pattern.
    // Each time we loop through, we add to the products

    (product) => {
        // for each of these products we want to create some HTML
        // Therefore we create a variable and we use a template string using back ticks
        productsHTML += `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
           ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
              $${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
          <select class="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-id="${product.id}"
          >
            Add to Cart
          </button>
        </div>

        `;

        // In the Add to button above, we added an event listener, we started by adding the javascript class
        // The event listener has been added through the DOM
        // 
        
    });
    // step 3
    console.log(productsHTML);


    // step 3 - it is done right below step 1
    // Combine all the HTML into one and put it on the webpage
    // 

    // last step is to put it on the webpage using the DOM 
    // To achieve that we have to add a class to the HTML element (js- product grid)
    
    document.querySelector('.js-products-grid').innerHTML = productsHTML;
    // using toFixed changes it to 2 decinmal places 
    
    // 
    // Make it interactive 

    document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', ()=>{
        //   we can add an object to the cart
        //  We can use a data attribute (It allows us to atach any information to an element)
        //  The data attribute can start with data and we can give it anyname that we like
        // 
        const productId = button.dataset.
        productId;

        let matchingItem;


        cart.forEach((item) => {
            if (productId === item.productId){
                matchingItem = item;             
            }
            });

            // When clicking the 'Add to Cart' button , use the DOM to get the quantity
            // selector

            const quantitySelector = document.querySelector( `.js-quantity-selector-${productId}`);

            // Get the value selected in the quantity selector (to get the value out of a select element using the property value)
            const quantity = quantitySelector.value;

            // When updating the cart, instead of using a quantity of 1 everytime, use the quantity that we got from 13d.
            // 


            if (matchingItem){
                matchingItem.quantity += 1;
            } else {
                cart.push({
                    productId: productId,
                    quantity: 1
                });
            }  
            // we need a variable to store the quantity

            let cartQuantity = 0;

            cart.forEach((item) => {
                cartQuantity += item.quantity;

            });
            document.querySelector('.js-cart-quantity')
            .innerHTML = cartQuantity;
        });
    });


    // Having two products that have the same names but different brands
    // we need to have different IDs 


// We can add the product to the cart
// we can create a cart array

// steps
/*
1. calculate the quantity
2. put that quantity on the page
3. 
*/
