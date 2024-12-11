var product = [
    {
        id: "NIKE01",
        name: "Air Jordan 1 Low",
        img: "NIKE1.jpg",
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
        id: "NIKE02",
        name: "Nike Dunk Low Retro",
        img: "NIKE2.jpg",
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
        id: "NIKE03",
        name: "Nike Killshot 2 Leather",
        img: "NIKE3.jpg",
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
        id: "NIKE04",
        name: "Nike P-6000",
        img: "NIKE4.jpg",
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
        id: "NIKE05",
        name: "Nike Revolution 7 EasyOn",
        img: "NIKE5.jpg",
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
        id: "NIKE06",
        name: "Nike GP Challenge Pro Premium",
        img: "NIKE6.jpg",
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
        id: "NIKE07",
        name: "Nike Zoom Vomero 5",
        img: "NIKE7.jpg",
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
        id: "NIKE08",
        name: "Nike Air Max 90 Premium",
        img: "NIKE8.jpg",
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
    {
        id: "NIKE09",
        name: "Giannis Freak 6 EP",
        img: "NIKE9.jpg",
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
        id: "NIKE10",
        name: "Nike Dunk High Retro SE",
        img: "NIKE10.jpg",
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
        id: "NIKE11",
        name: "Nike Phantom GX 2 Academy",
        img: "NIKE11.jpg",
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
        id: "NIKE12",
        name: "Tatum 2 'Sidewalk Chalk' PF",
        img: "NIKE12.jpg",
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
    localStorage.setItem('manProduct', JSON.stringify(product))
}

// lấy sản phẩm
function load(){
    product = JSON.parse(localStorage.getItem('manProduct'));
} 

// Xoá dữ liệu trên localStorage
 //localStorage.clear();

// print to html
if (localStorage.getItem("manProduct") != null) {
    load();
}
if (localStorage.getItem("manProduct") == null) {
    Save();
}

var listLocal = function() {
    var listProduct = "";
    for(var i in product) {
        var data = JSON.parse(JSON.stringify(product[i]));
        var listProduct = '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 sanPham mb-4">';
        listProduct += '<div class="nd-sp">';
        listProduct += '<a href="#" class="proo" data-id="' + data.id + '" data-name="' + data.name + '" data-img="' + data.img + '" data-price="' + data.price + '" data-price-sale="' + data.price_sale + '">';
        listProduct += '<div class="img-sp mb-3">';
        listProduct += '<img src="./assets/img/' + data.img + '" alt="hinh-anh-san-pham">';
        listProduct += '</div>';
        listProduct += '<div class="info-sp text-center">';
        listProduct += '<h5 class="name">' + data.name + '</h5>';
        listProduct += '<p class="price" style="color: #ffb41d;"><del>' + data.price_sale + '</del></p>';
        listProduct += '<p class="price-sale">' + data.price + '</p>';
        listProduct += '</div>';
        listProduct += '</a>';
        listProduct += '<select class="form-select select-size" data-id="' + data.id + '">';
        for (var j in data.sizes) { // Lặp qua các size của sản phẩm
            var sizeData = data.sizes[j];
            listProduct += '<option value="' + sizeData.size + '">Size: ' + sizeData.size + ' (' + sizeData.quantity + ' sản phẩm)</option>';
        }
        listProduct += '</select>';
        listProduct += '<button class="mt-2 mb-3 add-to-cart add-cart" data-id="' + data.id + '" data-name="' + data.name + '" data-img="' + data.img + '" data-price="' + data.price + '" data-price-sale="' + data.price_sale + '">Thêm vào giỏ hàng</button>';
        listProduct += '</div>';
        listProduct += '</div>';


        document.getElementById("productsMan").innerHTML += listProduct;
    }
    Save();
}
listLocal();

var countProduct = function() {
    if(localStorage.getItem("manProduct")) {
        return ;
    }
    var count = 0, i = 0;
    for(var i in product) {
        count++;
        i++;
    }
    document.getElementById("countProductMan").innerHTML = count + " sản phẩm";
}
countProduct();

