var product = [
    {
        id: "AD01",
        name: "Samba OG Shoes",
        img: "AD1.jpg",
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
        id: "AD02",
        name: "Ultraboost 1.0 Shoes",
        img: "AD2.jpg",
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
        id: "AD03",
        name: "Flowboost Shoes",
        img: "AD3.jpg",
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
        id: "AD04",
        name: "Aspyre Shoes",
        img: "AD4.jpg",
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
        id: "AD05",
        name: "Bravada 2.0 Platform Shoes",
        img: "AD5.jpg",
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
        id: "AD06",
        name: "Daily 4.0 Shoes",
        img: "AD6.jpg",
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
        id: "AD07",
        name: "Court 24 Shoes",
        img: "AD7.jpg",
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
        id: "AD08",
        name: "Kaptir 3.0 Shoes",
        img: "AD8.jpg",
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
    localStorage.setItem('femaleProduct', JSON.stringify(product))
}

// lấy sản phẩm
function load(){
    product = JSON.parse(localStorage.getItem('femaleProduct'));
} 

// Xoá dữ liệu trên localStorage
//localStorage.clear();

// print to html
if (localStorage.getItem("femaleProduct") != null) {
    load();
}
if (localStorage.getItem("femaleProduct") == null) {
    Save();
}

var listLocal = function () {
    var listProduct = "";
    for (var i in product) {
        var data = JSON.parse(JSON.stringify(product[i]));

        // Tạo combobox cho size
        var sizeOptions = '<select class="form-select select-size" data-id="' + data.id + '">';
        for (var j in data.sizes) {
            if (data.sizes[j].quantity > 0) {
                sizeOptions +=
                    '<option value="' +
                    data.sizes[j].size +
                    '">' +
                    "Size: " +
                    data.sizes[j].size +
                    " (" +
                    data.sizes[j].quantity +
                    " sản phẩm)" +
                    "</option>";
            }
        }
        sizeOptions += "</select>";

        // Render sản phẩm
        listProduct += '<div class="item">';
        listProduct += '<a href="#">';
        listProduct += '<div class="card">';
        listProduct += '<div class="nd-sp">';
        listProduct += '<div class="img-sp mb-3">';
        listProduct +=
            '<a><img class="proo" data-id="' +
            data.id +
            '" data-name="' +
            data.name +
            '" data-img="' +
            data.img +
            '" data-price="' +
            data.price +
            '" data-price-sale="' +
            data.price_sale +
            '" src="./assets/img/' +
            data.img +
            '" alt="hinh-anh-san-pham"></a>';
        listProduct += "</div>";
        listProduct += '<div class="info-sp text-center">';
        listProduct +=
            '<a class="proo" data-id="' +
            data.id +
            '" data-name="' +
            data.name +
            '" data-img="' +
            data.img +
            '" data-price="' +
            data.price +
            '" data-price-sale="' +
            data.price_sale +
            '"><h5 class="name">' +
            data.name +
            "</h5></a>";
        listProduct +=
            '<p class="price" style="color: #ffb41d;"><del>' +
            data.price_sale +
            "</del></p>";
        listProduct += '<p class="price-sale">' + data.price + "</p>";
        listProduct += "</div>";
        listProduct += "</div>";
        listProduct += "</div>";
        listProduct += "</a>";
        listProduct += sizeOptions; // Thêm combobox chọn size
        listProduct +=
            '<button class="mt-2 mb-3 add-to-cart add-cart" data-id="' +
            data.id +
            '" data-name="' +
            data.name +
            '" data-img="' +
            data.img +
            '" data-price="' +
            data.price +
            '" data-price-sale="' +
            data.price_sale +
            '">Thêm vào giỏ hàng</button>';
        listProduct += "</div>";
    }

    document.getElementById("item").innerHTML = listProduct; // Cập nhật nội dung
};

listLocal();

