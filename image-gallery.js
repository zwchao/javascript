
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload !='function'){
        window.onload = func;
    }else {
        window.onload=function(){
            oldonload;
            func();
        }
    }
}

function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

function preparePlaceholder(){
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("gallery")) return false;
    var palceholder=document.createElement("img");
    palceholder.setAttribute("id","palceholder");
    palceholder.setAttribute("src","images/5.png");
    palceholder.setAttribute("alt","a pic");
    var description = document.createElement("p");
    description.setAttribute("id","description");
    var destext = document.createTextNode("Choose an image");
    description.appendChild(destext);
    var gallery = document.getElementById("gallery");
    insertAfter(placeholder,gallery);
    insertAfter(description,palceholder);
}
function prepareGallery(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("gallery")) return false;
    var gallery = document.getElementById("gallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick=function(){
            return showPic(this);
        }
    }
}
function showPic(whichpic){
    if(!document.getElementById("placeholder")) return true;
    var source = whichpic.getAttribute("href");
    var palceholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    if(!document.getElementById("description")) return false;
    if(whichpic.getAttribute("title")){
        var text = whichpic.getAttribute("title");
    }else{
        var text = "";
    }
    var description=document.getElementById("description");
    if (description.firstChild.nodeType==3) {
            description.firstChild.nodeValue = text;
        }

    return false;
}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
