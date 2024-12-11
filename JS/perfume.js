var product = [
    {
        id: "PUMA01",
        name: "PUMA x ALEX TOUSSAINT",
        img: "PM1.jpg",
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
        id: "PUMA02",
        name: "ForeverRUN NITRO",
        img: "PM2.jpg",
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
        id: "PUMA03",
        name: "Kruz Profoam",
        img: "PM3.jpg",
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
        id: "PUMA04",
        name: "SEASONS Voyage NITRO",
        img: "PM4.jpg",
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
        id: "PUMA05",
        name: "Deviate NITRO",
        img: "PM5.jpg",
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
        id: "PUMA06",
        name: "Fast-Trac NITRO",
        img: "PM6.jpg",
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
        id: "PUMA07",
        name: "evoSPEED Javelin Elite 2.0",
        img: "PM7.jpg",
        price_sale: 3500,
        price: 2900,
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
        id: "PUMA08",
        name: "Caven 2.0 Abrupt",
        img: "PM8.jpg",
        price_sale: 3500,
        price: 2900,
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
    localStorage.setItem('perfume', JSON.stringify(product))
}

// lấy sản phẩm
function load(){
    product = JSON.parse(localStorage.getItem('perfume'));
} 

// print to html
if (localStorage.getItem("perfume") != null) {
    load();
}
if (localStorage.getItem("perfume") == null) {
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
    document.getElementById("countProductPerfume").innerHTML = count + " sản phẩm";
}
countProduct();


// Xoá dữ liệu trên localStorage
//localStorage.clear();