//EXAMINE DOCUMENT OBJECT

//console.dir(document);
//console.log(document.title);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all[10]);



//get element by ID
//console.log(document.getElementById('header-title'));
//var header = document.getElementById('header-title');
//header.innerText = 'Hello World';
//header.innerHTML = 'Hello world';
//header.style.backgroundColor = 'green';
//header.style.color = 'white';
//header.style.borderBottom = '5px solid white';



//get element by classname
//var items = document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent = 'hello';
//items[1].fontweight = 'bold';
//items[1].style.backgroundColor = 'blue';
//gives error
//items.style.backgroundColor = 'yellow';
//for (let i = 0; i < items.length; i++) {
    //items[i].style.backgroundColor = 'white';
    
//}



//Query selector

//var header = document.querySelector('#main-header');
//header.style.borderBottom = 'solid #ccc 4px';

//var inputsubmit = document.querySelector('input[type="submit"]');
//inputsubmit.value='hello world'


//var itemlist = document.querySelector('#items');
//Parent Node
//console.log(itemlist.parentNode);

//itemlist.parentNode.parentNode.style.backgroundColor = '#f4f4f4f4';
//console.log(itemlist.parentNode.parentNode);

//Children node
//console.log(itemlist.children);
//itemlist.children[2].style.backgroundColor = 'black';

//First child
//itemlist.firstElementChild.textContent = 'hello';

//Last child
//itemlist.lastElementChild.textContent = 'Byebye';


//Next sibbling
//console.log(itemlist.nextElementSibling);

//Previous sibbling
//console.log(itemlist.previousElementSibling);



//CREATE ELEMENT
//var newdiv = document.createElement('div');

//add class
//newdiv.classname = 'hello';
//add id
//newdiv.id = 'hello1';
//add str
//newdiv.setAttribute('title', 'hello div');
//create text node
//var newdivtext = document.createTextNode('hello world');
//add text to div
//newdiv.appendChild(newdivtext);

//var container = document.querySelector('header .container');
//var h1 = document.querySelector('header .h1');
//console.log(newdiv);
//container.insertBefore(newdiv, h1);



//Events
//var button = document.getElementById('button').addEventListener
//('click', buttonclick);

//function buttonclick(e){
 //document.getElementById('header-title').textContent = 'Changed';
  //document.querySelector('#main').style.backgroundColor = '#f4f4f4f4';  
  //console.log(e.target);
  //console.log(e.target.className);
  //console.log(e.target.id);
 
  var output = document.getElementById('output');
//output.innerHTML = '<h3>'+e.target.id+'</h3>';


//console.log(e.type);
//Position of the mouse from the window
//console.log(e.clientX);
//console.log(e.clientY);

//Position of the mouse from the actual element
//console.log(e.offsetX);
//console.log(e.offsetY);

//console.log(e.altKey);
//console.log(e.ctrlKey);
//console.log(e.shiftKey);


//}
var iteminput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');
let button =  document.getElementById('button');
let box =  document.getElementById('box');
//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent)
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup', runEvent);

//box.addEventListener('mouseenter', runEvent);
//box.addEventListener('mouseleave', runEvent);
//box.addEventListener('mouseover', runEvent);
//box.addEventListener('mouseout', runEvent);

box.addEventListener('mousemove', runEvent);
//iteminput.addEventListener('keydown', runEvent);
//iteminput.addEventListener('keyup', runEvent);
//iteminput.addEventListener('keypress', runEvent);

//iteminput.addEventListener('focus', runEvent);
//iteminput.addEventListener('blur', runEvent);

//iteminput.addEventListener('cut', runEvent);
//iteminput.addEventListener('paste', runEvent);

//iteminput.addEventListener('input', runEvent);

//select.addEventListener('change', runEvent);
//select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);
function runEvent(e){
    e.preventDefault();
     // console.log('EVENT TYPE: '+e.type); 

      // console.log(e.target.value);
      //document.body.style.display = 'none';
     // output.innerHTML = '<h3>'+e.target.value+'</h3>'
      //output.innerHTML = '<h3>MouseX: '+e.offsetX+'</h3><h3>MouseY: '+e.offsetY+'</h3>';
       document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
    }