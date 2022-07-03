

//добавления класса к меню 
const list = document.querySelectorAll('.menu li')
 list.forEach(item =>{ 
        item.addEventListener('click', (e) =>{
        list.forEach(el=>{ el.classList.remove('underlinedBlue'); });
        item.classList.add('underlinedBlue')
    })
})


//Удаление иконки поиска в input twitter search
// document.querySelector('input').oninput = function(){
//     if(this.value.length > 0){
//       this.parentNode.classList.remove('fa-search');
//       this.style.paddingLeft=0;
//     }else{
//       this.parentNode.classList.add('fa-search');
//       this.style.paddingLeft=20+'px';
//     }
//   }


  