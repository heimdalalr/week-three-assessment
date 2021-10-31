console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	formSuccess();
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function formSuccess() {
	alert("form has been submitted successful!");
  }

// let ducky = document.getElementById="ducky"

// ducky.addEventListener("mouseover", function(event){
// 	alert("You are very clever!");
// })

function Alert(e){
	alert("You are very clever!");
   };