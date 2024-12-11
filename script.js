// Navbar responsive
function navbar(){
    var check = document.getElementById("menu-resp");
    if (check.style.display === "block") {
        check.style.display = "none";
    } else {
        check.style.display = "block";
    }
}

// menu 
var indicator = document.querySelector('.nav-indicator');
var items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
    items.forEach(function (item) {
        item.classList.remove('is-active');
        item.removeAttribute('style');
    });
    indicator.style.width = "".concat(el.offsetWidth, "px");
    indicator.style.left = "".concat(el.offsetLeft, "px");
    indicator.style.backgroundColor = el.getAttribute('active-color');
    el.classList.add('is-active');
    el.style.color = el.getAttribute('active-color');
}

items.forEach(function (item, index) {
    item.addEventListener('click', function (e) {
        handleIndicator(e.target);
    });
    item.classList.contains('is-active') && handleIndicator(item);
});


// body

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:5,
        nav:true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    })
});