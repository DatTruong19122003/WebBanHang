
var productAdmin = function(){
    var listproduct ="";
    for (var i in product){
        var data = JSON.parse(JSON.stringify(product[i]))
        listproduct = '<tr>';
        listproduct +='<td>'+data.id+'</td>';
        listproduct +='<td>'+data.name+'</td>';
        listproduct +='<td><img src="../assets/img/'+data.img+'" alt="" style="width: 50px;"></td>';
        listproduct +='<td>'+data.price_sale+'</td>';
        listproduct +='<td>'+data.price+'</td>';
        listproduct +='<td><button onclick="updateProduct('
        +i+')" class="btn btn-outline-danger"  data-toggle="modal" data-target="#updateProduct"><i class="fas fa-cogs"></i></button>';
        listproduct +='<button onclick="deleteProduct('
        +i+')" class="btn ml-1 btn-outline-warning"><i class="fas fa-trash"></i></button></td>';
        listproduct +='</tr>';  

        document.getElementById("product-admin").innerHTML += listproduct;
    }

}

var addProduct = function(){
    var Product = {
        id :"SP"+parseInt( product.length+1),
        name : document.getElementById("name").value,
        img : document.getElementById("img").value,
        price_sale : document.getElementById("price-sale").value,
        price : document.getElementById("price").value
    }
    alert("Thêm sản phẩm thành công")
    product.push(Product);
    localStorage.setItem('femaleProduct',JSON.stringify(product));
    window.location.reload();
}
// localStorage.clear();

// Xóa sản phẩm 
var deleteProduct= function (i){
    product.splice(i, 1);
    localStorage.setItem('femaleProduct',JSON.stringify(product));
    window.location.reload();
}

// Sửa sản phẩm 
var updateProduct = function(i){
    var k = product[i];
    document.getElementById("idd").value = k.id;
    document.getElementById("named").value = k.name;
    document.getElementById("imgd").value = k.img;
    document.getElementById("price-saled").value = k.price_sale;
    document.getElementById("priced").value = k.price;
    document.getElementById("idd").setAttribute("disabled","disabled");
    document.getElementById("submitUpdate").innerHTML = '<button class="btn btn-outline-danger mt-3" onclick="submitUpdate('+i+')"> Đồng ý</button>'
}
var submitUpdate = function(i){
    var k = product[i];
    k.id= document.getElementById("idd").value;
    k.name= document.getElementById("named").value;
    k.img= document.getElementById("imgd").value;
    k.price_sale= document.getElementById("price-saled").value;
    k.price= document.getElementById("priced").value;
    localStorage.setItem('femaleProduct',JSON.stringify(product));
    window.location.reload();
}

productAdmin();


