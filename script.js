var form = document.getElementById("form");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");

//show input error message

function showError(input, message){
    var formControl = input.parentElement;
    formControl.className = "form-control error";
    var small = formControl.querySelector("small");
    small.textContent = message;
}

//show succes outline

function showSuccess(input,){
    var formControl = input.parentElement;
        formControl.className = "form-control success"
}


//check required field

function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value === ""){
            showError(input, getFieldName(input) + " is required")
           
        }else{
            showSuccess(input)
        }
        
    });

}

//check input length

function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, getFieldName(input) + " must be at leas " + min);
    }else if(input.value.length > max){
        showError(input, getFieldName(input) + " must be less " + max);

    }else{
        showSuccess(input);
    }
}

//check password fields

function passwordMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, "Password do not match")
    }
}


//refactor name

function getFieldName(input){
    var title = input.id === "password2"? "Confirm Password" :
    input.id.charAt().toUpperCase() + input.id.slice(1);
    return title;
    
}



form.addEventListener("submit", function(event){
    event.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 8, 15);
    passwordMatch(password, password2);



   /*  if(username.value === ""){
        showError(username, "This field is required")
       
    }else{
        showSuccess(username)
    }

    if(email.value === ""){
        showError(email, "This field is required")
    }else{
        showSuccess(email)
    }

    if(password.value === ""){
        showError(password, "This field is required")
    }else{
        showSuccess(password)
    }

    if(password2.value === ""){
        showError(password2, "This field is required")
    }else{
        showSuccess(password2)
    } */
});