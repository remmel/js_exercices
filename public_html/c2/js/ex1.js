function generateColor() {

    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
}
function main() {
    var tabsElements = document.getElementsByTagName("td");
    for (element in tabsElements) {
        tabsElements[element].onclick = function() {
            this.style.backgroundColor = generateColor();
        }
    }
}