let button = document.querySelector('.main__add-button'),
    comboBox = document.querySelector('.main__item_selection'),
    price_value = document.querySelector('.main__pricetag_value');
let sum = 0;

const valueStorage = {
    cpu: {
        image: 'cpu.jpg',
        title: 'Процессор',
        price: 150,
    },
    gpu: {
        image: 'gpu.png',
        title: 'Видеокарта',
        price: 450
    },
    ram: {
        image: 'ram.jpg',
        title: 'Оперативная память',
        price: 45
    },
    mb: {
        image: 'mb.jpg',
        title: 'Материнская плата',
        price: 85
    }
}

const itemsWindow = {
    htmlLink: document.querySelector('.main__window'),
    itemList: [],
    refreshWindow: function() {
        let result = '';
        sum = 0;
        for(let i=0; i < this.itemList.length; i++){
            result += `
                <div class="item">
                    <div class="item__pic_frame">
                        <img src="images/${valueStorage[this.itemList[i]].image}" class="item__pic" alt="">
                    </div>
                    <h5 class="item__title">${valueStorage[this.itemList[i]].title}</h5>
                </div>
            `;
            sum += valueStorage[this.itemList[i]].price;
        }
        this.htmlLink.innerHTML = result;
        price_value.innerHTML = sum;
    }
}

button.addEventListener('click', function() {
    itemsWindow.itemList.push(comboBox.value);
    itemsWindow.refreshWindow();
    console.log(itemsWindow.itemList);
})

