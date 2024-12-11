var product = [
    {
        id: "SP01",
        name: "Áo thun",
        img: "sale1.jpg",
        price_sale: 2000,
        price: 1500,
        sizes: [
            { size: 36, quantity: 6 },
            { size: 37, quantity: 9 },
            { size: 38, quantity: 12 },
            { size: 39, quantity: 15 },
            { size: 40, quantity: 8 },
            { size: 41, quantity: 5 }
        ]
    },
    {
        id: "SP02",
        name: "Fast-Trac NITRO",
        img: "sale2.jpg",
        price_sale: 3000,
        price: 2500,
        sizes: [
            { size: 36, quantity: 6 },
            { size: 37, quantity: 9 },
            { size: 38, quantity: 12 },
            { size: 39, quantity: 15 },
            { size: 40, quantity: 8 },
            { size: 41, quantity: 5 }
        ]
    },
    {
        id: "SP03",
        name: "CONS AS-1 Pro",
        img: "sale3.jpg",
        price_sale: 2200,
        price: 1900,
        sizes: [
            { size: 36, quantity: 6 },
            { size: 37, quantity: 9 },
            { size: 38, quantity: 12 },
            { size: 39, quantity: 15 },
            { size: 40, quantity: 8 },
            { size: 41, quantity: 5 }
        ]
    },
    {
        id: "SP04",
        name: "PINK OLD SKOOL",
        img: "Sale4.jpg",
        price_sale: 1900,
        price: 1600,
        sizes: [
            { size: 36, quantity: 6 },
            { size: 37, quantity: 9 },
            { size: 38, quantity: 12 },
            { size: 39, quantity: 15 },
            { size: 40, quantity: 8 },
            { size: 41, quantity: 5 }
        ]
    },
    {
        id: "SP05",
        name: "BB550",
        img: "Sale5.jpg",
        price_sale: 1500,
        price: 1200,
        sizes: [
            { size: 36, quantity: 6 },
            { size: 37, quantity: 9 },
            { size: 38, quantity: 12 },
            { size: 39, quantity: 15 },
            { size: 40, quantity: 8 },
            { size: 41, quantity: 5 }
        ]
    },
    {
        id: "SP06",
        name: "Chuck 70 Canvas",
        img: "sale6.jpg",
        price_sale: 3000,
        price: 2500,
        sizes: [
            { size: 36, quantity: 6 },
            { size: 37, quantity: 9 },
            { size: 38, quantity: 12 },
            { size: 39, quantity: 15 },
            { size: 40, quantity: 8 },
            { size: 41, quantity: 5 }
        ]
    },
    {
        id: "SP07",
        name: "Nike Air Max 90 Premium",
        img: "sale7.jpg",
        price_sale: 2000,
        price: 2000,
        sizes: [
            { size: 36, quantity: 6 },
            { size: 37, quantity: 9 },
            { size: 38, quantity: 12 },
            { size: 39, quantity: 15 },
            { size: 40, quantity: 8 },
            { size: 41, quantity: 5 }
        ]
    },
    {
        id: "SP08",
        name: "Converse Weapon Leather",
        img: "sale8.jpg",
        price_sale: 1800,
        price: 1200,
        sizes: [
            { size: 36, quantity: 6 },
            { size: 37, quantity: 9 },
            { size: 38, quantity: 12 },
            { size: 39, quantity: 15 },
            { size: 40, quantity: 8 },
            { size: 41, quantity: 5 }
        ]
    },

];

var prod = [];
function saveProduct() {
    sessionStorage.setItem('shopping', JSON.stringify(prod));
}

// đẩy mảng product vào localStorange
function Save() {
    localStorage.setItem('productSale', JSON.stringify(product))
}

// lấy sản phẩm
function load(){
    product = JSON.parse(localStorage.getItem('productSale'));
} 

// print to html
if (localStorage.getItem("productSale") != null) {
    load();
}
if (localStorage.getItem("productSale") == null) {
    Save();
}

var listLocal = function() {
    var listProduct = "";
    for(var i in product) {
        var data = JSON.parse(JSON.stringify(product[i]));
        var listProduct = '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 sanPham mb-4">';
        listProduct += '<div class="nd-sp">';
        listProduct += '<a href="#" class="proo" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" data-price-sale="'+data.price_sale+'">';
        listProduct += '<div class="img-sp mb-3">';
        listProduct += '<img src="./assets/img/'+ data.img +'" alt="hinh-anh-san-pham">';
        listProduct += '</div>';
        listProduct += '<div class="info-sp text-center">';
        listProduct += '<h5 class="name">'+ data.name +'</h5>';
        listProduct += '<p class="price" style="color: #ffb41d;"><del>'+ data.price_sale +'</del></p>';
        listProduct += '<p class="price-sale">'+ data.price +'</p>';
        listProduct += '</div>';
        listProduct += '</a>';
        listProduct += '<button class="mt-2 mb-3 add-to-cart add-cart" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" data-price-sale="'+data.price_sale+'">Thêm vào giỏ hàng</button>';
        listProduct += '</div>';
        listProduct += '</div>';

        document.getElementById("products").innerHTML += listProduct;
    }
    Save();
}
listLocal();

// Xoá dữ liệu trên localStorage
//localStorage.clear();