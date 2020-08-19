//const myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';
//document.querySelector('html').onclick = function() {
//    alert('ouch! Stop Poking me!');
//}
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/images.png') {
        myImage.setAttribute('src', 'images/images2.png');
    } else {
        myImage.setAttribute('src', 'images/images.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Cloud Security Assessment 1 for ' + myName;
    }
    
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Cloud Security Assessment 1 for ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}