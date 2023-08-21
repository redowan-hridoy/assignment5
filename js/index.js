let total = 0;

function purchase(target) {
    const purchaseBoxContainer = document.getElementById('purchase-box');
    const itemName = target.children[1].children[1].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    purchaseBoxContainer.appendChild(li);
    const price = target.children[1].children[2].innerText.split(" ")[0];
    total = parseFloat(total) + parseFloat(price);
    document.getElementById('total').innerText = total;

}


