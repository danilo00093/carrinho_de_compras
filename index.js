// Array para armazenar os itens no carrinho
let cart = [];

// Função para adicionar item ao carrinho
function addToCart(productName, productPrice) {
    // Cria um objeto de item para adicionar ao carrinho
    const product = {
        name: productName,
        price: productPrice
    };

    // Adiciona o item ao carrinho
    cart.push(product);

    // Atualiza a exibição do carrinho
    updateCartDisplay();
}

// Função para remover item do carrinho
function removeFromCart(index) {
    // Remove o item do carrinho pelo índice
    cart.splice(index, 1);

    // Atualiza a exibição do carrinho
    updateCartDisplay();
}

// Função para atualizar a exibição do carrinho
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Limpa a lista de itens do carrinho
    cartItemsContainer.innerHTML = '';

    // Adiciona os itens do carrinho à lista
    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        
        // Cria um botão para remover o item
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = () => removeFromCart(index);
        
        listItem.appendChild(removeButton);
        cartItemsContainer.appendChild(listItem);
    });

    // Atualiza o preço total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalPriceElement.textContent = total.toFixed(2);
}

// Função para limpar o carrinho
function clearCart() {
    cart = [];
    updateCartDisplay();
}
