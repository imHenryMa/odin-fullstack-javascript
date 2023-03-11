import _ from 'lodash';
import './style.css';
import imageURL from './image.jpg';
import printFunction from './print.js';

 function component() {
   const element = document.createElement('div');
   const btn = document.createElement('button');

   // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   element.classList.add('hello');

   btn.textContent = 'Click me and check the console!';
   btn.addEventListener('click',()=>{printFunction()});
   element.appendChild(btn);

   //Add the image to the div
   const myImage = new Image();
   myImage.src = imageURL;
   element.appendChild(myImage);

   return element;
 }

 document.body.appendChild(component());