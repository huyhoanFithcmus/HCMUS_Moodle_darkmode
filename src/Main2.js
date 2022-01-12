// function changes the primary and aspasragus color
document.documentElement.style.setProperty('--color_primary', '#212529');
document.documentElement.style.setProperty('--asparagus', '#212529');
document.documentElement.style.setProperty('--mercury', 'black');
document.documentElement.style.setProperty('--white', '#212529');
document.documentElement.style.setProperty('--color_storm_dust_approx', '#ffffff');
document.documentElement.style.setProperty('--wild_sand','#212529');
document.body.style.backgroundColor = "black";
// change the h1, h2, h3, h4, h5 color
var h1Elements = document.getElementsByTagName("h1");

var navbarElement= document.getElementsByClassName("navbar-nav");
var pageElement=document.getElementById("page");


var headermain = document.getElementsByClassName("header-main");
for(var i=0;i<headermain.length;i++){
    headermain[i].style.setProperty("background","#eee","important")
    
      
}
var courseName=document.getElementsByClassName("coursename");
for(var i=0;i<courseName.length;i++){
     var temp= courseName[i].getElementsByTagName("a");
    for  (var j=0;j< temp.length;j++){
    temp[j].style.color="#ffffff";    
}
}






var FooterLink = document.getElementsByClassName("foot-links")
for(var i=0;i<FooterLink.length;i++){
    var line =FooterLink[i].getElementsByTagName("a");
    for (var j;j<line.length;j++)    {
        line[j].style.setProperty("color", "#ffffff", "important")
    }
      
}

var luoiDatTenqua=document.getElementsByClassName("card-text content calendarwrapper");

for(var i=0;i<luoiDatTenqua.length;i++){
    luoiDatTenqua[i].style.color="#ffffff";
    
      
}
var region=document.getElementById("region-main");
region.style.setProperty("background-color", "#212529", "important");



var cardRight=document.getElementsByClassName("mb-1")
for(var i=0;i<cardRight.length;i++){
    cardRight[i].style.color="#ffffff";
}

var card=document.getElementsByClassName("card")
for(var i=0;i<card.length;i++){
    card[i].style.setProperty("background-color", "#212529", "important")
}

var teacher=document.getElementsByTagName("li")
for(var i=0;i<teacher.length;i++){
    teacher[i].style.color = "#ffffff";
}

var categoryASElement= document.getElementsByClassName("d-inline")
for(var i=0;i<categoryASElement.length;i++){
    categoryASElement[i].style.setProperty("color", "#ffffff", "important")
}
var categoryElement= document.getElementsByClassName("categoryname")

for(var i=0;i<categoryElement.length;i++){
    var temp=    categoryElement[i].getElementsByTagName("a");
   for (var j=0;j<temp.length;j++){
       temp[j].style.color = "#ffffff";
   } 
}
var categoryElementDisplay= document.getElementsByClassName("category")

for(var i=0;i<categoryElementDisplay.length;i++){
    categoryElementDisplay[i].style.color = "#ffffff";
}
for(var i=0;i<navbarElement.length;i++){
    navbarElement[i].style.color = "rgba(0, 0, 0, 0.6)";
}
for(var i=0;i<pageElement.length;i++){
    pageElement[i].style.color = "#212529";
}


for(var i = 0; i < h1Elements.length; i++) {
   h1Elements[i].style.color = "#ffffff";
}

var h2Elements = document.getElementsByTagName("h2");

for(var i = 0; i < h2Elements.length; i++) {
   h2Elements[i].style.color = "#ffffff";
}

var h1Elements = document.getElementsByTagName("h3");

for(var i = 0; i < h1Elements.length; i++) {
   h1Elements[i].style.color = "#ffffff";
}

var h1Elements = document.getElementsByTagName("h4");

for(var i = 0; i < h1Elements.length; i++) {
   h1Elements[i].style.color = "#ffffff";
}

var h1Elements = document.getElementsByTagName("h5");

for(var i = 0; i < h1Elements.length; i++) {
   h1Elements[i].style.color = "#ffffff";
}
var h1Elements = document.getElementsByTagName("h6");

for(var i = 0; i < h1Elements.length; i++) {
   h1Elements[i].style.color = "#ffffff";
}
// color of the active navbar item
function reset() {
	var elements = document.getElementsByClassName('active'); // get all elements
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "#ffffff";
	}
}

reset();

// header of navbar color

// change the background of .btn-primary to #2e5185
var btn_primary = document.getElementsByClassName('btn-primary');

for(var i = 0; i < btn_primary.length; i++) {
    btn_primary[i].style.backgroundColor = "#2e5185";
}

// change the background of block
var footer_color = document.getElementsByClassName('footer-bottom');

for(var i = 0; i < footer_color.length; i++) {
    footer_color[i].style.backgroundColor = "#2e5185";
}

var footer_text = document.getElementsByTagName('p');

for(var i = 0; i < footer_text.length; i++) {
    footer_text[i].style.color = "#88b77b";
}

var btn_succeed = document.getElementsByClassName('btn-outline-success');

for(var i = 0; i < btn_succeed.length; i++) {
    btn_succeed[i].style.color = "#2e5185";
}

var grade_table = document.getElementsByClassName('header c0');
for(var i = 0; i < grade_table.length; i++) {
    grade_table[i].style.backgroundColor = "#2e5185";
}

var grade_tabl1 = document.getElementsByClassName('header c1');
for(var i = 0; i < grade_table1.length; i++) {
    grade_table1[i].style.backgroundColor = "#2e5185";
}