'use strict'
////  Variebles/////////
let select = document.querySelector('#select');
let bread = document.querySelector('.nons');
let width = document.querySelector('.width');
let up = document.querySelector('.ustida');
let box = document.querySelector('.qosh');
let option = document.querySelector('option')
let wrapper = document.querySelector('.wrapper');
let wrapperItem = document.querySelector('.wrapper-item');
let check = document.querySelector('.checkbox');
let upper = document.querySelector("#upper")
let adder = document.querySelector('.qoshimcha')
let item = document.querySelector('#item')
////// choose type ////
select.addEventListener('change', (e) => {
    bread.textContent = `=>  Nonning turi ${e.target.value}`
})
console.log(wrapperItem);


//////Size//////
wrapper.addEventListener('click', (e) => {
    let box = e.target.className
    if (box == 'wrapper-item bg-white') {
        width.innerHTML = ` => ${e.target.textContent}`
    }
})

///////check///////
let arr = []
let newArr = []
check.addEventListener('click', (e) => {
    let inputValue = e.target
    if (inputValue.name !== undefined) {
        let li = document.createElement("li")
        if (inputValue.checked == true) {
            console.log(inputValue.value);
            li.textContent = `=> ${inputValue.value}`
            upper.appendChild(li)
        } else if (inputValue.checked == false) {
            upper.innerHTML = ''
        }
    }
})

// let checkboxes=document.querySelectorAll('.checkbox')
// console.log(checkboxes);
// for(var checkbox of checkboxes){
//         // let li = document.createElement("li")
//     checkbox.addEventListener('click',(e)=>{
//         let inputValue=e.target
//         // console.log(e);
        
        
//         if(inputValue.checked == true){
//             arr.push(inputValue.value);
//             // console.log(arr);
//             upper.textContent=arr.join()
//             // upper.appendChild(li)
//         }else{
//             // console.log('you uncgecekd box');
//             arr=arr.filter(e=> e !== inputValue.value);
//             upper.textContent=arr.splice(0,1).join()
//             // upper.appendChild(li)
//         }
//     })
// }







// adder //////
adder.addEventListener('click', (e) => {
    let plus = e.target
    let div = document.createElement('div')
    if (plus !== undefined) {
        if (plus.checked == true) {
            box.textContent = ` => ${plus.value}`
        } else if (plus.checked == false) {
            box.textContent = ''
        }
    }
})
////modal////
console.log(bread.textContent);
let modalWrapper = document.querySelector('.modl')
function modal() {
    let btn = document.querySelector('.btn')
    let title = document.querySelector('.modal-title')
    btn.addEventListener('click', () => {
        console.log(title.textContent);
        if (bread.textContent != 0 && box.textContent != 0 && width.textContent != 0) {
            console.log('salom');
            modalWrapper.setAttribute('class', 'modl d-flex')
            title.textContent = 'Success'
        } else {
            modalWrapper.setAttribute('class', 'modl d-flex')
            console.log('sa');
        }
        setTimeout(() => {
            modalWrapper.setAttribute('class', 'modl swipe')
        }, 2000);
    })
}



modal()




// ('#modal-btn').addEventListener('click',()=>{
//     if(kod.value.trim().length>0&&name.value.trim().length>0&&email.value.trim().length>0){
//         $('#modal').setAttribute('class','modal-wrapper d-flex');
//         setTimeout(function(){
//         $('#modal').setAttribute('class','modal-wrapper slide');
//         },3000)
//     }
// })
wrapper.addEventListener('click',(e)=>{
    let addClick = e.target;
    if(addClick.textContent == '25 sm'){
        wrapperItem.className = 'wrapper-item wrapper_dark'
        console.log(wrapperItem);
    }
    // console.log(e.target);
})