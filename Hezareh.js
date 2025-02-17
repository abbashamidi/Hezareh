window.addEventListener('load', function(){
    setTimeout(() => {
        this.document.getElementById('preloader').style.display = 'none'
    }, 2500);
})

const menubtn = document.getElementById('menu-button');

menubtn.addEventListener('click', ()=>{
    alert('hey there')
})