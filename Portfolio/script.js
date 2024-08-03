var tablinks=document.getElementsByClassName('tab-links');
var tabcontent=document.getElementsByClassName('tab-contents');

function opentab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active-links");
    }
    for(let tabcontents of tabcontent){
        tabcontents.classList.remove("active-tab");
    }
    event.currentTarget.classList.add('active-links');
    document.getElementById(tabname).classList.add('active-tab');
}
var sidemeu=document.getElementById("sidemenu");
function openmenu(){
    sidemeu.style.right="-120px";
}
function closemenu(){
    sidemeu.style.right="-300px";
}