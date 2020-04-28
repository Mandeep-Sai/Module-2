let btn1 = document.querySelector('.toggle1')
let btn2 = document.querySelector('.toggle2')

function hideOrShow1(){
  let box1 = document.querySelector('#favouriteAlbums')
  if(box1.style.display === "none"){
    box1.style.display = 'block'
    btn1.innerText = "Hide"
  }else{
  box1.style.display = 'none'
  btn1.innerText = "Show"
  }
}
function hideOrShow2(){
  let box2 = document.querySelector('#review')
  if(box2.style.display === "none"){
    box2.style.display = 'block'
    btn2.innerText = "Hide"
  }else{
  box2.style.display = 'none'
  btn2.innerText = "Show"
  }
}
btn1.addEventListener('click',hideOrShow1)
btn2.addEventListener('click',hideOrShow2)


window.onload = function(){
  let names = document.querySelectorAll('.name')
  console.log(names.length)
}