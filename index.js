let hambur = document.querySelector('i')
let ul = document.querySelector('ul')
let bool = true
let h3 = document.querySelector('h3')
let online_ofline = document.getElementById('online_offline')
console.log(h3);
if(navigator.onLine){
    online_ofline.style.display = 'none'
}else{
    h3.style.color = 'red'

}

hambur.addEventListener('click',()=>{
    bool = !bool
    if(bool){
        ul.style.top = '-960px'
    }else{
        ul.style.top = '-30px'
    }
    
})
