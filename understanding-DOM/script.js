let htmlCollection = document.getElementsByTagName("*");
let arr = Array.from(htmlCollection);

arr.forEach(function (element) {
  window.console.log(element);
})