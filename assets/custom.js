console.log("init..");

$(".add-cart-link.available").on('click', function(e) {
    $(e.target).parent().parent().parent().find(".trigger, .tick-container, .thumbnail-overlay").addClass("drawn");
    setTimeout(function(){
        $(e.target).parent().parent().parent().find(".trigger, .tick-container, .thumbnail-overlay").removeClass("drawn");
    }, 1800);
});


$(function(){ 
  $('#search-input').keyup(function(e) {
    if (e.key === 'Enter') {
    	var t = e.target.value || "*";
    	window.location.href = "https://www.alphaclothing.co/search?type=product&q=" + t;
    }
  });
  $('#search-icon').click(function(e) {
    	var t = $('#search-input').value || "*";
    	window.location.href = "https://www.alphaclothing.co/search?type=product&q=" + t;
  });
});

$(function() {
	FastClick.attach(document.body);
});