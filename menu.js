const menuH = document.querySelector(".bx-menu");
const menu = document.querySelector(".menuNavegacion");


console.log(menuH)
console.log(menu)

menuH.addEventListener('click',()=>{
    menu.classList.toggle('spread')
})

window.addEventListener('click', e=>{
if(menu.classList.contains('spread')
&& e.target !=menu && e.target !=menuH){
    menu.classList.toggle('spread')
}
})

// abrir formulario
function openWindow(){
    var options = "width=500,height=2000";
    window.open("contact.php", "_blank", options);
}



