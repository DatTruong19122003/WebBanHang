var signinArr = localStorage.getItem('signIn') ? JSON.parse(localStorage.getItem('signIn')) : [];
var user =
    [
        {
            id: "USER1",
            username: "admin",
            name: "Hồ Xuân Trung Hiệp",
            sdt: "0903358775",
            email: "hotrunghiep@gmail.com",
            address: "An Giang",
            avatar: "avtHiep.jpg",
            password: "abc123",
            role: "admin"

        },
        {
            id: "USER2",
            username: "hiep123",
            name: "Hồ Xuân Trung Hiệp",
            sdt: "0903358775",
            email: "hotrunghiep@gmail.com",
            address: "An Giang",
            avatar: "avtHiep.jpg",
            password: "abc123",
            role: "user"

        },
        {
            id: "USER3",
            username: "huyen123",
            name: "Ngô Thị Mỹ Huyền",
            sdt: "0788259168",
            email: "ntmhuyenn2007@gmail.com",
            address: "TP.Hồ Chí Minh",
            avatar: "avtHuyen.jpg",
            password: "abc123",
            role: "user"

        },
        {
            id: "USER4",
            username: "huy123",
            name: "Phan Đình Huy",
            sdt: "0399187817",
            email: "phandinhhuy71@gmail.com",
            address: "Phú Yên",
            avatar: "avtHuy.jpg",
            password: "abc123",
            role: "user"

        },
        {
            id: "USER5",
            username: "tho123",
            name: "Dương Trường Thọ",
            sdt: "0344118180",
            email: "tho49828@gmail.com",
            address: "Gia Lai",
            avatar: "avtTho.jpg",
            password: "abc123",
            role: "user"

        },
        {
            id: "USER6",
            username: "hoang123",
            name: "Nguyễn Huy Hoàng",
            sdt: "0982970419",
            email: "nguyenhuyhoang123@gmail.com",
            address: "Đắk Lắk",
            avatar: "avtHoang.jpg",
            password: "abc123",
            role: "user"

        },
        {
            id: "USER7",
            username: "duyen123",
            name: "Võ Lê Hồng Duyên",
            sdt: "0867921734",
            email: "hongduyen123@gmail.com",
            address: "Vĩnh Long",
            avatar: "avtDuyen.jpg",
            password: "abc123",
            role: "user"
        },
        {
            id: "USER8",
            username: "sang123",
            name: "Biện Phước Sang",
            sdt: "0869001564",
            email: "phuocsang123@gmail.com",
            address: "TP HCM",
            avatar: "avtSang.jpg",
            password: "abc123",
            role: "user"
        },
    ];

// đẩy mảng user vào local
var saveUser = function () {
    localStorage.setItem('listUser', JSON.stringify(user))
}
//lấy list user 
var loadUser = function () {
    user = JSON.parse(localStorage.getItem('listUser'))
}
if (localStorage.getItem("listUser") != null) {
    loadUser();
}
saveUser();

// Xoá dữ liệu trên localStorage
//localStorage.clear();

// chức năng đăng kí
var checkSignUp = function () {
    if ((document.getElementById("hotend").value == "")) {
        $(".require-name").css("display", "block");
    } else {
        $(".require-name").css("display", "none");
    }
    if ((document.getElementById("usernamed").value == "")) {
        $(".require-username").css("display", "block");
    } else {
        $(".require-username").css("display", "none");
    }
    if ((document.getElementById("passwordd").value == "")) {
        $(".require-password").css("display", "block");
    } else {
        $(".require-password").css("display", "none");
    }
    if ((document.getElementById("pass").value == 0)) {
        $(".require-pass").css("display", "block");
    }
    else {
        $(".require-pass").css("display", "none");
    }
    if ((document.getElementById("sdtd").value == "")) {
        $(".require-sdt").css("display", "block");
    }
    else {
        $(".require-sdt").css("display", "none");
    }
    if ((document.getElementById("emaild").value == "")) {
        $(".require-email").css("display", "block");
    }
    else {
        $(".require-email").css("display", "none");
    }
    if ((document.getElementById("addressd").value == "")) {
        $(".require-address").css("display", "block");
    }
    else {
        $(".require-address").css("display", "none");
    }
    if ((document.getElementById("hotend").value != "")
        && (document.getElementById("usernamed").value != "")
        && (document.getElementById("passwordd").value != "")
        && (document.getElementById("pass").value != "")
        && (document.getElementById("sdtd").value != "")
        && (document.getElementById("emaild").value != "")
        && (document.getElementById("addressd").value != "")
    ) {
        signUp();
    }
}

var signUp = function () {
    var User = {
        id: "USER" + parseInt(user.length + 1),
        username: document.getElementById("usernamed").value,
        name: document.getElementById("hotend").value,
        sdt: document.getElementById("sdtd").value,
        password: document.getElementById("passwordd").value,
        email: document.getElementById("emaild").value,
        address: document.getElementById("addressd").value,
        avatar: "avt.png",
        role: "user",
    };
    user.push(User);
    localStorage.setItem('listUser', JSON.stringify(user));
    alert("Đăng ký thành công");
    window.location.href = './login.html'; // Chuyển hướng đến trang đăng nhập
};

// Xoá dữ liệu trên localStorage
//localStorage.clear();


var saveLogin = function () {
    localStorage.setItem('signIn', JSON.stringify(signinArr))
}

var loadLogin = function () {
    signinArr = JSON.parse(localStorage.getItem('signIn'))
}
if (localStorage.getItem("signIn") != null) {
    loadLogin();
}

saveLogin();

var signIn = function () {
    var k = -1;
    for (var i in user) {
        var data = JSON.parse(JSON.stringify(user[i]));

        // Đăng nhập với tài khoản admin
        if (
            document.getElementById("name").value == data.username &&
            document.getElementById("password").value == data.password &&
            data.role == "admin"
        ) {
            k = i;
            alert("Đăng nhập thành công với quyền admin");
            window.location.href = '../admin/admin.html'; // Chuyển hướng đến trang admin
            return;
        }

        // Đăng nhập với tài khoản user
        if (
            document.getElementById("name").value == data.username &&
            document.getElementById("password").value == data.password &&
            data.role == "user"
        ) {
            k = i;
            alert("Đăng nhập thành công với quyền người dùng");
            var userLogin = {
                username: data.username,
                password: data.password,
            };
            signinArr.push(userLogin);
            localStorage.setItem('signIn', JSON.stringify(signinArr));
            window.location.href = '../user/info.html'; // Chuyển hướng đến trang thông tin người dùng
            return;
        }
    }

    if (k == -1) {
        alert("Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin.");
    }
};

function getName() {
    if (document.getElementById("name") && document.getElementById("username") && document.getElementById("hoten") && document.getElementById("sdt") && document.getElementById("email") && document.getElementById("diachi") && document.getElementById("doimk") && document.getElementById("update")) {
        for (var i in user) {
            if (String(user[i].username) == String(signinArr[0].username)) {
                document.getElementById("matkhau").innerHTML = '<button class="btn btn-outline-danger" onclick="changePassword(' + i + ')">Đổi</buttoon>';
                document.getElementById("avt").innerHTML = '<img src="../assets/img/' + user[i].avatar + '" alt="avatar">';
                document.getElementById("name").innerHTML = user[i].name;
                document.getElementById("username").value = user[i].username;
                document.getElementById("hoten").value = user[i].name;
                document.getElementById("sdt").value = user[i].sdt;
                document.getElementById("email").value = user[i].email;
                document.getElementById("diachi").value = user[i].address;
                document.getElementById("update").innerHTML = '<button type="submit" class="mt-3 btn btn-outline-danger" onclick="updateInfo(' + i + ')">Cập nhật thông tin</button>';
            }
        }
        document.getElementById("doimk").innerHTML = '<button class="mt-3 btn btn-outline-danger"  type="button" data-toggle="modal" data-target="#changePassword">Đổi password</button>';

        document.getElementById("username").setAttribute("disabled", "disabled");
    }

}
getName();

function updateInfo(i) {
    alert("Cập nhật thành công");
    var h = user[i];

    h.name = document.getElementById("hoten").value,
        h.sdt = document.getElementById("sdt").value,
        h.email = document.getElementById("email").value,
        h.address = document.getElementById("diachi").value,

        localStorage.setItem('listUser', JSON.stringify(user));
    window.location.reload();

}

// Thay đổi mật khẩu
function changePassword(i) {
    var k = user[i];

    if (document.getElementById("oldpass").value != k.password) {
        alert("mật khẩu cũ không đúng");
    } else {
        if ((document.getElementById("newpass").value == document.getElementById("changepass").value)) {
            alert("đổi mật khẩu thành công");

            k.password = document.getElementById("newpass").value,
                localStorage.setItem('listUser', JSON.stringify(user));
            window.location.reload();
        }
        if (document.getElementById("newpass").value != document.getElementById("changepass").value) {
            alert("nhập lại mật khẩu không đúng");
        }
    }
}


function checkLogin() {
    if (signinArr.length > 0 && localStorage.getItem('signIn')) {
        window.location.href = './user/info.html';
    } else {
        window.location.href = './user/login.html';
    }
}
document.addEventListener("DOMContentLoaded", checkLoginStatus);

function checkLoginStatus() {
    console.log("checkLoginStatus");
    // Lấy thông tin từ localStorage
    const signInArr = JSON.parse(localStorage.getItem("signIn")) || [];
    const loginElement = document.querySelector("#login_url"); // Phần tử link đăng nhập/đăng ký
    if (signInArr.length > 0) {
        // Nếu đã đăng nhập, hiển thị thông tin người dùng
        loginElement.href = "./user/info.html"; // Đường dẫn tới trang thông tin cá nhân
        loginElement.innerHTML = "<i class='bi bi-person-circle me-2'></i>Thông tin cá nhân";
    } else {
        // Nếu chưa đăng nhập, hiển thị Đăng nhập / Đăng ký
        loginElement.href = "login.html"; // Đường dẫn tới trang đăng nhập
        loginElement.innerHTML = "<a href='#' onclick='checkLogin()'><i class='bi bi-person-circle'></i><span id='titl-log'>Đăng nhập / Đăng ký</span></a>";
    }
}
// Hàm đăng xuất
function logOut() {
    signinArr = [];
    localStorage.setItem('signup', JSON.stringify(signinArr));
    window.location.href = '../Index.html';
}
