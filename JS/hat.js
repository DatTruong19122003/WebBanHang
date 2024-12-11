var product = [
    {
        id: "V01",
        name: "Authentic Shoe",
        img: "V1.jpg",
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
        id: "V02",
        name: "SK8-Hi Shoes",
        img: "V2.jpg",
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
        id: "V03",
        name: "OLD SKOOL",
        img: "V3.jpg",
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
        id: "V04",
        name: "PINK OLD SKOOL",
        img: "V4.jpg",
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
        id: "V05",
        name: "Knu Skool Pig Suede Green",
        img: "V5.jpg",
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
        id: "V06",
        name: "OS Earth Tones Moon Rock",
        img: "V6.jpg",
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
        id: "V07",
        name: "Classic Shoes",
        img: "V7.jpg",
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
        id: "V08",
        name: "Knu Mid Shoe",
        img: "V8.jpg",
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
    localStorage.setItem('hatProduct', JSON.stringify(product))
}

// lấy sản phẩm
function load(){
    product = JSON.parse(localStorage.getItem('hatProduct'));
} 

// print to html
if (localStorage.getItem("hatProduct") != null) {
    load();
}
if (localStorage.getItem("hatProduct") == null) {
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
        listProduct += '<select class="form-select select-size" data-id="' + data.id + '">';
        for (var j in data.sizes) { // Lặp qua các size của sản phẩm
            var sizeData = data.sizes[j];
            listProduct += '<option value="' + sizeData.size + '">Size: ' + sizeData.size + ' (' + sizeData.quantity + ' sản phẩm)</option>';
        }
        listProduct += '</select>';
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
    document.getElementById("countProductHat").innerHTML = count + " sản phẩm";
}
countProduct();

// Xoá dữ liệu trên localStorage
//localStorage.clear();