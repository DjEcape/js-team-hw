
const preloader = document.querySelector('.preloader')
export default window.onload = function (){
    setTimeout(()=>{
        preloader.style.opacity = '0';
        document.body.style.overflowY = 'visible';
        setTimeout(()=>{
            preloader.classList.add('ishidden');  
            preloader.remove()
        }, 200)
    }, 1000)
}


