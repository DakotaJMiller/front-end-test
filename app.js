// Change drop down and search info
function changePlaceHolder(){
    var sel = document.getElementById("items");
    var text = document.getElementById('search')
    var index = sel.selectedIndex;
    
     
    
    if(index == 0){
        $('#search').attr("placeholder", "Search in portfolio");
        $('#portimg').append($("<i class='fa fa-briefcase'></i>"))     
    }
    if(index == 1){
        $('#search').attr("placeholder", "Search in blog")
        $('#blogimg').append($("<i class='fa fa-bullhorn'></i>"))   
    }
//When portfolio is selected display briefcase 
    
    if(index == 0){
        $('#blogimg').hide();
        $('#portimg').show();
        $('#blogimg').empty();
    }
//When blog is selected display horn
    if(index == 1){
        $('#portimg').hide()
        $('#blogimg').show()
        $('#portimg').empty();
    }
}


// Hiding all sub nav at start up

$("#aboutinfo").hide()
$("#portinfo").hide()
$("#bloginfo").hide()
$("#contactinfo").hide()

/*Jquery for showing and hiding sub nav*/

$("#home").on('click', function(){
    $('#homeinfo').show();
    $("#aboutinfo,#portinfo,#bloginfo,#contactinfo").hide();
})

$("#about").on('click', function(){
    $('#aboutinfo').show();
    $("#homeinfo,#portinfo,#bloginfo,#contactinfo").hide();
})

$("#portfolio").on('click', function(){
    $('#portinfo').show();
    $("#homeinfo,#aboutinfo,#bloginfo,#contactinfo").hide();
})

$("#blog").on('click', function(){
    $('#bloginfo').show();
    $("#homeinfo,#portinfo,#aboutinfo,#contactinfo").hide();
})

$("#contact").on('click', function(){
    $('#contactinfo').show();
    $("#homeinfo,#portinfo,#aboutinfo,#bloginfo").hide();
})



// Main silder js

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
    if (n > slides.length){
        slideIndex = 1
    }
    if (n < 1){
        slideIndex = slides.length
    }
    for (var i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
     }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//Carousel for 3 column items js

jQuery(document).ready(function() {
        
	jQuery('.carousel[data-type="multi"] .item').each(function(){
		var next = jQuery(this).next();
		if (!next.length) {
			next = jQuery(this).siblings(':first');
		}
		next.children(':first-child').clone().appendTo(jQuery(this));
	  
		for (var i=0;i<1;i++) {
			next=next.next();
			if (!next.length) {
				next = jQuery(this).siblings(':first');
			}
			next.children(':first-child').clone().appendTo($(this));
		}
	});
        
});


// GOOGLE MAPS JS

var myCenter=new google.maps.LatLng(38.8976763,-77.0365298);
var marker;

function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:17,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter
  });

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);