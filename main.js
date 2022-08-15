const closeBtn = document.querySelector("#corner-close-modal"),
  signup = document.querySelectorAll(".signup"),
  submitBtn = document.querySelector("#submit"),
  cancelBtn = document.querySelector("#cancel"),
  overlayDiv = document.querySelector(".overlay"),
  modal_container = document.querySelector(".modal-container");

  signup.forEach(signupbtn =>{
    signupbtn.addEventListener('click', (e)=>{
        modal_container.style.display = 'block';

        
       
    })
  });

  closeBtn.onclick = (e)=>{
    //e.target.parentElement.remove();
    modal_container.style.display = 'none';
   }
 
   cancelBtn.onclick = ()=>{
     modal_container.style.display = 'none';
  
    }
