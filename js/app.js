const toDoList = document.querySelector('[data-js="toDoList"]');
const addItemBtn = document.querySelector('[data-js="addItemBtn"]');
const toDoItemInput = document.querySelector('[data-js="toDoItemInput"]');

const createItemDoneBtn = document.querySelector('[data-js="createItemDoneBtn"]');
const createItemInput = document.getElementById('createItemInput');
const errorInputField = document.querySelector('[data-js="errorInputField"');

const showCreateItemInput = (element) => {
    element.classList.remove('hidden');
};

const hideCreateItemInput = (element) => {
    element.classList.add('hidden');
};

const createListItem = value => {
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');
    const itemListValue = document.createElement('p');
    itemListValue.textContent = value;
    const itemDoneBtn = document.createElement('button');
    itemDoneBtn.textContent = 'Done';
    itemDoneBtn.setAttribute('data-js', 'itemDoneBtn');
    const itemRemoveBtn = document.createElement('button');
    itemRemoveBtn.textContent = '-';
    itemRemoveBtn.setAttribute('data-js', 'itemDeleteBtn');
    listItem.appendChild(itemListValue);
    listItem.appendChild(itemDoneBtn);
    listItem.appendChild(itemRemoveBtn);
    return listItem;
};

const appendListItem = listItem => {
    toDoList.appendChild(listItem);
}

const removeListItem = (e) => {
    e.remove();
}

addItemBtn.addEventListener('click', () => {
    showCreateItemInput(toDoItemInput);
});

createItemDoneBtn.addEventListener('click', () => {
    if (createItemInput.value) {
        console.log(typeof(createItemInput.value), createItemInput.value)
        appendListItem(createListItem(createItemInput.value));
        createItemInput.value = '';
        hideCreateItemInput(toDoItemInput);
        hideCreateItemInput(errorInputField);
    }
    else {
        showCreateItemInput(errorInputField);
    };
});

toDoList.addEventListener('click', (element) => {
    if (element.target && element.target.nodeName == 'BUTTON' && element.target.dataset.js == 'itemDoneBtn') {
        removeListItem(element.target.parentElement);
    }
    else if ((element.target && element.target.nodeName == 'BUTTON' && element.target.dataset.js == 'itemDeleteBtn')) {
        removeListItem(element.target.parentElement);
    };
});