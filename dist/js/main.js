const tabs = document.querySelector('.tabs');
const btns = tabs.querySelectorAll('.tabs__btn');
const items = tabs.querySelectorAll('.tabs__item');

function change(arr, i) {
	arr.forEach( item => {
		item.forEach( i => {i.classList.remove('is-active')})
		item[i].classList.add('is-active')
	})
};

for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', (event) => {
		change([btns, items], i)
	})
};


const prewiewProduct = document.querySelector('.tabs__item-image')
prewiewProduct.innerHTML = `<img src="./images/img_1.jpg" alt="notebook">`


let nameTitle = document.getElementById('name_info');
nameTitle.innerText = 'Планшет Lenovo Tab P11 LTE 6/128GB';

let quantilyInfo = document.getElementById('quantily_info');
let amountInfo = document.getElementById('amount_info');


const deleteProduct = document.getElementById('delete_product');
const addProduct = document.getElementById('add_product');
let inputProduct = document.querySelector('.more__price-input--input');
let productSum = document.getElementById('product_sum');
let fieldValue = parseFloat(inputProduct.value, 10);

let totalSum = 0;
const itemSum = 8000;

addProduct.addEventListener('click', function() {
    fieldValue++;
    inputProduct.value = fieldValue;
    quantilyInfo.innerText = fieldValue;
    totalSum = productSum.innerText = itemSum * inputProduct.value
    amountInfo.innerText = totalSum
    return totalSum
});

deleteProduct.addEventListener('click', function() {
    if(fieldValue > 1) {
        fieldValue--;
        inputProduct.value = fieldValue;
        quantilyInfo.innerText = fieldValue;
        totalSum = productSum.innerText = totalSum - itemSum
        amountInfo.innerText = totalSum
        return totalSum
    }
});

let inputName = document.getElementById('name');
inputName.oninput = function() {
    document.getElementById('result_name').innerText = inputName.value;
}

let inputSurname = document.getElementById('surname');
inputSurname.oninput = function() {
    document.getElementById('result_surname').innerText = inputSurname.value;
}

let inputEmail = document.getElementById('email');
inputEmail.oninput = function() {
    document.getElementById('result_email').innerText = inputEmail.value;
}

let inputPhone = document.getElementById('phone');
inputPhone.oninput = function() {
    document.getElementById('result_phone').innerText = inputPhone.value;
}

let inputAdress = document.getElementById('adress');
inputAdress.oninput = function() {
    document.getElementById('result_adress').innerText = inputAdress.value;
}
