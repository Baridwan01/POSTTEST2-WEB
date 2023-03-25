function simpan(){
    // clearing session storage
    sessionStorage.clear()
    
    const userInputNama = document.getElementById('nm');
    const userInputAddress = document.getElementById('address');
    const userInputEmail = document.getElementById('eml');
    const userInputGender = document.querySelector('#Gender');
    const userInputRadio = document.querySelector('input[name="radio"]:checked');  
    const userInputCheckbox = document.getElementsByName('checkbox');
    
    
    
    let nm = sessionStorage.getItem("nm");
    let eml = sessionStorage.getItem("eml");
    let checkbox = sessionStorage.getItem("checkbox") || [];
    let address = sessionStorage.getItem("address");
    let radio = sessionStorage.getItem("radio");
    let Gender = sessionStorage.getItem('#Gender');


      // push 
      nm = userInputNama.value || nm;
      
     
      eml = userInputEmail.value || eml;
      
     
      address = userInputAddress.value || address;
      
      Gender = userInputGender.value || Gender;
    
      radio = userInputRadio.value || radio;
      
        
      for (var i=0; i<userInputCheckbox.length; i++) {
          if (userInputCheckbox[i].checked) {
              checkbox.push(userInputCheckbox[i].value);
          }
      }

      let data ={
        'nm': nm,
        'eml': eml,
        'checkbox' : checkbox,
        'address' : address,
        'radio' : radio,
        'Gender' : Gender
       }

       sessionStorage.setItem("data", JSON.stringify(data));
}