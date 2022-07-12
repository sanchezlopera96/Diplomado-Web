const buttonMenu = document.getElementById('menu');
const list = document.getElementById('list');
let show = true;
 
buttonMenu.addEventListener('click', () => {
    show = !show;
    if(show){
        list.style.display = 'block';  
    }else{
        list.style.display = 'none';
    }
}, true);
 
window.addEventListener('resize', () => {
    const width = screen.width;
    if(width >= 425.99999){
        list.style.display = 'flex';  
    }else{
        list.style.display = 'none';  
        show = false;
    }
}, true);
 
(function(){
    const width = screen.width;
    if(width >= 425.99999){
        list.style.display = 'flex';  
    }else{
        list.style.display = 'block';  
    }
})();
