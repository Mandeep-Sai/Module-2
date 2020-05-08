var card = document.querySelectorAll(' .card')

var priceBox = document.querySelectorAll('#priceBox')
var cols = document.querySelectorAll('.shop')


  for(let i=0;i<card.length;i++){
    card[i].addEventListener('mouseenter',function(){
      let col = cols[i]
      col.classList.add('col'+i)
      let icons = document.querySelectorAll(`.col${i} i`)
      for(let j=0;j<icons.length;j++){
            icons[j].style.display ='none'
       }
       let newP = document.createElement('p')
        newP.classList.add('new')
        newP.innerHTML = '<i class="btn fas fa-shopping-cart"></i>'
        newP.style.backgroundColor = '#9DCB3C'
        newP.style.borderRadius = '2px'
        priceBox[i].appendChild(newP)
    })
    card[i].addEventListener('mouseleave',function(){
      let col = cols[i]
      col.classList.add('col'+i)
      let icons = document.querySelectorAll(`.col${i} i`)
      for(let j=0;j<icons.length;j++){
        icons[j].style.display ='inline-block'
      }
      let newP = document.querySelector('.new')
      priceBox[i].removeChild(newP)
    })
  }
  