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
    image:'images/products/intermediate-composite-basketball.jpg',
    name: 'Intermediate Size Basketball',
    rating: {
        stars: 4,
        count: 127,
    },
    priceCents: 2095    
},

{
    // third product
    image:'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name: 'Adults Plain Cotton T-Shirt - 2 Pack',
    rating: {
        stars: 4,
        count: 56,
    },
    priceCents: 799    
}

];