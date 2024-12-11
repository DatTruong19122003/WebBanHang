
var shoppingCart = (function() {
    cart = [];

    // Constructor
    function Item(id, name, img, price, count) {
        this.id         = id;
        this.name       = name;
        this.img        = img;
        this.price      = price;
        this.count      = count;
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
    obj.addItemToCart = function(id, name, img, price, count) {
        for(var item in cart) {
            if (cart[item].id === id) {
                cart[item].count++;
                saveCart();
                return;
            }
        }
        var item = new Item(id, name, img, price, count);
        cart.push(item);
        saveCart();
    }

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
    obj.removeItemFromCart = function(id) {
        for(var item in cart) {
            if (cart[item].id === id) {
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
    obj.listCart = function() {
        var cartCopy = [];
        for(i in cart) {
            item = cart[i];
            itemCopy = {};
            for(p in item) {
                itemCopy[p] = item[p];
            }
            itemCopy.total = Number(item.price * item.count).toFixed(0);
            cartCopy.push(itemCopy)
        }
        return cartCopy;
    }

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
$('.add-to-cart').click(function(event) {
    event.preventDefault();
    var id = $(this).data('id');
    var name = $(this).data('name');
    var img = $(this).data('img');
    var price = Number($(this).data('price'));
    shoppingCart.addItemToCart(id, name,img, price, 1);
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
    var cartArray = shoppingCart.listCart();
    var output = "";
    for(var i in cartArray) {
        output += "<tr class='text-center'>"
        + "<td><img src='./assets/img/" + cartArray[i].img + "' style='width:100px'></td>" 
        + "<td class='text name-title'>" + cartArray[i].name + "</td>" 
        + "<td class='text'>" + cartArray[i].price + " ₫</td>"
        + "<td class='text-btn-count'><button class='minus-item cart-count input-group-addon btn btn-outline-success' data-id='" + cartArray[i].id + "' data-name=" + cartArray[i].name + ">-</button>"
        +""
        + "<button class='btn cart-count'>" +cartArray[i].count+"</button>" 
        + "<button class='plus-item cart-count btn btn-success input-group-addon' data-id='" + cartArray[i].id + "' data-name=" + cartArray[i].name + ">+</button>"
        + "</td>"
        + "<td class='text'>" + cartArray[i].total+ " ₫</td>"   
        + "<td class='text-btn'><button class='delete-item btn btn-outline-danger' data-id='" + cartArray[i].id + "' data-name=" + cartArray[i].name + ">X</button></td>"
        +  "</tr>";
    }
    $('.show-cart-1').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
}
$('.show-cart-1').on("click", ".delete-item", function(event) {
    var id = $(this).data('id')
    shoppingCart.removeItemFromCartAll(id);
    displayCart();
});

// -1
$('.show-cart-1').on("click", ".minus-item", function(event) {
    var id = $(this).data('id')
    shoppingCart.removeItemFromCart(id);
    displayCart();
});

// +1
$('.show-cart-1').on("click", ".plus-item", function(event) {
    var id = $(this).data('id')
    shoppingCart.addItemToCart(id);
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
function xacnhan(){
    add_don();
    $(".thongtins").css("display","none");
    $("#xacnhandathang").css("display","block")
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

    var check = signupArr;
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