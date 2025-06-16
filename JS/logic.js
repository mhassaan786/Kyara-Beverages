
// add more drinks
const slideShow = [
    {src: "./Assets/others/sl1.jpg", text: "Kiwi healthy Drink"},
    {src: "./Assets/others/sl2.jpg", text: "Chocolate Shake"},
    {src: "./Assets/others/sl3.jpg", text: "Cappaccinu"},
]
let statePics = 0;
const docs =  document.getElementsByClassName('slpics')[0]
// establishing slideshow
    docs.innerHTML = `
    <img src=${slideShow[statePics].src} alt="SlideShowPics">
    <p>${slideShow[statePics].text}</p> `
// console.log(slideShow.length)
function SlideShow(p) {
    if ( !(p<1 && statePics == 0) && !(p == 1 && statePics == slideShow.length-1)) {
    statePics += p;
    }
    else {
        console.log("Sorry it is not exitst")
    }
    docs.innerHTML = `
    <img src=${slideShow[statePics].src} alt="SlideShowPics">
    <p>${slideShow[statePics].text}</p> `
}