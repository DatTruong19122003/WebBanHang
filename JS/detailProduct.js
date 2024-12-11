var product = [];
var pro = [];

function saveproduct() {
    sessionStorage.setItem('shopping', JSON.stringify(pro));
}
// Load cart
function loadproduct() {
    pro = JSON.parse(sessionStorage.getItem('shopping'));
}

var chuyen = function () {
    pro = [];
    saveproduct();
    window.location = "Index.html";
};
$(document).on('click', '.proo', function (event) {
    event.preventDefault();
    var id = $(this).data('id');
    var name = $(this).data('name');
    var img = $(this).data('img');
    var price_sale = Number($(this).data('price-sale'));
    var price = Number($(this).data('price'));

    var item = {
        id,
        name,
        img,
        price_sale,
        price,
    };

    // Lưu sản phẩm vào sessionStorage
    pro.push(item);
    saveproduct();

    // Chuyển hướng tới trang chi tiết sản phẩm
    window.location = "detailProduct.html";
});


if (sessionStorage.getItem("shopping") != null) {
    loadproduct();
}

function Save() {
    localStorage.setItem('listProduct', JSON.stringify(product))
}
//lấy sản phẩm 
function load() {
    product = JSON.parse(localStorage.getItem('listProduct'));
}
//xuất sản phẩm ra html
if (localStorage.getItem("listProduct") != null) {
    load();
}
var ProductLocal = function () {
    loadproduct();
    var Cproduct = "";
    var data1 = pro[pro.length - 1];
    if (data1 == null) {
        return;
    }
    var productList = JSON.parse(localStorage.getItem('listProduct')) || [];

    // Tìm sản phẩm có ID khớp với data1.id
    var productDetail = productList.find(product => product.id === data1.id);
    if (!productDetail) {
        alert("Không tìm thấy thông tin sản phẩm!");
        return;
    }
    Cproduct += '<h3>Sản phẩm/' + data1.name + '</h3>';
    Cproduct += '<div class="row mt-4">';
    Cproduct += '<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">';
    Cproduct += '<div class="product">';
    Cproduct += '<div class="img-product pt-4 pb-4">';
    Cproduct += '<img src="./assets/img/' + data1.img + '" alt="...">'
    Cproduct += '</div>';
    Cproduct += '</div>';
    Cproduct += '</div>';
    Cproduct += '<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">';
    Cproduct += '<div class="product">';
    Cproduct += '<div class="info-product p-4">';
    Cproduct += '<h3>' + data1.name + '</h3>';
    Cproduct += '<p class="title-ma" style="float: left; margin-right: 1rem;">Mã sản phẩm: <b>' + data1.id + '</b></p>';
    Cproduct += '<p class="title-trangthai">Còn hàng</p> ';
    Cproduct += '<p class="price mt-2" style="padding-right: 1rem; color: #ffb41d; float: left;"><del>' + data1.price_sale + '₫</del></p>';
    Cproduct += '<p class="price-sale mt-2">' + data1.price + '₫</p>';
    Cproduct += '<div class="content-footer mt-4">';
    Cproduct += '<div class="row giaohang mb-3">';
    Cproduct += '<div class="col-2"><i class="fas fa-truck"></i></div>';
    Cproduct += '<div class="col giaohang-content">';
    Cproduct += '<h5 class="mb-1">MIỄN PHÍ GIAO HÀNG TOÀN QUỐC</h5>';
    Cproduct += '<p style="color: #616060;">(Sản phẩm trên 300,000đ)</p>';
    Cproduct += '</div>';
    Cproduct += '</div>';
    Cproduct += '<div class="row giaohang mb-3">';
    Cproduct += '<div class="col-2"><i class="fas fa-file-invoice"></i></div>';
    Cproduct += '<div class="col giaohang-content">';
    Cproduct += '<h5 class="mb-1">ĐỔI TRẢ DỄ DÀNG</h5>';
    Cproduct += '<p style="color: #616060;">(Đổi trả 24h cho tất cả sản phẩm đầy đủ tem mác)</p>';
    Cproduct += '</div>';
    Cproduct += '</div>';
    Cproduct += '<div class="row giaohang mb-4">';
    Cproduct += '<div class="col-2"><i class="fas fa-phone-alt"></i></div>';
    Cproduct += '<div class="col giaohang-content">';
    Cproduct += '<h5 class="mb-1">TỔNG ĐÀI BÁN HÀNG 1900 1001</h5>';
    Cproduct += '<p style="color: #616060;">(Miễn phí từ 8h30 - 21:30 mỗi ngày)</p>';
    Cproduct += '</div>';
    Cproduct += '</div>';
    Cproduct += '</div>';
    Cproduct += '<select class="form-select select-size" data-id="' + data1.id + '">';
    for (var j in productDetail.sizes) { // Lặp qua các size của sản phẩm
        var sizeData = productDetail.sizes[j];
        Cproduct += '<option value="' + sizeData.size + '">Size: ' + sizeData.size + ' (' + sizeData.quantity + ' sản phẩm)</option>';
    }
    Cproduct += '</select>';
    Cproduct += '<button class="mt-3 mb-3 add-to-cart add-cart"  data-id="' + data1.id + '" data-name="' + data1.name + '" data-img="' + data1.img + '" data-price="' + data1.price + '" data-price-sale="' + data1.price_sale + '">Thêm vào giỏ hàng</button>';
    Cproduct += '</div>';
    Cproduct += '</div>';
    Cproduct += '</div>';
    Cproduct += '</div>';
    document.getElementById("detail").innerHTML = Cproduct;
}
saveproduct();
ProductLocal();

// Xoá dữ liệu trên localStorage
//localStorage.clear();