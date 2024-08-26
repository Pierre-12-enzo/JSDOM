var form = document.getElementById('addForm');
var itemlist = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit

form.addEventListener('submit', addItem);


//delete event
itemlist.addEventListener('click', deleteItem);

//filter items
filter.addEventListener('keyup', filterItems);

//delete function
function deleteItem(e) {
    e.preventDefault();
  if(e.target.classList.contains('delete')){
   if(confirm('Are you sure?')){
    var li = e.target.parentElement;
    itemlist.removeChild(li);
   }

  }

}


//Add item function 
function addItem(e) {
    e.preventDefault();

//new item
var newItem = document.getElementById('newitem').value;

//create new li element
var li = document.createElement('li');

li.className = "list-group-item";

//add text node with input value

li.appendChild(document.createTextNode(newItem));

//create delete btn
var deletebtn = document.createElement('button');
//add class
deletebtn.className = "btn btn-danger btn-sm float-right delete";
//append textnode
deletebtn.appendChild(document.createTextNode("X"));

//append deletebtn to li
li.appendChild(deletebtn);

//append li to itemlist
itemlist.appendChild(li);
}



//filter Items
function filterItems(e) {
    //convert to lowercase
    var text = e.target.value.toLowerCase();
    //get lis
    var items = itemlist.getElementsByTagName('li');

    //convert into array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}