const plus=document.getElementById('plus')
const minus=document.getElementById('min')
const raqam=document.getElementById('raqam')
 raqam.textContent=0
   plus.addEventListener('click',()=>{

 raqam.textContent++

})

minus.addEventListener('click',()=>{
    raqam.textContent--
    })
// const inp=document.querySelector('input')
// inp.innerHTML='<li>salom</li>'
//  let son=inp.value

// plus.addEventListener('click',()=>{
//   const ran=Math.ceil(Math.random()*20000)
//  raqam.textContent=ran
//  })
   // setInterval(() => {
    
   //   raqam.setAttribute('style','color:red')
 
   // }, ran); 

  //setTimeout(() => {
         //clearInterval(raqam.textContent<=1000)
  // }, 1);






