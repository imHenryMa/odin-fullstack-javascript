import _ from 'lodash';
import myName from './myName';

function component(){
    const element = document.createElement('div');
    const element2 = document.createElement('div');

    //Lodash now imported by this script
    element.innerHTML = _.join(['Hello','webpack'],' ');
    element2.textContent = myName('What');



    return [element, element2];
}

let stuff = component();
document.body.appendChild(stuff[0]);
document.body.appendChild(stuff[1]);