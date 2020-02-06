import _ from 'lodash';
import './style.css';
import img1 from './img1.jpg';
import Data from './data.xml';

function component() {
    let element = document.createElement('div');

    element.innerHTML = _.join(['hello', 'webpack'], ' ');
    element.classList.add('hello');

    var myImg = new Image();
    myImg.src = img1;
    myImg.height = 200;
    element.appendChild(myImg);

    console.log(Data);

    return element;
}

document.body.appendChild(component());