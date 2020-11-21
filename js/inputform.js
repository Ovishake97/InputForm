const salary=document.querySelector('#salary');
const output=document.querySelector('.salary-output');
output.textContent=salary.value;
salary.addEventListener('input',function()
{
   output.textContent=salary.value;
});
//UC1-Adding validation for name
const text=document.querySelector('#text');
const textError=document.querySelector('.text-error');
text.addEventListener('input',function()
        {
            let nameRegex=RegExp('^[A-Z]{1}[a-z]{2,}$');
            if(nameRegex.test(text.value))
            textError.textContent="";
            else 
            textError.textContent="Name is incorrect";
        });
//UC2-Validating for email
const email=document.querySelector('#email');
const emailError=document.querySelector('.email-error');
text.addEventListener('input',function()
        {
            let emailRegex=RegExp('^[a-zA-Z0-9]+([+-_.][a-zA-Z0-9]+)*[@][a-zA-Z0-9]+[.][a-zA-Z]+([.][a-zA-Z]{2})*$');
            if(emailRegex.test(email.value))
            emailError.textContent="";
            else 
            emailError.textContent="Emailid is incorrect";
        });
//UC3-Validating for phone number
const phone=document.querySelector('#tel');
const phoneError=document.querySelector('.tel-error');
text.addEventListener('input',function()
        {
            let phoneRegex=RegExp('^[0-9]{2}[][0-9]{10}$');
            if(phoneRegex.test(phone.value))
            phoneError.textContent="";
            else 
            phoneError.textContent="phone number is incorrect";
        });
