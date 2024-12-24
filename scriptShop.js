function displayCart() {   
    const cart = JSON.parse(localStorage.getItem('cart')) || [];  

    const cartContainer = document.getElementById('cart-container');  
    cartContainer.innerHTML = "";

    if (cart.length === 0) {  
        cartContainer.textContent = "Ваша корзина пуста.";  
    } else {  
        cart.forEach(item => {  
            const itemElement = document.createElement('div');  
            itemElement.textContent = `${item.name} - ${item.price} Р (Количество: ${item.quantity})`;  
            const removeButton = document.createElement('button');  
            removeButton.textContent = 'Удалить';  
            removeButton.onclick = () => removeFromCart(item.id);  
            itemElement.appendChild(removeButton);  

            cartContainer.appendChild(itemElement);  
        });  
    }  
}  

function removeFromCart(productId) {  
    let cart = JSON.parse(localStorage.getItem('cart')) || [];  
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();  
}  
 
function clearCart() {  
    localStorage.removeItem('cart');  
    displayCart();  
}  

window.onload = function() {  
    displayCart();  
};