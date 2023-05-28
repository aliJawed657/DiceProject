



var Element = document.querySelectorAll('img')[0];
function tosscoin(userpick){
    var ranNum = Math.ceil(Math.random() * 6)
    
    if(ranNum === 1){
        Element.src = './images/download.jpg';
    }
  else if(ranNum === 2){
    Element.src = './images/images.png';
   
  }
  else if(ranNum === 3){
    Element.src = './images/1200px-Dice-3-b.svg.png';
    
  }
  else if(ranNum === 4){
    Element.src = './images/download.png';
  
  }
  else if(ranNum === 5){
  Element.src = './images/Dice-5-b.svg.png';
  
  }
  else if(ranNum === 6){
     Element.src = './images/download (1).png';
   
  }
  if((userpick === 'One' && ranNum === 1) || 
  (userpick === 'Two' && ranNum === 2) || 
  (userpick === 'Three' && ranNum === 3) ||
  (userpick === 'Four' && ranNum === 4) ||
  (userpick === 'Five' && ranNum === 5) ||
  (userpick === 'Six' && ranNum === 6)) {
    console.log('you won the toss')
  }
else{
console.log('you loss the toss');
}
}
