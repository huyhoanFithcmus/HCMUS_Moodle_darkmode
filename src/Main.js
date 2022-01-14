// function changes the primary and aspasragus color
document.documentElement.style.setProperty('--color_primary', 'orange');
document.documentElement.style.setProperty('--asparagus', '#2e5185');

// change the h1, h2, h3, h4, h5 color
var h1Elements = document.getElementsByTagName("h1");

for(var i = 0; i < h1Elements.length; i++) {
   h1Elements[i].style.color = "orange";
}
var categoryDeco =document.getElementsByClassName("categoryname");
for(var i = 0; i < categoryDeco.length; i++) {
    var temp=  categoryDeco[i].getElementsByTagName("a");
    for (var j=0;j<temp.length;j++){
        temp[j].style.color = "#ffffff";
    }
 }
var h1Elements = document.getElementsByTagName("h2");

for(var i = 0; i < h1Elements.length; i++) {
   h1Elements[i].style.color = "orange";
}

var h1Elements = document.getElementsByTagName("h3");

for(var i = 0; i < h1Elements.length; i++) {
   h1Elements[i].style.color = "orange";
}

var h1Elements = document.getElementsByTagName("h4");

for(var i = 0; i < h1Elements.length; i++) {
   h1Elements[i].style.color = "orange";
}

var h1Elements = document.getElementsByTagName("h5");

for(var i = 0; i < h1Elements.length; i++) {
   h1Elements[i].style.color = "orange";
}

// color of the active navbar item
function reset() {
	var elements = document.getElementsByClassName('active'); // get all elements
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "#2e5185";
	}
}

reset();

// header of navbar color
var header_color = document.getElementById('header');

header_color.style.setProperty("background", "#dee2e6", "important")

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
    btn_succeed[i].style.color = "rgb(140 250 199)";
}

var btn_primary = document.getElementsByClassName('coursebox');

for(var i = 0; i < btn_primary.length; i++) {
    btn_primary[i].style.backgroundColor = "#212529";
}

document.body.style.backgroundColor = "black";
document.body.style.color = "#eee";
var btn_primary = document.getElementsByClassName('btn btn-secondary btn-block');

for(var i = 0; i < btn_primary.length; i++) {
    btn_primary[i].style.backgroundColor = "#eee";
}

var btn_primary = document.getElementsByClassName('section img-text');

for(var i = 0; i < btn_primary.length; i++) {
    btn_primary[i].style.backgroundColor = "#212529";
}
listgr = document.getElementsByClassName("list-group-item-action"); 
for(var i = 0; i < listgr.length; i++){
    listgr[i].style.backgroundColor = "#eee"
}
listgr = document.getElementsByClassName("media-body"); 
for(var i = 0; i < listgr.length; i++){
    listgr[i].style.color = "#212529"
}

listgr = document.getElementsByClassName("media-body font-weight-bold"); 
for(var i = 0; i < listgr.length; i++){
    listgr[i].style.color = "#212529"
}

var btn_primary = document.getElementsByClassName('footer-main foot-links');

for(var i = 0; i < btn_primary.length; i++) {
   var temp= btn_primary[i].getElementsByTagName("ul li a")
   for(var j=0 ; j<temp.length;j++)
   {
       temp[j].style.setProperty("color","#eee","important")
       
   }
   
}
listgr = document.getElementsByClassName("section border-0 card"); 
for(var i = 0; i < listgr.length; i++){
    listgr[i].style.setProperty("background-color","#e9ecef","important") 
}
listgr = document.getElementsByClassName("section border-0 card expanded"); 
for(var i = 0; i < listgr.length; i++){
    listgr[i].style.setProperty("background-color","#e9ecef","important") 
}
var btn_succeed = document.getElementsByClassName('btn-outline-success');

for(var i = 0; i < btn_succeed.length; i++) {
    btn_succeed[i].style.color = "#2e5185";
}
var btn_succeed = document.getElementsByTagName('button');

for(var i = 0; i < btn_succeed.length; i++) {
    var temp =btn_succeed[i].getElementsByClassName("btn-outline-success");
    for (var j=0;j<temp.length;j++)
    {
        temp[j].style.color = "rgb(205 255 191)";
    }
}
var btnsucessA=document.getElementsByClassName("btn-outline-secondary");
for (var i=0;i<btnsucessA.length;i++)
{
    btnsucessA[i].style.color="#eee";
}
var btnsucessA=document.getElementsByClassName("m-0 text-truncate");
for (var i=0;i<btnsucessA.length;i++)
{
    btnsucessA[i].style.color="#212529";
}


// setInterval(
//     function () {
        
//       var randomColor = Math.floor(Math.random()*16777215).toString(16);
//       var btnsucessA=document.getElementsByClassName("calendar_event_course");
//       for (var i=0;i<btnsucessA.length;i++)
//     {
    
//     btnsucessA[i].style.setProperty("background-color","#"+randomColor,"important");
//     }
//     },1000);
var btnsucessA=document.getElementsByClassName("calendar_event_course");
      for (var i=0;i<btnsucessA.length;i++)
    {
    
    btnsucessA[i].style.setProperty("background-color","#212529","important");
    }