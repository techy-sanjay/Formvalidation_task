
function validateForm(e) {
    e.preventDefault();

var name = document.getElementById("name").value;
    if(!name){
        document.getElementById("Name_Error").innerHTML = "Name is Required";
    }
    else{ 
        document.getElementById("Name_Error").innerHTML =" ";
    }

var age = document.getElementById("age").value;
    if(!age){
        document.getElementById("Age_Error").innerHTML = "Age is Required";
    }
     else{ 
        document.getElementById("Age_Error").innerHTML =" ";
    }
    
var mobile_number = document.getElementById("mobilenumber").value;
    if(!mobile_number){
        document.getElementById("mobile_number_Error").innerHTML = "Enter Mobile Number";
    }
    else if(mobile_number.length != 10){
        document.getElementById("mobile_number_Error").innerHTML = "Enter the valid Mobile Number";
    }
    else{ 
        document.getElementById("mobile_number_Error").innerHTML =" ";
    }

var email_id = document.getElementById("emailid").value;
    if(!email_id){
        document.getElementById("Emailid_Error").innerHTML = "Enter the Email Id";
    }
    else{ 
         document.getElementById("Emailid_Error").innerHTML =" ";
    }
    
var password = document.getElementById("password").value;
   if(!password){
        document.getElementById("password_Error").innerHTML = "Enter the password";
        }
    else if(password.length<8){
        document.getElementById("password_Error").innerHTML = "Enter the valid password";
    }
    else{ 
        document.getElementById("password_Error").innerHTML =" ";
    }

var cpassword = document.getElementById("cpassword").value;
    if(!cpassword){
        document.getElementById("cpassword_Error").innerHTML = "Enter the Confirm password";
    }
    else if (cpassword !== password){
        document.getElementById("cpassword_Error").innerHTML = "password does not match";
    }
    else{ 
        document.getElementById("password_Error").innerHTML =" ";
    }


var gender = document.querySelector('input[name="gender"]:checked');
    if(!gender){
        document.getElementById("gender_Error").innerHTML = "Select the Gender";
    }
    else{ 
        document.getElementById("gender_Error").innerHTML =" ";
    }

var department = document.querySelector('input[name="department"]:checked')
    if(!department){
        document.getElementById("department_Error").innerHTML = "Select the Department";
    }
    else{ 
        document.getElementById("department_Error").innerHTML =" ";
    }

var address = document.getElementById("address").value;
    if(!address){
        document.getElementById("address_Error").innerHTML = "Enter the Address";
    }
    else{ 
        document.getElementById("address_Error").innerHTML =" ";
    }

var message = document.getElementById("message");

    if (!name || !age || !mobile_number || !email_id || !password || !gender || !department || !address) {
        document.getElementById("message").innerHTML = "Please fill out all required fields.";
    } 
    else {
        document.getElementById("message").innerHTML = "Form submitted successfully!";
        alert("Form Submitted successfully");

         // console.log(formData)
        // localStorage.setItem("formdata",JSON.stringify(formData));
        // let item =  localStorage.getItem("formdata")
        let formarray = [];
        if(localStorage.getItem("formarray")){
            let value = JSON.parse(localStorage.getItem("formarray"))
         formarray = [...value] 
        //  console.log("if")
        }
        var formData = {
             id:Math.random(),
            name: name,
            age: age,    
            mobile_number: mobile_number,
            email_id: email_id,
            password: password,
            gender:  gender,
            department: department,
            address:  address,

            
        }
        console.log(formarray)
        formarray.push(formData)
        localStorage.setItem("formarray",JSON.stringify(formarray));
}
}