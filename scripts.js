//Client-side data validataion for Highway

//Document element selectors for Account Information Form
const accountInfoCollect = document.getElementById('account-info-collect');
const userId = document.getElementById('user-id');
const passwordOne = document.getElementById('password-one');
const passwordTwo = document.getElementById('password-two');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const addressOne = document.getElementById('address-one');
const addressTwo = document.getElementById('address-two');
const city = document.getElementById('city');
const state = document.getElementById('state');
const zipCode = document.getElementById('zip-code');
const phone = document.getElementById('phone');
const loanAccount = document.getElementById('loan-account');
const paymentMethod = document.getElementById('payment-method');
const submitButton = document.getElementById('submit-button');

//Document element selectors for Account Information Display
const accountInfoDisplay = document.getElementById('account-info-display');
const displayUserId = document.getElementById('display-user-id');
const displayPassword = document.getElementById('display-password');
const displayName = document.getElementById('display-name');
const displayEmail = document.getElementById('display-email');
const displayAddress = document.getElementById('display-address');
const displayPhone = document.getElementById('display-phone');
const displayLoanAccount = document.getElementById('display-loan-account');
const displayPaymentMethod = document.getElementById('display-payment-method');

//Initial Display when page is loaded
accountInfoDisplay.style.display = 'none';

//Event handler for the Submit Button.  It stores the the Account Information then triggers the validation functions
submitButton.addEventListener('click', (event) => {
	event.preventDefault();

	validateUserId(userId);
	//validatePassword(passwordOne, passwordTwo, displayUserID);
	validateRegularText(firstName);
	validateRegularText(lastName);
	validateRegularText(city);
	// validateAddress(addressOne);
	// validateAddress(addressTwo);
	// validateEmail(email);
	// validatePhone(phone);
	// validateLoanAccount(loanAccount);
	validateDropDown(state);
	validateDropDown(paymentMethod);
});

//UserID Requirements: 5 to 16 character alphanumeric string that may include _ and – having a length of 3 to 16 characters.

function validateUserId(inputText) {
	const userIdFormat = /^^[a-z0-9_-]{5,16}$/;
	if (userIdFormat.test(inputText.value)) {
		console.log('User ID is valid');
		return true;
	} else {
		console.log('User ID is invalid');
		return false;
	}
}

//Password Requirements:  Needs at least 1 uppercase character, at least 1 lowercase character, at least 1 number, at least 1 special character and have a minimum 8 and maximum 20 characters.
//Compares it to a second passworld to ensure they match

function validatePassword(passwordInputOne, passwordInputTwo, currentUser) {
	const passwordRegex = /^(?=.*\d)(?=.*[!#$%&? "])(?=.*[a-zA-Z])[a-zA-Z0-9]{8,20}$/;
	console.log(passwordInputOne);
	console.log(passwordInputTwo);
	if (passwordInputOne != '' && passwordInputOne == passwordInputTwo) {
		if (passwordInputOne.length < 8 || passwordInputOne.length > 20) {
			console.log(
				'Error: Password must contain at least eight characters and maximum twenty characters!'
			);
			passwordInputOne.focus();
			return false;
		}
		if (passwordInputOne.value == currentUser.value) {
			console.log('Error: Password must be different from Username!');
			passwordTwo.focus();
			return false;
		}
		if (!passwordRegex.test(passwordInputOne)) {
			console.log(
				'Password should contain at least one number, one special character, one uppercase letter and one lowercase letter'
			);
			return false;
		}
	}
}

// Regular Text: Validates standard text input  (in this case, First Name, Last Name, City) by evaluating input for only letters and spaces. There is a 2 letter minimum and 30 letter maximum.

function validateRegularText(inputText) {
	const textFormat = /^[a-zA-Z ]{2,30}$/;
	if (textFormat.test(inputText.value)) {
		console.log(`${inputText.value} is a valid regular text item`);
		return true;
	} else {
		console.log(`${inputText} is NOT a valid regular text`);
		return false;
	}
}

// //Email - Requires email template with @ and .
// function validateEmail(inputText) {
// 	const mailFormat = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//     if(inputText.value.match(mailFormat)) {
// 		console.log('Valid email address!');
// 		return true;
// 	} else {
// 		console.log('You have entered an invalid email address!');
// 		return false;
// 	}
// }

//Address

//State & Payment Method - Make sure an option is selected
function validateDropdown(selection) {
	if ((selection.value = '')) {
        console.log(`${selection.value} is invalid`)
		return false;
	} else {
        console.log(`${selection.value} is valid`)
		return true;
	}
}

//Zip Code - must be 6 digits, numbers only - can be updated if user base expands out of US
function validateZipCode(inputText) {
	const zipFormat = /^\d{5}(-\d{4})?$/;
	if (zipFormat.test(inputText.value)) {
		console.log(`${inputText} is a valid zipcode`);
		return true;
	} else {
		console.log(`${inputText} is NOT a valid zipcode`);
		return false;
	}
}

//Phone Number - This regular expression matches 10 digit US Phone numbers in different formats. Some examples are 1) area code in paranthesis. 2)space between different parts of the phone number. 3)no space between different parts of the number 4)dashes between parts.

function validatePhone(inputText) {
	const phoneFormat = /^\(?[\d]{3}\)?[\s-]?[\d]{3}[\s-]?[\d]{4}$/;
	if (phoneFormat.test(inputText.value)) {
		console.log(`${inputText} is a valid zipcode`);
		return true;
	} else {
		console.log(`${inputText} is NOT a valid zipcode`);
		return false;
	}
}

//Loan Account - for the time being I made it 10 digits and no special characters just as a sample

function validateLoanAccount(inputText) {
	const loanAccountFormat = /^\d{10}$/;
	if (loanAccountFormat.test(inputText.value)) {
		console.log(`${inputText} is a valid loan account number`);
		return true;
	} else {
		console.log(`${inputText} is NOT a valid loan account number`);
		return false;
	}
}
