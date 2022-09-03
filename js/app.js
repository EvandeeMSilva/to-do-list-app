const toDoList = document.querySelector('[data-js="toDoList"]')
const addItemBtn = document.querySelector('[data-js="addItemBtn"]')
const toDoItemInput = document.querySelector('[data-js="toDoItemInput"]')

addItemBtn.addEventListener('click', () => {
    toDoItemInput.classList.remove('hidden')
})