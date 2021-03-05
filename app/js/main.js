function showArr(domElem, arr) {
    let out = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ''){
            out;
        }
        else{
            out += "<div>" + arr[i] + "</div>";
        }
      
       
    }
    document.querySelector(domElem).innerHTML = out;
}

let d1 = [];
let i1 = document.querySelector('.stay__input');
function f1() {
    
    d1.unshift(i1.value);
    showArr('.stay__emails', d1);
    return false;
}

document.querySelector('.stay__btn').onclick = f1;


