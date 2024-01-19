let clickEvent=document.getElementById('submit');
clickEvent.addEventListener('click',()=>{


    resetErrors();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var dob = document.getElementById('dob').value;


    var isValid = validateForm(name, email, phone, dob);

    if (isValid) {
        var userData = {
            name: name,
            email: email,
            phone: phone,
            dob: dob
        };

        var Url = '';

        fetch(Url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('API Response:', data);
            alert('Registration successful!');
            document.getElementById('registrationForm').reset();
        })
        .catch(error => {
            console.error('API Error:', error);
            alert('Registration failed. Please try again later.');
        });
    }

       
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Phone:", phone);
        console.log("Date of Birth:", dob);

      
        document.getElementById('registrationForm').reset();
    }
);
function validateForm(name, email, phone, dob) {
    var isValid = true;

    if (!name) {
        displayError('nameError', 'Name is required.');
        isValid = false;
    }

    if (!email || !isValidEmail(email)) {
        displayError('emailError', 'Valid email is required.');
        isValid = false;
    }

    if (!phone || !isValidPhoneNumber(phone)) {
        displayError('phoneError', 'Valid phone number is required.');
        isValid = false;
    }

    if (!dob) {
        displayError('dobError', 'Date of Birth is required.');
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phone) {

    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

function displayError(elementId, errorMessage) {
    document.getElementById(elementId).innerText = errorMessage;
}

function resetErrors() {
    var errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function (element) {
        element.innerText = '';
    });
}



