var productMan = [], productWoman = [], productHandbag = [], productPerfume = [], productHat = [], productShoe = [], product = [], product = [];

productMan = JSON.parse(localStorage.getItem('manProduct'));
productWoman = JSON.parse(localStorage.getItem('femaleProduct'));
productHandbag = JSON.parse(localStorage.getItem('handBag'));
productPerfume = JSON.parse(localStorage.getItem('perfume'));
productHat = JSON.parse(localStorage.getItem('hatProduct'));
productShoe = JSON.parse(localStorage.getItem('shoeProduct'));

product = productMan.concat(productWoman, productHandbag, productPerfume, productHat, productShoe); 

localStorage.setItem('listProduct', JSON.stringify(product));

var listLocalHandbag = function() {
    var listHandbag = "";
    for(var i in productHandbag) {
        var data = JSON.parse(JSON.stringify(productHandbag[i]));
        var listHandbag = '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 sanPham mb-4">';
        listHandbag += '<div class="nd-sp">';
        listHandbag += '<a href="#" class="proo" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" data-price-sale="'+data.price_sale+'">';
        listHandbag += '<div class="img-sp mb-3">';
        listHandbag += '<img src="./assets/img/'+ data.img +'" alt="hinh-anh-san-pham">';
        listHandbag += '</div>';
        listHandbag += '<div class="info-sp text-center">';
        listHandbag += '<h5 class="name">'+ data.name +'</h5>';
        listHandbag += '<p class="price" style="color: #ffb41d;"><del>'+ data.price_sale +'</del></p>';
        listHandbag += '<p class="price-sale">'+ data.price +'</p>';
        listHandbag += '</div>';
        listHandbag += '</a>';
        listHandbag += '<button class="mt-2 mb-3 add-to-cart add-cart" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" data-price-sale="'+data.price_sale+'">Thêm vào giỏ hàng</button>';
        listHandbag += '</div>';
        listHandbag += '</div>';

        document.getElementById("productsHandbag").innerHTML += listHandbag;
    }
}
listLocalHandbag();

var listLocalPerfume = function() {
    var listPerfume = "";
    for(var i in productPerfume) {
        var data = JSON.parse(JSON.stringify(productPerfume[i]));
        var listPerfume = '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 sanPham mb-4">';
        listPerfume += '<div class="nd-sp">';
        listPerfume += '<a href="#" class="proo" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" data-price-sale="'+data.price_sale+'">';
        listPerfume += '<div class="img-sp mb-3">';
        listPerfume += '<img src="./assets/img/'+ data.img +'" alt="hinh-anh-san-pham">';
        listPerfume += '</div>';
        listPerfume += '<div class="info-sp text-center">';
        listPerfume += '<h5 class="name">'+ data.name +'</h5>';
        listPerfume += '<p class="price" style="color: #ffb41d;"><del>'+ data.price_sale +'</del></p>';
        listPerfume += '<p class="price-sale">'+ data.price +'</p>';
        listPerfume += '</div>';
        listPerfume += '</a>';
        listPerfume += '<button class="mt-2 mb-3 add-to-cart add-cart" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" data-price-sale="'+data.price_sale+'">Thêm vào giỏ hàng</button>';
        listPerfume += '</div>';
        listPerfume += '</div>';

        document.getElementById("productsPerfume").innerHTML += listPerfume;
    }
}
listLocalPerfume();

var listLocalHat = function() {
    var listHat = "";
    for(var i in productHat) {
        var data = JSON.parse(JSON.stringify(productHat[i]));
        var listHat = '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 sanPham mb-4">';
        listHat += '<div class="nd-sp">';
        listHat += '<a href="#" class="proo" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" data-price-sale="'+data.price_sale+'">';
        listHat += '<div class="img-sp mb-3">';
        listHat += '<img src="./assets/img/'+ data.img +'" alt="hinh-anh-san-pham">';
        listHat += '</div>';
        listHat += '<div class="info-sp text-center">';
        listHat += '<h5 class="name">'+ data.name +'</h5>';
        listHat += '<p class="price" style="color: #ffb41d;"><del>'+ data.price_sale +'</del></p>';
        listHat += '<p class="price-sale">'+ data.price +'</p>';
        listHat += '</div>';
        listHat += '</a>';
        listHat += '<button class="mt-2 mb-3 add-to-cart add-cart" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" data-price-sale="'+data.price_sale+'">Thêm vào giỏ hàng</button>';
        listHat += '</div>';
        listHat += '</div>';

        document.getElementById("productsHat").innerHTML += listHat;
    }
}
listLocalHat();

var listLocalShoe = function() {
    var listShoe = "";
    for(var i in productShoe) {
        var data = JSON.parse(JSON.stringify(productShoe[i]));
        var listShoe = '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 sanPham mb-4">';
        listShoe += '<div class="nd-sp">';
        listShoe += '<a href="#" class="proo" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" data-price-sale="'+data.price_sale+'">';
        listShoe += '<div class="img-sp mb-3">';
        listShoe += '<img src="./assets/img/'+ data.img +'" alt="hinh-anh-san-pham">';
        listShoe += '</div>';
        listShoe += '<div class="info-sp text-center">';
        listShoe += '<h5 class="name">'+ data.name +'</h5>';
        listShoe += '<p class="price" style="color: #ffb41d;"><del>'+ data.price_sale +'</del></p>';
        listShoe += '<p class="price-sale">'+ data.price +'</p>';
        listShoe += '</div>';
        listShoe += '</a>';
        listShoe += '<button class="mt-2 mb-3 add-to-cart add-cart" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" data-price-sale="'+data.price_sale+'">Thêm vào giỏ hàng</button>';
        listShoe += '</div>';
        listShoe += '</div>';

        document.getElementById("productsShoe").innerHTML += listShoe;
    }
}
listLocalShoe();
//Xoá dữ liệu trên localStorage
