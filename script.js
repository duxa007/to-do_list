'use strict';


let btn = document.querySelector('.add__btn')
let input = document.querySelector('.add__input')
let listBody = document.querySelector('.list__body')
let list = []


function pushItem() {

    listBody.innerHTML = '';
    if (list.length === 0) {
        listBody.innerHTML += `
                    <li class="list__item">СПИСОК ПУСТ
                        <img class="list__item--empty" src="icon/empty.jpg">
                    </li>`
    }
    list.sort().forEach((item, i) => {
        listBody.innerHTML += `
            <li class="list__item">${i + 1} ${item}
                <input type="checkbox" class="completed">
                <div class="delete"></div>
            </li>`
    });
    check()
    document.querySelectorAll('.delete').forEach((item, i) => {
        item.addEventListener('click', () => {
            item.parentElement.remove()
            list.splice(i, 1)
            pushItem()
        })
    })
}


btn.addEventListener("click", (e) => {
    e.preventDefault()
    if (input.value) {
        list.push(input.value)
        input.value = ''
    }
    pushItem()
});


function check() {
    document.querySelectorAll('.completed').forEach((item, i) => {
        console.log('ertert')
        item.addEventListener('click', () => {
            if (item.checked) {
                console.log('okk')
                item.parentElement.style.textDecoration = 'line-through'
                item.parentElement.style.fontWeight = '700'
            } else {
                item.parentElement.style.textDecoration = 'none'
                item.parentElement.style.fontWeight = '300'
            }
        })
    })
}
