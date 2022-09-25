(function(){
    "use strict"

  // WIG BTN ON MOBILE MENU CLICKED
  const wigButton = document.querySelector('#mobileMenuWigs');
  const wigDisplay = document.querySelector('#mobileMenuWigDisplay')

  // wigButton.addEventListener("click", ()=>{
  //   if (wigDisplay.classList.contains('hidden')) {
  //     wigDisplay.classList.remove("hidden");
  //   } 
  //   else{
  //     wigDisplay.classList.add('hidden');
  //   }  
  // });

  // Mobile Menu Icon Change and Bring Up Mobie Menu
  const menuIcon = document.querySelector('#menuIcon');
  const mainMobileMenu = document.querySelector('#mainMobileMenu');

  menuIcon.addEventListener("click", ()=>{
      if (menuIcon.classList.contains('ri-menu-3-line')) {
          menuIcon.classList.remove('ri-menu-3-line');
          menuIcon.classList.add('ri-close-line')
      } 
      else {
          menuIcon.classList.remove('ri-close-line');
          menuIcon.classList.add('ri-menu-3-line')
      }

      if (mainMobileMenu.classList.contains('hidden')) {
          mainMobileMenu.classList.remove("hidden");
        } 
        else{
          mainMobileMenu.classList.add('hidden');
        } 

  });

  // Hair qualities Open and Close

  // const hairQualities = document.querySelector('#hairQualities');
  // const hairQualitiesMenu = document.querySelector('#hairQualitiesMenu');

  // hairQualities.addEventListener('click', ()=>{
  //     if (hairQualitiesMenu.classList.contains('hidden')) {
  //         hairQualitiesMenu.classList.remove("hidden");
  //       } 
  //       else{
  //         hairQualitiesMenu.classList.add('hidden');
  //       } 
  // })

  //countdown
  let startingSec = 18060;

  if (startingSec === 0) {
    let startingSec = 18060;
  }

  if(localStorage.getItem('count') === null){
    startingSec = 18060
  }
  else{
    startingSec = localStorage.getItem('count')
  }
  
  function reducedStartingSec(){
    startingSec-- ;
  };

  reducedStartingSec();

  setInterval(reducedStartingSec, 1000);
  

  const countdownEl = document.querySelectorAll('.countdown');
  
  for (let i = 0; i < countdownEl.length; i++) {  
    // function updating counter
    function updateCountdown(){
      const hours = Math.floor(startingSec/3600);
      const minutes = (Math.floor(startingSec /60) ) % 60;
      const seconds = (startingSec % 60);
    // adding counter
      countdownEl[i].innerHTML = `${hours} : ${addZero(minutes)} : ${addZero(seconds)}`;
    // saving counter
      localStorage.setItem('count', startingSec);
    }
    // call every sec
      setInterval(updateCountdown, 1000);
  };

  function addZero(n){ return (parseInt(n, 10) < 10 ? "0" : "") + n };

    
 // close Wig Shop View






}())