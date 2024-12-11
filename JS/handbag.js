var product = [
    {
        id: "NB01",
        name: "Fresh Foam Arishi v4",
        img: "NB1.jpg",
        price_sale: 2000,
        price: 1500,
        sizes: [
            { size: 36, quantity: 5 },
            { size: 37, quantity: 7 },
            { size: 38, quantity: 10 },
            { size: 39, quantity: 8 },
            { size: 40, quantity: 6 },
            { size: 41, quantity: 4 }
        ]
    },
    {
        id: "NB02",
        name: "Fresh Foam X 1080v14",
        img: "NB2.jpg",
        price_sale: 1800,
        price: 1300,
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
        id: "NB03",
        name: "FuelCell Rebel v4",
        img: "NB3.jpg",
        price_sale: 2200,
        price: 1900,
        sizes: [
            { size: 36, quantity: 3 },
            { size: 37, quantity: 6 },
            { size: 38, quantity: 9 },
            { size: 39, quantity: 12 },
            { size: 40, quantity: 7 },
            { size: 41, quantity: 4 },
            { size: 42, quantity: 2 }
        ]
    },
    {
        id: "NB04",
        name: "Fresh Foam X 880v14",
        img: "NB4.jpg",
        price_sale: 1900,
        price: 1600,
        sizes: [
            { size: 36, quantity: 10 },
            { size: 37, quantity: 8 },
            { size: 38, quantity: 7 },
            { size: 39, quantity: 6 },
            { size: 40, quantity: 5 },
            { size: 41, quantity: 4 },
            { size: 42, quantity: 3 }
        ]
    },
    {
        id: "NB05",
        name: "Fresh Foam X 880v14",
        img: "NB5.jpg",
        price_sale: 1500,
        price: 1200,
        sizes: [
            { size: 37, quantity: 8 },
            { size: 38, quantity: 10 },
            { size: 39, quantity: 12 },
            { size: 40, quantity: 6 },
            { size: 41, quantity: 5 }
        ]
    },
    {
        id: "NB06",
        name: "Fresh Foam X 860v14",
        img: "NB6.jpg",
        price_sale: 3000,
        price: 2500,
        sizes: [
            { size: 38, quantity: 15 },
            { size: 39, quantity: 10 },
            { size: 40, quantity: 8 },
            { size: 41, quantity: 7 },
            { size: 42, quantity: 5 },
            { size: 43, quantity: 3 }
        ]
    },
    {
        id: "NB07",
        name: "T500",
        img: "NB7.jpg",
        price_sale: 2000,
        price: 2000,
        sizes: [
            { size: 36, quantity: 8 },
            { size: 37, quantity: 9 },
            { size: 38, quantity: 7 },
            { size: 39, quantity: 10 },
            { size: 40, quantity: 12 },
            { size: 41, quantity: 6 }
        ]
    },
    {
        id: "NB08",
        name: "BB550",
        img: "NB8.jpg",
        price_sale: 1800,
        price: 1200,
        sizes: [
            { size: 36, quantity: 5 },
            { size: 37, quantity: 7 },
            { size: 38, quantity: 8 },
            { size: 39, quantity: 6 },
            { size: 40, quantity: 4 },
            { size: 41, quantity: 3 },
            { size: 42, quantity: 2 }
        ]
    }
];

var prod = [];
function saveProduct() {
    sessionStorage.setItem('shopping', JSON.stringify(prod));
}

// đẩy mảng product vào localStorange
function Save() {
    localStorage.setItem('handBag', JSON.stringify(product))
}

// lấy sản phẩm
function load(){
    product = JSON.parse(localStorage.getItem('handBag'));
} 

// print to html
if (localStorage.getItem("handBag") != null) {
    load();
}
if (localStorage.getItem("handBag") == null) {
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

var countProduct = function() {
    var count = 0, i = 0;
    for(var i in product) {
        count++;
        i++;
    }
    document.getElementById("countProductHandbag").innerHTML = count + " sản phẩm";
}
countProduct();

// Xoá dữ liệu trên localStorage
