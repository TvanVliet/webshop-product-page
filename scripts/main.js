var images = document.getElementById("thumbnail-id")
    .getElementsByTagName("img");

for (let i = 0; i < images.length; i++) {
    images[i].onmouseover = function () {
        this.style.cursor = 'hand';
    }
    images[i].onmouseout = function () {
        this.style.cursor = 'pointer';
    }
}

function changeImageOnClick(event) {
    event = event || window.event;
    var targetElement = event.target || event.srcElement;

    if (targetElement.tagName == "IMG") {
        mainproductimage.src = targetElement.getAttribute("src");
    }
}