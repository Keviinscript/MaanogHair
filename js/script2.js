(function(){
    
    
  // show promotion
  const promotion = document.querySelector("#promotion");
  const closeBtn = document.querySelector('.ri-close-line');
  const topPromotionBar2 = document.querySelector('.toppromotion');
  
  // timeout()
  window.onload = function(){
    setInterval(function(){
      if(localStorage.getItem('email') !== null || undefined ){
        promotion.classList.add('hidden')
        console.log(99)
      }else{
        promotion.classList.remove('hidden')
        console.log(77)
      }   
    },10000);
  }
  // show every 10s
  //close btn
  closeBtn.addEventListener('click', ()=>{
    promotion.classList.add('hidden');
    topPromotionBar2.classList.remove('hidden');
  })


  // for the main unskipable promotion 
    const showDis = document.querySelector('.showDis');
    const mainProm = document.querySelector("#mainPromotion");
   
  
    onbserver = new IntersectionObserver(handleInt);
    if (localStorage.getItem('email') !== null || undefined) {
      onbserver.unobserve(showDis)
    } else {
      onbserver.observe(showDis); 
    }
    
   
    function handleInt(entries, onbserver){
      if(entries[0].intersectionRatio > 0){
        mainProm.classList.remove('hidden');   
      }
      else(
        console.log(66)
      )
    }

    const mainForm = document.querySelector("#mainPromForm");

    mainForm.addEventListener('submit', function(e){
      e.preventDefault();
      let email = document.querySelector('#email1');
      let emailValue = email.value;
      alert(`Welcome to MaanogHair ${emailValue}`);
      onbserver.unobserve(showDis); 
      mainProm.classList.add('hidden');
      localStorage.setItem('email', emailValue);
    })

  
}())
