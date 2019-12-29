var form=document.getElementById('addForm');
var itemList= document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit', addItem);

// Delete event

itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItems);

//Add Item
function addItem(e) {
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;

    // Create new Li element

    var li = document.createElement('li');
    //Add class
    li.className = 'list-group-item';
    //add textnode with input value
    li.appendChild(document.createTextNode(newItem));

    // create del button element

    var deleteBtn = document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';

    // Append textNode
    deleteBtn.appendChild(document.createTextNode('X'));

    //append button to li

    li.appendChild(deleteBtn);

    //append li to list

    itemList.appendChild(li);

}

function removeItem(e){
    if(e.target.classList.contains('delete'))
    {
        if(confirm("Are you Sure?")){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    //convert to lower case
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');

    // convert HTML collection to array
    Array.from(items).forEach(function(item)
    {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1){
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    })
}