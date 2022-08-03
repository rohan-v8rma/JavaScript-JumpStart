let htmlCollection = window.document.links;
let array = Array.from(htmlCollection);

array.forEach(function(element) {
    // This console logs the a (`anchor`) tag represented as an object in the DOM.
    console.log(element);

    //The element is converted to a string i.e., its url is stored in the variable `url` as a string.
    let url = element.toString();

    // This is the substring present in one of the hyperlinks
    let sub = "name";

    // We use the includes() method of strings to find whether the substring is present in the url
    if (url.includes(sub)) {
        console.log(url);
    }})