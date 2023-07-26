// we start by saving the data in a variable
// We have to create an array since it represents a list
// Then an object since it lets us group multiple values together
// The object should be created inside an array
const products = [{
    // create an object 
    // first product
    image:'images/products/athletic-cotton-socks-6-pairs.jpg',
    name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
    rating: {
        stars: 4.5,
        count: 87,
    },
    priceCents: 1090
    // Javascript has challenges dealing with decimals
    // Price should be saved as cents
}, {
    // second product
    image:'images/ratings/rating-45.png',
    name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
    rating: {
        stars: 4.5,
        count: 87,
    },
    priceCents: 1090
    
}

];