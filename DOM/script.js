//DOM SELECTION
//getElementById => mengembalikan single node
const nodeH1 = document.getElementById("judul");
nodeH1.style.color = 'red';
nodeH1.style.backgroundColor = 'grey';
nodeH1.innerHTML = 'bootcamp dojobox';

//getElementsByTagName => mengembalikan HTML Collection
const paragraph = document.getElementsByTagName('p');
// paragraph[1].style.backgroundColor = '';
for(let i = 0;i < (paragraph.length - 1); i++){
    paragraph[i].style.backgroundColor = 'yellow';
}

const h1 = document.getElementsByTagName('h1');
h1[0].style.fontSize = '50px';

//document.query selector mengambil dr css
const p4 = document.querySelector('#b p');
p4.style.fontFamily = 'Arial';

//get section to be root
const sectionB = document.getElementById('b');
//call section to select tag p
const p = sectionB.querySelector('p');

//query selector All
const Pp = document.querySelectorAll('p');
Pp[2].innerHTML = 'ini dirubah dari javascript'

const p2 = document.getElementsByClassName('p2') // => berupa HTML Collection
p2[0].style.color = 'green';

const p3 = document.querySelector('#a p');