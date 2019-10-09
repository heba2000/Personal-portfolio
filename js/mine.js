//LOADING SCREEN SPINNER
$('document').ready(function(){
  $('#loading').fadeOut(4000, function(){
    $('body').css("overflow","auto");    
}) ;   
});

//SCROLL TO TOP BUTTON
$(window).scroll(function(){    
let scrollTop = $(window).scrollTop();    
if(scrollTop > 600){
$('#btnUp').fadeIn(300);    
}   
 else
 {
 $('#btnUp').fadeOut(300);    
 }    
})

$('#btnUp').click(function(){
$('body,html').animate({scrollTop:0}, 1000)    
});


$(".down-icon").click(function(){
 let nextSection = $('#About-Us').offset().top;
$('body,html').animate({scrollTop:nextSection},500)    
})


//NAV SCROLL TO EACH SECTION
$('.navigation-bar a').click(function(){
let Hrefs = $(this).attr('href');
let HrefsOffset=$(Hrefs).offset().top;
 $('body,html').animate({scrollTop:HrefsOffset}, 1000)       
})

//HOME-CONTENT AOUTO WRITE TEXT
 var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };


//Navbar//
var navItems= document.querySelectorAll('.overlay-content a');
for(var i=0; i<navItems.length; i++)
{
    navItems[i].addEventListener('click',function(){
    document.getElementById("myNav").style.height = "0%";
    })
}
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
//NAVBArR CHANGE ON SCROLL//
   $(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

  });
       
  
});
        
//NUMBERS COUNTER//
 var num1=document.getElementById('num-1');
var myTime=setInterval(function(){
if (parseInt(num1.textContent) >= 375){
clearInterval(myTtime);    
}    
 else {
    num1.textContent=parseInt(num1.textContent)+2;  
 }   
},30); 

var num2=document.getElementById('num-2');
var myTime=setInterval(function(){
if (parseInt(num2.textContent) >= 375){
clearInterval(myTtime);    
}    
 else {
    num2.textContent=parseInt(num2.textContent)+2;  
 }   
},30); 


var num3=document.getElementById('num-3');
var myTime=setInterval(function(){
if (parseInt(num3.textContent) >= 550){
clearInterval(myTtime);    
}    
 else {
    num3.textContent=parseInt(num3.textContent)+3;  
 }   
},40);

var num4=document.getElementById('num-4');
var myTime=setInterval(function(){
if (parseInt(num4.textContent) >= 450){
clearInterval(myTtime);    
}    
 else {
    num4.textContent=parseInt(num4.textContent)+3;  
 }   
},40); 
