const list = document.querySelectorAll('.list');
const parEl=document.querySelectorAll('.answer');


list.forEach( el => {
    const paragraph = el.querySelector('.answer');
    const btn=el.querySelector('.question') 
    const plusIcon = el.querySelector('.plus-icon')
    const minusIcon = el.querySelector('.minus-icon')
    btn.addEventListener('click',()=>{
        console.log(minusIcon);
            if(!paragraph.classList.contains('show')){
                removeAll()
                paragraph.classList.add('show')
                minusIcon.classList.add('plus-add')
                plusIcon.classList.add('minus-add')
                
            }else{
                paragraph.classList.remove('show')
            }
    })
      

});

function removeAll() {
    parEl.forEach(el => {
        el.classList.remove('show')
    });
}