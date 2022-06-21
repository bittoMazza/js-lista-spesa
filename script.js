const shoppingList = ['cipolle','maionese','pizza','pasta','uova','cipolle','maionese','pizza','pasta','uova'];

const shopListContainer = document.getElementById('shopping-list')
let i = 0;
while( i < shoppingList.length ){
    let newItem = document.createElement('li');
    newItem.innerHTML = shoppingList[i];
    shopListContainer.append(newItem); 
    
    i++;
}

console.log(shopListContainer)