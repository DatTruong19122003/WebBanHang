
var shoppingCart = (function() {
    cart = [];

    // Constructor
    function Item(id, name, img, price, size,count) {
        this.id         = id;
        this.name       = name;
        this.img        = img;
        this.price      = price;
        this.count      = count;
        this.size       = size;
    }

    // Save cart
    function saveCart() {
        sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
    }

    // Load cart
    function loadCart() {
        cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    }
    if (sessionStorage.getItem("shoppingCart") != null) {
        loadCart();
    }

    var obj = {};

    // Add to cart
    obj.addItemToCart = function (id, name, img, price, size, count) {
        // Lấy danh sách sản phẩm từ localStorage
        var product = JSON.parse(localStorage.getItem('listProduct')) || [];

        // Tìm sản phẩm trong kho
        var foundProduct = product.find(p => p.id === id);
        if (!foundProduct) {
            alert("Sản phẩm không tồn tại trong kho!");
            return;
        }

        // Tìm size của sản phẩm
        var foundSize = foundProduct.sizes.find(s => s.size == size);
        if (!foundSize) {
            alert("Size sản phẩm không tồn tại!");
            return;
        }

        // Kiểm tra nếu số lượng trong kho đủ
        var totalInCart = 0;
        for (var item of cart) {
            if (item.id === id && item.size == size) {
                totalInCart = item.count; // Lấy số lượng hiện tại trong giỏ hàng
            }
        }

        if (totalInCart + count > foundSize.quantity) {
            alert(`Không đủ số lượng sản phẩm trong kho! Chỉ còn lại ${foundSize.quantity} sản phẩm cho size ${size}.`);
            return;
        }

        // Kiểm tra nếu sản phẩm (với cùng id và size) đã có trong giỏ hàng
        for (var item in cart) {
            if (cart[item].id === id && cart[item].size == size) {
                cart[item].count += count; // Tăng số lượng nếu đã tồn tại
                saveCart();
                return;
            }
        }

        // Nếu chưa có, thêm sản phẩm mới vào giỏ hàng
        var item = new Item(id, name, img, price, size, count);
        cart.push(item);
        saveCart();
    };



    // Set count from item
    obj.setCountForItem = function(name, count) {
        for(var i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
    }

    // Remove item from cart
    obj.removeItemFromCart = function(id,size) {
        for(var item in cart) {
            if (cart[item].id === id && cart[item].size == size) {
                cart[item].count--;
                if (cart[item].count === 0) {
                    cart.splice(item, 1);
                }
                break;
            }
        }
        saveCart();
    }

    // Remove all items from cart
    obj.removeItemFromCartAll = function(id) {
        for(var item in cart) {
            if(cart[item].id === id) {
                cart.splice(item, 1);
                break;
            }
        }
        saveCart();
    }

    // Clear cart
    obj.clearCart = function() {
        cart = [];
        saveCart();
    }

    // Count cart
    obj.totalCount = function() {
        var totalCount = 0;
        for(var item in cart) {
            totalCount += cart[item].count;
        }
        return totalCount;
    }

    // Total cart
    obj.totalCart = function() {
        var totalCart = 0;
        for(var item in cart) {
            totalCart += cart[item].price * cart[item].count;
        }
        return Number(totalCart.toFixed(0));
    }

    // List cart
    obj.listCart = function () {
        var cartCopy = [];
        for (var i in cart) {
            var item = cart[i];
            var itemCopy = {};
            for (var p in item) {
                itemCopy[p] = item[p];
            }
            itemCopy.total = Number(item.price * item.count).toFixed(0);
            cartCopy.push(itemCopy);
        }
        return cartCopy;
    };



    // cart : Array
    // Item : Object/Class
    // addItemToCart : Function
    // removeItemFromCart : Function
    // removeItemFromCartAll : Function
    // clearCart : Function
    // countCart : Function
    // totalCart : Function
    // listCart : Function
    // saveCart : Function
    // loadCart : Function
    return obj;

})();

var pro = [];

// Save products
function saveProduct() {
    sessionStorage.setItem('shopping', JSON.stringify(pro));
}

// Load products
function loadProduct() {
    pro = JSON.parse(sessionStorage.getItem('shopping'));
}

// Add item
$('.add-to-cart').click(function (event) {
    event.preventDefault();

    // Lấy ID sản phẩm từ nút bấm
    var id = $(this).data('id');
    // Tìm combobox `<select>` trong phần tử cha, ưu tiên `.card`, nếu không thì `.proo`
    var selectedSize = $(this).prev('.select-size').val();

    // Nếu chưa chọn size thì hiển thị cảnh báo
    if (!selectedSize) {
        alert("Vui lòng chọn size trước khi thêm vào giỏ hàng!");
        return;
    }

    // Lấy thông tin sản phẩm từ nút
    var name = $(this).data('name');
    var img = $(this).data('img');
    var price = Number($(this).data('price'));

    // Thêm vào giỏ hàng với size được chọn
    shoppingCart.addItemToCart(id, name, img, price, selectedSize, 1);
    alert("Đã thêm vào giỏ hàng.");
    displayCart();
});




// Clear items
$('.clear-cart').click(function() {
    shoppingCart.clearCart();
    window.location.reload();
    displayCart();
});

// Display cart
function displayCart() {
    var cartArray = shoppingCart.listCart(); // Lấy danh sách sản phẩm từ giỏ hàng
    var output = ""; // Chuỗi HTML để chứa nội dung hiển thị
    for (var i in cartArray) {
        var item = cartArray[i]; // Lấy từng sản phẩm

        // Tạo hàng cho từng sản phẩm
        output += "<tr class='text-center'>"
            + "<td><img src='./assets/img/" + item.img + "' style='width:100px'></td>"
            + "<td class='text name-title'>" + item.name + " (Size: " + item.size + ")</td>"
            + "<td class='text'>" + item.price + " ₫</td>"
            + "<td class='text-btn-count'>"
            + "<button class='minus-item cart-count input-group-addon btn btn-outline-success' "
            + "data-id='" + item.id + "' "
            + "data-name='" + item.name + "' "
            + "data-img='" + item.img + "' "
            + "data-price='" + item.price + "' "
            + "data-size='" + item.size + "' "
            + "data-count='" + item.count + "'>-</button>"
            + "<button class='btn cart-count'>" + item.count + "</button>"
            + "<button class='plus-item cart-count btn btn-success input-group-addon' "
            + "data-id='" + item.id + "' "
            + "data-name='" + item.name + "' "
            + "data-img='" + item.img + "' "
            + "data-price='" + item.price + "' "
            + "data-size='" + item.size + "' "
            + "data-count='" + item.count + "'>+</button>"
            + "</td>"
            + "<td class='text'>" + item.total + " ₫</td>"
            + "<td class='text-btn'>"
            + "<button class='delete-item btn btn-outline-danger' "
            + "data-id='" + item.id + "' "
            + "data-name='" + item.name + "' "
            + "data-img='" + item.img + "' "
            + "data-price='" + item.price + "' "
            + "data-size='" + item.size + "' "
            + "data-count='" + item.count + "'>X</button>"
            + "</td>"
            + "</tr>";
    }

    // Gắn nội dung HTML vào phần tử `.show-cart-1`
    $('.show-cart-1').html(output);

    // Hiển thị tổng giá và tổng số lượng
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
}


// $('.show-cart-1').on("click", ".delete-item", function (event) {
//     var id = $(this).data('id');
//     var size = $(this).data('size');
//     for (var i in cart) {
//         if (cart[i].id === id && cart[i].size === size) {
//             cart.splice(i, 1); // Xóa sản phẩm theo `id` và `size`
//             break;
//         }
//     }
//     shoppingCart.saveCart();
//     displayCart();
// });
$('.show-cart-1').on("click", ".delete-item", function (event) {
    var id = $(this).data('id')
    shoppingCart.removeItemFromCartAll(id);
    displayCart();
});


// -1
$('.show-cart-1').on("click", ".minus-item", function (event) {
    var id = $(this).data('id');
    var size = $(this).data('size');
    shoppingCart.removeItemFromCart(id, size); // Cần thêm logic xử lý size
    displayCart();
});

// +1
$('.show-cart-1').on("click", ".plus-item", function (event) {
    var id = $(this).data('id');
    var size = $(this).data('size');
    shoppingCart.addItemToCart(id,null,null,null,size,1); // Cần thêm logic xử lý size
    displayCart();
});


// Item count input
$('.show-cart-1').on("change", ".item-count", function(event) {
    var id = $(this).data('id');
    var count = Number($(this).val());
    shoppingCart.setCountForItem(id, count);
    displayCart();
});
displayCart();

var info= [];
var donhang =[];
function Savedon(){
    localStorage.setItem('listdon',JSON.stringify(donhang))
}

// Lấy sản phẩm
function loaddon(){
    donhang = JSON.parse(localStorage.getItem('listdon'));
} 

if (localStorage.getItem("listdon") == null) {
    Savedon();
}

var checkCart= function(){
    if ((document.getElementById("inputnguoinhan").value=="")){
        $(".nguoinhan").css("display","block");
    }else{
        $(".nguoinhan").css("display","none");
    }
    if ((document.getElementById("inputsdt").value=="")){
        $(".sdt").css("display","block");
    }else{
        $(".sdt").css("display","none");
    }
    if ((document.getElementById("inputdiachi").value=="")){
        $(".diachi").css("display","block");
    }else{
        $(".diachi").css("display","none");
    }
    if ((document.getElementById("inputthanhtoan").value==0)){
        $(".thanhtoan").css("display","block");
    }
    else{
        $(".thanhtoan").css("display","none");
    }
    if ((document.getElementById("inputemail").value=="")){
        $(".email").css("display","block");
    }
    else{
        $(".email").css("display","none");
    }
    if ((document.getElementById("inputnguoinhan").value!="")&&(document.getElementById("inputsdt").value!="")&&(document.getElementById("inputdiachi").value!="")&&(document.getElementById("inputemail").value!="")){
        infoCart();
   }
}

// Add đơn hàng
var add_don = function(){
    var thanhtoan;
    
    if (document.getElementById("inputthanhtoan").value==1){
        thanhtoan ="Thanh toán bằng tiền mặt";
    }
    if (document.getElementById("inputthanhtoan").value==2){
        thanhtoan ="InternetBanking";
    }
    if (document.getElementById("inputthanhtoan").value==3){
        thanhtoan ="Visa Card";
    }
    if (document.getElementById("inputthanhtoan").value==4){
        thanhtoan ="Paypal";
    }
    loaddon();    
    var item = {
        id : donhang.length+1,
        user : document.getElementById("inputnguoinhan").value,
        phone:document.getElementById("inputsdt").value,
        address :document.getElementById("inputdiachi").value,
        thanhtoan : thanhtoan,
        email: document.getElementById("inputemail").value,
        total :shoppingCart.totalCart(),
        ghichu: document.getElementById("inputghichu").value,
        trangthai : "Đang xử lí",
    }

    loaddon();
    donhang.push(item);
    Savedon();
}

// Hủy xác nhận
function cancel() {
    $(".table-donHang").css("display","none");
}

// Xác nhận đơn hàng
function xacnhan() {
    // Thêm đơn hàng vào danh sách
    add_don();

    // Lấy danh sách sản phẩm từ các mảng nhỏ trong localStorage
    var productMan = JSON.parse(localStorage.getItem('manProduct')) || [];
    var productWoman = JSON.parse(localStorage.getItem('femaleProduct')) || [];
    var productHandbag = JSON.parse(localStorage.getItem('handBag')) || [];
    var productPerfume = JSON.parse(localStorage.getItem('perfume')) || [];
    var productHat = JSON.parse(localStorage.getItem('hatProduct')) || [];
    var productShoe = JSON.parse(localStorage.getItem('shoeProduct')) || [];

    // Gộp danh sách sản phẩm để tiện tìm kiếm
    var allProducts = [
        { source: productMan, key: 'manProduct' },
        { source: productWoman, key: 'femaleProduct' },
        { source: productHandbag, key: 'handBag' },
        { source: productPerfume, key: 'perfume' },
        { source: productHat, key: 'hatProduct' },
        { source: productShoe, key: 'shoeProduct' }
    ];

    // Lấy danh sách sản phẩm trong giỏ hàng
    var cartArray = shoppingCart.listCart();

    // Khấu trừ số lượng sản phẩm
    for (var i in cartArray) {
        var cartItem = cartArray[i]; // Lấy sản phẩm từ giỏ hàng

        // Duyệt qua từng mảng sản phẩm nhỏ
        for (var group of allProducts) {
            for (var j in group.source) {
                if (group.source[j].id === cartItem.id) {
                    // Tìm biến thể size tương ứng
                    for (var k in group.source[j].sizes) {
                        if (group.source[j].sizes[k].size == cartItem.size) {
                            // Trừ số lượng sản phẩm
                            group.source[j].sizes[k].quantity -= cartItem.count;

                            // Đảm bảo số lượng không âm
                            if (group.source[j].sizes[k].quantity < 0) {
                                group.source[j].sizes[k].quantity = 0;
                            }
                        }
                    }
                }
            }
        }
    }

    // Cập nhật lại từng mảng nhỏ vào localStorage
    localStorage.setItem('manProduct', JSON.stringify(allProducts[0].source));
    localStorage.setItem('femaleProduct', JSON.stringify(allProducts[1].source));
    localStorage.setItem('handBag', JSON.stringify(allProducts[2].source));
    localStorage.setItem('perfume', JSON.stringify(allProducts[3].source));
    localStorage.setItem('hatProduct', JSON.stringify(allProducts[4].source));
    localStorage.setItem('shoeProduct', JSON.stringify(allProducts[5].source));

    // Cập nhật lại `listProduct` trong localStorage
    var updatedListProduct = allProducts[0].source
        .concat(allProducts[1].source)
        .concat(allProducts[2].source)
        .concat(allProducts[3].source)
        .concat(allProducts[4].source)
        .concat(allProducts[5].source);
    localStorage.setItem('listProduct', JSON.stringify(updatedListProduct));

    // Hiển thị thông báo và reset giao diện
    shoppingCart.clearCart();
    displayCart();
    $(".thongtins").css("display", "none");
    $("#xacnhandathang").css("display", "block");
}


// Thông tin thanh toán
function infoCart(){
    var thanhtoan;

    if (document.getElementById("inputthanhtoan").value < 1) {
        
    } else {
        if (document.getElementById("inputthanhtoan").value > 1){
            alert("Hệ thống chưa hỗ trợ thanh toán online");
        } else {
            thanhtoan ="Thanh toán bằng tiền mặt";
            document.getElementById("inputnguoinhan1").innerHTML=document.getElementById("inputnguoinhan").value;
            document.getElementById("inputsdt1").innerHTML = document.getElementById("inputsdt").value;
            document.getElementById("inputdiachi1").innerHTML= document.getElementById("inputdiachi").value,
            document.getElementById("inputthanhtoan1").innerHTML = thanhtoan,
            document.getElementById("inputemail1").innerHTML= document.getElementById("inputemail").value,
            document.getElementById("inputghichu1").innerHTML =document.getElementById("inputghichu").value;
            $(".cartt").attr("data-dismiss", "modal");
            $(".table-donHang").css("display","block");
        }
    }
    
}

// Kiểm tra điều kiện đặt hàng
function checkUser(){

    var check = JSON.parse(localStorage.getItem("signIn")) || [];
    var cart = shoppingCart.listCart();
    const btnElement = document.getElementById('btnOrder');

    if (check =="")
        {
        window.location.href = './user/login.html';
    } if (check !="") {
        if (cart <= 0) {
            alert("Chưa có sản phẩm trong giỏ hàng!");
            btnElement.setAttribute('data-target', '#')
        } else {
            btnElement.setAttribute('data-target', '#diachinhanhang')
        }
    } 
}

// Xoá dữ liệu trên sessionStorage
// sessionStorage.clear();

// Xoá dữ liệu trên localStorage
// localStorage.clear();

function getName() {
    if (localStorage.getItem('inputnguoinhan') == null && localStorage.getItem('inputsdt') == null && localStorage.getItem('inputdiachi') == null) {
        return;
    }
    for (var i in user) {
        if(String(user[i].username) == String(signupArr[0].username)) {
            document.getElementById("inputnguoinhan").value=user[i].name;
            document.getElementById("inputsdt").value=user[i].sdt;
            document.getElementById("inputdiachi").value=user[i].address;
            document.getElementById("inputemail").value=user[i].email;
        }
    }
}
getName();