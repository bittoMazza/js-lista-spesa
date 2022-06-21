const shoppingList = ['cipolle','maionese','pizza','pasta','uova','melanzane','salame','mortadella'];
let newAddItem;
let newItem;

const shopListContainer = document.getElementById('shopping-list')
let i = 0;
while( i < shoppingList.length ){
    newItem = document.createElement('li');
    newItem.innerHTML = shoppingList[i];
    shopListContainer.append(newItem); 
    
    i++;
}

console.log(shopListContainer)

const btnAdd = document.getElementById('add-item')
btnAdd.addEventListener('click',function(){
    newAddItem = document.getElementById('new-add-item').value;
    newItem = document.createElement('li');
    newItem.innerHTML = newAddItem;
    shoppingList.push(newAddItem);
    shopListContainer.append(newItem);    
})