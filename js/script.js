// Ẩn hiện giỏ hàng
$(document).ready(function () {
    $('.header-content .card-header').mouseover(function () {
        $('.card-header-top-box').addClass('show');
        if ($('#cart-items tr').length == 0)
            $('.cartProducts').hide();
        else
            $('.cart-empty').hide();
    });
    $('.card-header').mouseout(function () {
        $('.card-header-top-box').removeClass('show');
    });
});

// Dropdown menu
$(document).on('click', '.dropdown-menu', function (e) {
    e.stopPropagation();
});
// make it as accordion for smaller screens
if ($(window).width() < 992) {
    $('.dropdown-menu a').click(function (e) {
        e.preventDefault();
        if ($(this).next('.submenu').length) {
            $(this).next('.submenu').toggle();
        }
        $('.dropdown').on('hide.bs.dropdown', function () {
            $(this).find('.submenu').hide();
        })
    });
}

// Phân trang sản phẩm //
var paginationHandler = function (a) {
    // store pagination container so we only select it once
    var $paginationContainer = $(".pagination-container-" + a + ""),
        $pagination = $paginationContainer.find('.pagination ul');
    // click event
    $pagination.find("li a").on('click.pageChange', function (e) {
        e.preventDefault();

        // get parent li's data-page attribute and current page
        var parentLiPage = $(this).parent('li').data("page"),
            currentPage = parseInt($(".pagination-container-" + a + " div[data-page]:visible").data('page')),
            numPages = $paginationContainer.find("div[data-page]").length;
        // make sure they aren't clicking the current page
        if (parseInt(parentLiPage) !== parseInt(currentPage)) {
            // hide the current page
            $paginationContainer.find("div[data-page]:visible").hide();

            if (parentLiPage === '+') {
                // next page
                if (!$pagination.find('li.active').next().hasClass('next'))
                    $pagination.find('li.active').removeClass('active').next().addClass('active');
                $paginationContainer.find("div[data-page=" + (currentPage + 1 > numPages ? numPages : currentPage + 1) + "]").show();
            } else if (parentLiPage === '-') {
                // previous page
                if (!$pagination.find('li.active').prev().hasClass('prev'))
                    $pagination.find('li.active').removeClass('active').prev().addClass('active');
                $paginationContainer.find("div[data-page=" + (currentPage - 1 < 1 ? 1 : currentPage - 1) + "]").show();
            } else {
                // specific page
                $pagination.find('li.active').removeClass('active');
                $(this).parent('li').addClass('active');
                $paginationContainer.find("div[data-page=" + parseInt(parentLiPage) + "]").show();
            }

        }
    });
};
$(document).ready(function () {
    paginationHandler("mot");
    paginationHandler("hai");
    paginationHandler("ba");
    // paginationHandler("ba");
    $('#page_control_mot, #page_control_hai, #page_control_ba').click(function () {
        var id = this.id;
        if (id == 'page_control_mot') {
            a = "mot";
            chuyenMau(a);
        }
        else if (id == 'page_control_hai')
            a = "hai";
        else
            a = "ba";
        paginationHandler(a);
    })
});

$(document).on('click', '.dropdown-menu', function (e) {
    e.stopPropagation();
});

// Popup //
$(document).ready(function () {
    $('.card').mouseover(function () {
        $(this).find('.pop-up').addClass('show-pop-up');
    });
    $('.card').mouseout(function () {
        $(this).find('.pop-up').removeClass('show-pop-up');
    });
});
//showform
// $(document).ready(function(){
//   $(".DK").click(function(){
//     $('.formDK').addClass('show-form');
//     $('.nenMo').addClass('hienMo');
//     $('body').addClass('blockScroll');

//   });
//   $('.close').click(function(){
//     $('.formDK').removeClass('show-form');
//     $('.nenMo').removeClass('hienMo');
//     $('body').removeClass('blockScroll');


//   });
// });
// $(document).ready(function(){
//   $(".DN").click(function(){
//     $('.formDN').addClass('show-form');
//     $('.nenMo').addClass('hienMo');
//     $('body').addClass('blockScroll');

//   });
//   $('.close').click(function(){
//     $('.formDN').removeClass('show-form');
//     $('.nenMo').removeClass('hienMo');
//     $('body').removeClass('blockScroll');
//   });
// });
// $(document).ready(function()
// {
//   $('.doiForm').click(function(){
//     $('.formDK').removeClass('show-form');
//     $('.formDN').addClass('show-form');
//   });

// });
// $(document).ready(function(){
//   $('.doiForm1').click(function(){
//     $('.formDN').removeClass('show-form');
//     $('.formDK').addClass('show-form');
//   });
// });
//kiemtraForm
// function validateForm(){

//     var u=document.getElementById("Fname").value;
//     var p=document.getElementById("Lname").value;
//     var q=document.getElementById("email").value;
//     var m=document.getElementById("phone").value;
//     var n=document.getElementById("pass").value;
//     if(u!=" " && p!="" && q!="" && m!="" && n!="")
//     {
//       alert("success");
//       return true;
//     }

//     alert("khong dc de trong!!");
//     return false;


// }
// function validateFormDN(){


//   var q=document.getElementById("email1").value;
//   var n=document.getElementById("pass1").value;
//   if( q!="" &&  n!="")
//   {
//     alert("success");
//     return true;
//   }alert("khong dc de trong!!");
//   return false;


// };

$(document).ready(function () {
    $('.chatIcon').onload(function () {
        $('.chat-boxx').addClass('show');
    });
    $('.chatIcon').click(function () {
        $('.chat-boxx').removeClass('show');
    });
});

$(document).ready(function () {
    $('.chatIcon').click(function () {
        $('.chatBox').toggleClass('active');
        $('.chat-boxx').removeClass('show');

        $('.conv-form-wrapper').convform({ selectInputStyle: 'disable' });
    });
});

window.onload = function () {
    do_validate();
};

function do_validate() {
    $('.chat-boxx').addClass('show');
}


// An menu dropdown, header, chatbox khi open form
$(document).ready(function () {
    // bat su kien dong modal form //
    $('#form1').on('hidden.bs.modal', function (e) {
        // Alert the user
        $('.chat-boxx').addClass('show');
        $('.chatIcon').show();
        $('#header-top').addClass('sticky');
    })
    $('#form2').on('hidden.bs.modal', function (e) {
        // Alert the user
        $('.chat-boxx').addClass('show');
        $('.chatIcon').show();
        $('#header-top').addClass('sticky');
    })
    $('.DN').click(function () {
        if ($('#form1').length) {
            $('.chat-boxx').removeClass('show');
            $('.chatIcon').hide();
            $('#header-top').removeClass('sticky');
        }
    })
    $('.DK').click(function () {
        if ($('#form2').length)
            $('.chat-boxx').removeClass('show');
        $('.chatIcon').hide();
        $('#header-top').removeClass('sticky');
    })
});

// back to top //
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body đến 0px 
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $('#back-to-top').tooltip('show');

});

// <!-- animate for chat  -->


$.fn.shakeit = function (obj) {
    var interval;
    set = $.extend({
        time: 2000,
        top: "10px",
        bottom: "3px",
        left: "10px",
        right: "5px"
    }, obj);

    var shake = function (element) {
        element.style.display = "block";
        var x = -1;
        interval = setInterval(function () {
            if (x == -1) {
                element.style.marginRight = set.right;
            } else {
                switch (x) {
                    case 0:
                        element.style.marginRight = "-" + set.left;
                        break;
                    case 1:
                        element.style.marginRight = "0px";
                        element.style.marginBottom = set.top;
                        break;
                    case 2:
                        element.style.marginBottom = "-" + set.bottom;
                        break;
                    default:
                        element.style.marginBottom = "0px";
                        clearInterval(interval);
                }
            }
            x++;
        }, 50);
    }

    return $(this).each(function (i, el) {
        shake(el);
        setInterval(function () {
            shake(el);
        }, set.time);
    });
}
$("#rung").shakeit();
var dem = 0;
$(document).ready(function () {
    $('#book').click(function () {
        $('.cesta-feira__num-items').addClass('show')
        dem++;

    });

});
// Thu gon - Xem chi tiet
$(document).ready(function () {
    $(".readmore").click(function () {
        $(".more").slideToggle(1000);;
        if ($(this).text() == 'Xem Chi Tiết') {
            $(this).text('Thu Gọn');
        } else {
            $(this).text('Xem Chi Tiết');
        }
    });
});

// Gio hang //
function initListaOrcamento() {
    /*alert("Them");*/
    var products = $.CestaFeira({
        debug: true
    }).getItems(),
        totalValueTemp = 0,
        $cartItems = $('#cart-items');


    if (!products) {
        console.log("No items in cart!");
        //return 0; // ko co sp
    }
    //return 1; có sp
    function updateTotalValue() {
        /*alert("Update");*/ //
        var totalValue = 0;

        $.each($('[data-item-total-value]'), function (index, item) {
            totalValue += $(item).data('item-total-value');
        });

        $('#total-value').html(parseFloat(totalValue).toLocaleString() + "đ");
    }

    function mountLayout(index, data) {

        var totalValueTemp = parseFloat(data.unity_price) * parseInt(data.quantity);

        var $layout = "<table border='0' style='border-bottom: 1px solid #C4C4C4' id='product-" + index + "'><tr style='font-size:14px'><td rowspan='3'>" + "<div class='media'>" +
            "<img class='d-flex align-self-center img-fluid mt-4' src='../../img/SP-Detail/info-product-" + index + ".png' style='width:130px'>" + "</div>" + "</td>" + "<td>" + "<div class='media-body'>" + "<a href='javascript:;' style='float:right; font-size: 10px;' class='btn btn-danger' data-cesta-feira-delete-item='" + index + "'>X<span class='sr-only'>Remove</span></a>" + "</div>" +
            "<h6 style='margin-top: 40px; margin-bottom: 0px'>" + data.product_name + "</h6>" +
            "</div>" +
            "</td></tr>" + "<tr style='font-size:14px; border-bottom: 1px solid #C4C4C4'><td >" + "<table border='0'>" + "<tr>" + "<td style='border-top:none; width:80px; text-align:center'><span style='background:#fafafa; width:32px; height:25px; display: block; margin-top:-20px; padding-top:2px; border: solid 1px #898686'>" + data.quantity + "</span></td>" + "<td style='border-top:none; width: 70%;' data-item-total-value='" + totalValueTemp + "'><strong style='display:block; margin-top:-20px'>" +
            parseFloat(totalValueTemp).toLocaleString().fontsize('3px') + "đ</strong></td>" + "</tr>" + "</table>" +
            "</td></tr></table>";

        $cartItems.append($layout);
    }


    $.each(products, function (index, value) {
        mountLayout(index, value);
    });

    updateTotalValue();

    $(document).on('click', 'a[data-cesta-feira-delete-item]', function (e) {
        e.preventDefault();
        //alert("Xoa Mot");// Xoa tung sp
        var productId = $(this).data('cesta-feira-delete-item');
        if ($(document).on('cesta-feira-item-deleted')) {
            $('#product-' + productId).fadeOut(500, function () {
                $(this).remove();
                updateTotalValue();

                if ($('#cart-items tr').length == 0) // bat su kien het san pham
                {
                    $('.cartProducts').hide();
                    $('.cart-empty').show();
                }
            });
        }
    });

    $(document).on('cesta-feira-clear-basket', function (e) {
        // alert("Xoa ALL");//
        $('#cart-items tr').each(function (index, value) {
            $(value).fadeOut(500, function () {
                $(this).remove();
                updateTotalValue();
                $('.cart-empty').show(); // 
            });
        });
    });

}

$(document).ready(function () {
    var loc = window.location.href;
    if (loc.indexOf('cart.html') == -1 && loc.indexOf('thanhToan.html') == -1) // ko load 2 trang cart va thanh toan
        initListaOrcamento();
    $('.btnAdd').click(function (event) {
        /* Act on the event */
        /*$(".sp").load('SanPham.html');*/

        initListaOrcamento();
        location.reload();
    });

});

// sticky menu //
$(document).ready(function () {
    window.onscroll = function () { myFunction() };

    var header = document.getElementById("header-top");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
});
// Animation cho menu hambugers //
$(document).ready(function () {
    var forEach = function (t, o, r) { if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t); else for (var e = 0, l = t.length; l > e; e++)o.call(r, t[e], e, t) };

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
        forEach(hamburgers, function (hamburger) {
            hamburger.addEventListener("click", function () {
                this.classList.toggle("is-active");
            }, false);
        });
    }
});

// xem tat ca //
$(document).ready(function () {
    var pageItem = $(".pagination li").not(".prev,.next");
    var prev = $(".pagination li.prev");
    var next = $(".pagination li.next");

    pageItem.click(function () {
        pageItem.removeClass("active");
        $(this).not(".prev,.next").addClass("active");
        
    });
    next.click(function () {
        $('li.active').removeClass('active').next().addClass('active');
        target = $('li.active a').attr('href');
        location.href = target;
    });

    prev.click(function () {
        if (!$('li.active').prev().hasClass('prev')){
            $('li.active').removeClass('active').prev().addClass('active');
            target = $('li.active a').attr('href');
            location.href = target;
        }
    });
});