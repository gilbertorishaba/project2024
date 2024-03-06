const registerLink = document.getElementById('registerLink'); 
const registerForm = document.getElementById('registerForm');

console.log(registerLink);

registerLink.addEventListener('click', () => {
    alert('button clicked');
    registerForm.style.display = "block";
});

const registeredUsers =[];

function register() {
    let firstName = document.getElementById('firstname');
    let lastName = document.getElementById('lastName');
    let password = document.getElementById('password');

    let newCustomer = { 
        newCustomerfirstName: firstName,
        newCustomerlastName: lastName,
        newCustomerpassword: password,
    };

    registeredUsers.push(newCustomer);
    alert(`New user ${firstName}, has been registered`);

    clearForm(); // after registering
}

function clearForm() {
    let firstName = document.getElementById('firstName').value = '';
    let lastName = document.getElementById('lastName').value = '';
    let password = document.getElementById('regNumber').value = '';
}
