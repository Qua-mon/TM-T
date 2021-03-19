// Ẩn hiện giỏ hàng
$(document).ready(function () {
    $('.header-content .card-header').mouseover(function () { 
        $('.card-header-top-box').addClass('show');
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
    $('.dropdown-menu a').click(function(e){
      e.preventDefault();
        if($(this).next('.submenu').length){
          $(this).next('.submenu').toggle();
        }
        $('.dropdown').on('hide.bs.dropdown', function () {
       $(this).find('.submenu').hide();
    })
    });
  }

  // Phân trang sản phẩm //
  var paginationHandler = function(a){
    // store pagination container so we only select it once
    var $paginationContainer = $(".pagination-container-"+a+""),
        $pagination = $paginationContainer.find('.pagination ul');
    // click event
    $pagination.find("li a").on('click.pageChange',function(e){
        e.preventDefault();

        // get parent li's data-page attribute and current page
        var parentLiPage = $(this).parent('li').data("page"),
            currentPage = parseInt( $(".pagination-container-"+a+" div[data-page]:visible").data('page') ),
            numPages = $paginationContainer.find("div[data-page]").length;
        
        // make sure they aren't clicking the current page
        if ( parseInt(parentLiPage) !== parseInt(currentPage) ) {
            // hide the current page
            $paginationContainer.find("div[data-page]:visible").hide();

            if ( parentLiPage === '+' ) {
                // next page
                $paginationContainer.find("div[data-page="+( currentPage+1>numPages ? numPages : currentPage+1 )+"]").show();
            } else if ( parentLiPage === '-' ) {
                // previous page
                $paginationContainer.find("div[data-page="+( currentPage-1<1 ? 1 : currentPage-1 )+"]").show();
            } else {
                // specific page
                $paginationContainer.find("div[data-page="+parseInt(parentLiPage)+"]").show();
            }

        }
    });
};
$(document).ready(function () {
  paginationHandler("mot");
  paginationHandler("hai");
  paginationHandler("ba");
  // paginationHandler("ba");
  $('#page_control_mot, #page_control_hai, #page_control_ba').click(function(){
    var id = this.id;
    if(id == 'page_control_mot')
      a = "mot";
    else if(id == 'page_control_hai')
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
$(document).ready(function(){
  $(".DK").click(function(){
    $('.formDK').addClass('show-form');
    $('.nenMo').addClass('hienMo');
    $('body').addClass('blockScroll');
    
  });
  $('.close').click(function(){
    $('.formDK').removeClass('show-form');
    $('.nenMo').removeClass('hienMo');
    $('body').removeClass('blockScroll');
    

  });
});
$(document).ready(function(){
  $(".DN").click(function(){
    $('.formDN').addClass('show-form');
    $('.nenMo').addClass('hienMo');
    $('body').addClass('blockScroll');
    
  });
  $('.close').click(function(){
    $('.formDN').removeClass('show-form');
    $('.nenMo').removeClass('hienMo');
    $('body').removeClass('blockScroll');
  });
});
$(document).ready(function()
{
  $('.doiForm').click(function(){
    $('.formDK').removeClass('show-form');
    $('.formDN').addClass('show-form');
  });
  
});
$(document).ready(function(){
  $('.doiForm1').click(function(){
    $('.formDN').removeClass('show-form');
    $('.formDK').addClass('show-form');
  });
});
//kiemtraForm
function validateForm(){

    var u=document.getElementById("Fname").value;
    var p=document.getElementById("Lname").value;
    var q=document.getElementById("email").value;
    var m=document.getElementById("phone").value;
    var n=document.getElementById("pass").value;
    if(u!=" " && p!="" && q!="" && m!="" && n!="")
    {
      alert("success");
      return true;
    }
    
    alert("khong dc de trong!!");
    return false;
      
    
}
function validateFormDN(){

  
  var q=document.getElementById("email1").value;
  var n=document.getElementById("pass1").value;
  if( q!="" &&  n!="")
  {
    alert("success");
    return true;
  }alert("khong dc de trong!!");
  return false;
    
  
}






