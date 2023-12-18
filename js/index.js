//side menu
var li_elements = document.querySelectorAll(".slideM ul li");
var item_elements = document.querySelectorAll(".itemM");

window.onload = function(){
    item_elements.forEach(function (item) {
        item.style.display = "none";
    });
    document.querySelector(".apresentacao").style.display = "block";
}

for (var i = 0; i < li_elements.length; i++) {
    
    li_elements[i].addEventListener("click", function () {
        li_elements.forEach(function (li) {
            li.classList.remove("activeM");
        });
        this.classList.add("activeM");
        var li_value = this.getAttribute("data-li");
        item_elements.forEach(function (item) {
            item.style.display = "none";
        });
        if (li_value == "apresentacao") {
            document.querySelector("." + li_value).style.display = "block";
        } else if (li_value == "tema1") {
            document.querySelector("." + li_value).style.display = "block";
        } else if (li_value == "tema2") {
            document.querySelector("." + li_value).style.display = "block";
        } else if (li_value == "tema3") {
            document.querySelector("." + li_value).style.display = "block";
        } else if (li_value == "tema4") {
            document.querySelector("." + li_value).style.display = "block";
        } else if (li_value == "tema5") {
            document.querySelector("." + li_value).style.display = "block";
        } else if (li_value == "tema6") {
            document.querySelector("." + li_value).style.display = "block";
        }
        else if (li_value == "rotacao") {
            document.querySelector("." + li_value).style.display = "block";
        } else {
            console.log("");
        }
    });
}