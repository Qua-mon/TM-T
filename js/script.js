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
// ẩn hiện submenu đối với màn hình nhỏ hơn
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
    var $paginationContainer = $(".pagination-container-" + a + ""),
        $pagination = $paginationContainer.find('.pagination ul');
    // sự kiện click
    $pagination.find("li a").on('click.pageChange', function (e) {
        e.preventDefault();

        // lấy thành phần cha của this có class là li và lấy trang hiện tại
        var parentLiPage = $(this).parent('li').data("page"),
            currentPage = parseInt($(".pagination-container-" + a + " div[data-page]:visible").data('page')),
            numPages = $paginationContainer.find("div[data-page]").length;
        // bẫy người dùng không click vào trang hiện tại 
        if (parseInt(parentLiPage) !== parseInt(currentPage)) {
            // ẩn trang hiện tại
            $paginationContainer.find("div[data-page]:visible").hide();

            if (parentLiPage === '+') {
                // chuyển trang tiếp theo
                if (!$pagination.find('li.active').next().hasClass('next'))
                    $pagination.find('li.active').removeClass('active').next().addClass('active');
                $paginationContainer.find("div[data-page=" + (currentPage + 1 > numPages ? numPages : currentPage + 1) + "]").show();
            } else if (parentLiPage === '-') {
                // chuyển trang trang trước
                if (!$pagination.find('li.active').prev().hasClass('prev'))
                    $pagination.find('li.active').removeClass('active').prev().addClass('active');
                $paginationContainer.find("div[data-page=" + (currentPage - 1 < 1 ? 1 : currentPage - 1) + "]").show();
            } else {
                // Lấy trang cụ thể mà người dùng click //
                $pagination.find('li.active').removeClass('active');
                $(this).parent('li').addClass('active');
                $paginationContainer.find("div[data-page=" + parseInt(parentLiPage) + "]").show();
            }
        }
    });
};
// sự kiện phân trang sản phẩm, có gọi hàm paginationHandler
$(document).ready(function () {
    paginationHandler("mot");
    paginationHandler("hai");
    paginationHandler("ba");
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
// Hiện chatbox // 
$(document).ready(function () {
    $('.chatIcon').onload(function () {
        $('.chat-boxx').addClass('show');
    });
    $('.chatIcon').click(function () {
        $('.chat-boxx').removeClass('show');
    });
});
// Ẩn chatbox //
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


// Ẩn hiện menu dropdown, header, chatbox khi open form đăng ký, đăng nhập hoặc đóng form đăng ký, đăng nhập
$(document).ready(function () {
    // Sự kiện khi đóng modal form //
    $('#form1').on('hidden.bs.modal', function (e) {
        $('.chat-boxx').addClass('show');
        $('.chatIcon').show();
        $('#header-top').addClass('sticky');
    })
    $('#form2').on('hidden.bs.modal', function (e) {
        $('.chat-boxx').addClass('show');
        $('.chatIcon').show();
        $('#header-top').addClass('sticky');
    })
    // Sự kiện khi mở modal form // 
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

// Nút back to top //
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

// Giỏ hàng //
function initListaOrcamento() {
    // kiểm tra sản phẩm có tồn tại trong giỏ hàng //
    var products = $.CestaFeira({
        debug: true
    }).getItems(),
        totalValueTemp = 0,
        $cartItems = $('#cart-items');

    // Giỏ hàng chưa có sản phẩm // 
    if (!products) {
        console.log("No items in cart!");
    }

    // cập nhật số lượng và giá tiền sản phẩm //
    function updateTotalValue() {
        var totalValue = 0;

        $.each($('[data-item-total-value]'), function (index, item) {
            totalValue += $(item).data('item-total-value');
        });

        $('#total-value').html(parseFloat(totalValue).toLocaleString() + "đ");
    }

    // in layout giỏ hàng //
    function mountLayout(index, data) {

        var totalValueTemp = parseFloat(data.unity_price) * parseInt(data.quantity);

        var t = '';
        // Nếu không phải là các trang như index, dịch vụ,, thanh toán,... thì thêm ../../ cho biến t
        var loc = window.location.href;
        if (loc.indexOf('index.html') == -1 && loc.indexOf('about.html') == -1 && loc.indexOf('dichVu1.html') == -1 && loc.indexOf('thongTinLienHe.html') == -1 &&
            loc.indexOf('dichvu2.html') == -1 && loc.indexOf('dichvu3.html') == -1 && loc.indexOf('ChinhSachDoiTra.html' == -1)
            && loc.indexOf('GioLamViec.html') == -1 && loc.indexOf('gopYKhieuNai.html') == -1 && loc.indexOf('PTThanhToan.html') == -1)
            t = '../../';

        var x = data.item_type;
        // định dạng cho layout // 
        var $layout = "<table border='0' style='border-bottom: 1px solid #C4C4C4' id='product-" + index + "'><tr style='font-size:14px'><td rowspan='3'>" + "<div class='media'>" +
            "<a class='imgSP' href='#'><img class='d-flex align-self-center img-fluid mt-4' src='" + t + "img/SP-Detail/HinhGioHang/" + x + "/info-product-" + index + ".jpg'></a>" + "</div>" + "</td>" + "<td>" + "<div class='media-body'>" + "<a href='javascript:;' style='float:right; font-size: 10px;' class='btn btn-danger' data-cesta-feira-delete-item='" + index + "'>X<span class='sr-only'>Remove</span></a>" + "</div>" +
            "<h6 style='margin-top: 40px; margin-bottom: 0px;'>" + data.product_name + "</h6>" +
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

    // su kien xoa 1 san pham //
    $(document).on('click', 'a[data-cesta-feira-delete-item]', function (e) {
        e.preventDefault();
        var productId = $(this).data('cesta-feira-delete-item');
        if ($(document).on('cesta-feira-item-deleted')) {
            $('#product-' + productId).fadeOut(500, function () {
                $(this).remove();
                updateTotalValue();
                if ($('#cart-items tr').length == 0) // Bắt sự kiện khi hết sản phẩm
                {
                    // ẩn khung danh sách sản phẩm và hiện khung giỏ hàng chưa có sản phẩm // 
                    $('.cartProducts').hide();
                    $('.cart-empty').show();
                }
            });
        }
    });
    // su kien xoa tat ca // 
    $(document).on('cesta-feira-clear-basket', function (e) {
        $('#cart-items tr').each(function (index, value) {
            $(value).fadeOut(500, function () {
                $(this).remove();
                updateTotalValue();
                $('.cart-empty').show();
            });
        });
    });

}

$(document).ready(function () {
    var loc = window.location.href;
    // không sử dụng code giỏ hàng ở trên cho 2 trang giohang.html và thanhtoan.html //
    if (loc.indexOf('gioHang.html') == -1 && loc.indexOf('thanhToan.html') == -1) 
        initListaOrcamento();
    // sự kiện khi người dùng thêm giỏ hàng // 
    $('.btnAdd').click(function (event) {
        initListaOrcamento();
        location.reload();
    });
    // sự kiện khi người dùng chọn button thanh toán // 
    $('.btnDatMua').click(function (event) {
        initListaOrcamento();
        location.href = "../../thanhToan.html"
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
// Lọc giá tăng dần và giảm dần cho trang xem tất cả // 
var flag = false;
$('#loc').on('change', function () {
    var selectVal = $("#loc option:selected").val();
    // Người dùng chọn tăng dần // 
    if (selectVal == "tangDan") {
        var sorted = $('.results-row').sort(function (a, b) {
            return (flag ==
                (convertToNumber($(a).find('.price').html()) <
                    convertToNumber($(b).find('.price').html()))) ? 1 : -1;
        });
        flag = flag ? false : true;
        for (var i in sorted) {
            if (i < 8)
                $('.t').append(sorted[i]);
            else if (i < sorted.length)
                $('.t2').append(sorted[i]);
        }
    }
    // Người dùng chọn giảm dần // 
    else {
        var sorted = $('.results-row').sort(function (a, b) {
            return (flag ==
                (convertToNumber($(a).find('.price').html()) >
                    convertToNumber($(b).find('.price').html()))) ? 1 : -1;
        });
        flag = flag ? false : true;
        for (var i in sorted) {
            if (i < 8)
                $('.t').append(sorted[i]);
            else if (i < sorted.length)
                $('.t2').append(sorted[i]);
        }
    }
    flag = false;
});
// Loại bỏ dấu . và chứ đ và convert sang biến float để tiến hành lọc giá // 
var convertToNumber = function (value) {
    for (var i = 0; i < value.length; i++)
        value = value.replace('.', '');
    return parseFloat(value.replace('đ', ''));
}