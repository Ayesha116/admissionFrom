console.log('form')

//getting elements

let sname = document.getElementById('name')
let email = document.getElementById('email')
let age = document.getElementById('age')
let phone = document.getElementById('phone')
let submit = document.getElementById('submit')
let alert = document.getElementById('alert')
let namevalidation = false;
let emailvalidation = false;
let agevalidation = false;
let phonevalidation = false;


console.log(sname, email)
sname.addEventListener('blur' , ()=>{
    let nameregex = /^[a-zA-Z]([0-9\ A-Za-z]{2,20}$)/;
    let nameVal = sname.value
    if(nameregex.test(nameVal)){
        console.log('success')
        sname.classList.remove('is-invalid')
        namevalidation = true;

    }
    else{
        console.log('fail')
        sname.classList.add('is-invalid')
    }
})

email.addEventListener('blur' , ()=>{
    let emailregex = /^[a-zA-Z]([a-zA-Z0-9]){3,15}@([A-Za-z]){2,10}\.([a-zA-Z]){1,4}$/;
    let emailVal = email.value
    console.log(emailVal)
    if(emailregex.test(emailVal)){
        console.log('emsuccess')
        email.classList.remove('is-invalid')
        emailvalidation = true;

    }
    else{
        console.log('fail')
        emailvalidation = false;
        email.classList.add('is-invalid')
    }
})
phone.addEventListener('blur' , ()=>{
    let phoneregex = /^03([0-9]){9}$/;
    let phoneVal = phone.value
    console.log(phoneVal)
    if(phoneregex.test(phoneVal)){
        console.log('emsuccess')
        phone.classList.remove('is-invalid')
        phonevalidation = true;

    }
    else{
        console.log('fail')
        phonevalidation = false;
        phone.classList.add('is-invalid')
    }
})

age.addEventListener('blur' , ()=>{
    let ageregex = /[1234][0-9]/;
    let ageVal = age.value
    console.log(ageVal)
    if(ageregex.test(ageVal)){
        console.log('agesuccess')
        age.classList.remove('is-invalid')
        agevalidation = true;

    }
    else{
        console.log(' agefail')
        agevalidation = false;
        age.classList.add('is-invalid')
    }
})

document.addEventListener('mouseover' ,()=>{
    console.log('documeny bur')
    if(emailvalidation && namevalidation && phonevalidation && agevalidation){
        submit.classList.remove('disabled')
}})

submit.addEventListener('click' , (e)=>{
    e.preventDefault();
    
           alert.classList.remove('hide')
           alert.classList.add('show')
           phone.value = ''
           sname.value = ''
           email.value = ''
           age.value = ''
           submit.classList.add('disabled')

})
