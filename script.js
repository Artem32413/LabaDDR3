function addToCart(productId, productName, productPrice) {   
    let cart = JSON.parse(localStorage.getItem('cart')) || [];  
  
    const existingProduct = cart.find(item => item.id === productId);  
    if (existingProduct) {  
        existingProduct.quantity += 1;
    } else {  
        const product = {  
            id: productId,  
            name: productName,  
            price: productPrice,  
            quantity: 1
        };  
        cart.push(product);  
    }  
    localStorage.setItem('cart', JSON.stringify(cart));  

    alert(`${productName} добавлен в корзину!`);  
}