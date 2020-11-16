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

//Document element selectors for Error Information Display
const errorDisplay = document.getElementById('account-error');
const errorMessage = document.getElementById('error-message');

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
errorDisplay.style.display = 'none';
errorMessage.style.display = 'none';

//If all fields are not filled in, submit button will be disabled
//if(userId.value || passwordOne.value )

//Event handler for the Submit Button.  It stores the the Account Information then triggers the validation functions
submitButton.addEventListener('click', (event) => {
	event.preventDefault();

	validateUserId(userId);
	//validatePassword(passwordOne, passwordTwo, userId);
	validateRegularText(firstName);
	validateRegularText(lastName);
	validateRegularText(city);
	//validateAddress(addressOne);
	//validateAddress(addressTwo);
	validateZipCode(zipCode)
	validateEmail(email);
	validatePhone(phone);
	validateLoanAccount(loanAccount);
	validateDropdown(state);
	validateDropdown(paymentMethod);
});

//UserID Requirements: 5 to 16 character alphanumeric string that may include _ and –

function validateUserId(inputText) {
	const userIdFormat = /^[a-zA-Z0-9.\-_]{5,16}$/;
	if (userIdFormat.test(inputText.value)) {
		console.log(`${inputText.value} id is VALID`);
		return true;
	} else {
		inputText.style.border = 'thick solid red';
		console.log(`${inputText.value} id is INVALID`);
		return false;
	}
}

//Password Requirements:  Needs at least 1 uppercase character, at least 1 lowercase character, at least 1 number, at least 1 special character and have a minimum 8 and maximum 20 characters.

function validatePassword(inputOne, inputTwo, userName) {
	const passwordFormat = /^(?=.*\d)(?=.*[!#$%&? "])(?=.*[a-zA-Z])[a-zA-Z0-9]{8,20}$/;
	if (inputOne.value != '' && inputOne.value == inputTwo.value) {
		if (inputOne.value == userName.value) {
			inputOne.style.border = 'thick solid red';
			inputTwo.style.border = 'thick solid red';
			return false;
		}
		if (!passwordFormat.test(inputOne)) {
			inputOne.style.border = 'thick solid red';
			inputTwo.style.border = 'thick solid red';
			return false;
		}
	}
}

//Regular Text Requirements : Standard text input (in this case, First Name, Last Name, City) needs to contain only letters and spaces. There is a 2 letter minimum and 30 letter maximum.

function validateRegularText(inputText) {
	const textFormat = /^[a-zA-Z ]{2,30}$/;
	if (textFormat.test(inputText.value)) {
		console.log(`${inputText.value} regular text is VALID`);
		return true;
	} else {
		inputText.style.border = 'thick solid red';
		console.log(`${inputText.value} regular text is INVALID`);
		return false;
	}
}

//Email Requirements: Requires email with letters, numbers and selected special characters  then the @ symbol then a . followed by only letters and numbers
function validateEmail(inputText) {
	const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (inputText.value.match(mailFormat)) {
		console.log(`${inputText.value} email is VALID`);
		return true;
	} else {
		inputText.style.border = 'thick solid red';
		console.log(`${inputText.value} email is INVALID`);
		return false;
	}
}

//Address Requirements:
// function validateAddress(inputText) {
// 	const addressFormat = /^[a-zA-Z0-9\s,'-]*$/;
// 	if (inputText == addressOne) {
// 		if (inputText.value == '') {
// 			inputText.style.border = 'thick solid red';
// 			return false;
// 		} else(inputText.value.match(addressFormat)){
// 			return true;
// 		}
// 	} else if (inputText == addressTwo || inputText.value.match(addressFormat)) {
// 		return true;
// 	} else {
// 		inputText.style.border = 'thick solid red';
// 		return false;
// 	}
// }

//Dropdown List Requirements: An option, other than "Select an option...", must be selected
function validateDropdown(selection) {
	if (selection.value == 'select') {
		selection.style.border = 'thick solid red';
		console.log(` ${selection.value} selection is INVALID`);
		return false;
	} else {
		console.log(` ${selection.value} selection is VALID`);
		return true;
	}
}

//Zip Code Requirements: Must be 6 digits or 10 digits with postal code, numbers only
function validateZipCode(inputText) {
	const zipFormat = /^\d{5}(-\d{4})?$/;
	if (zipFormat.test(inputText.value)) {
		console.log(`${inputText.value} zipcode is VALID`);
		return true;
	} else {
		console.log(`${inputText.value} zipcode is INVALID`);
		inputText.style.border = 'thick solid red';
		return false;
	}
}

//Phone Number: This regular expression matches 10 digit US Phone numbers in different formats. Some examples are 1) area code in paranthesis. 2)space between different parts of the phone number. 3)no space between different parts of the number 4)dashes between parts.

function validatePhone(inputText) {
	const phoneFormat = /^\(?[\d]{3}\)?[\s-]?[\d]{3}[\s-]?[\d]{4}$/;
	if (phoneFormat.test(inputText.value)) {
		console.log(`${inputText.value} phone number is VALID`);
		return true;
	} else {
		inputText.style.border = 'thick solid red';
		console.log(`${inputText.value} phone number is VALID`);
		return false;
	}
}

//Loan Account Requirements: 10 digits and no special characters (just as a sample for the time being)

function validateLoanAccount(inputText) {
	const loanAccountFormat = /^\d{10}$/;
	if (loanAccountFormat.test(inputText.value)) {
		console.log(`${inputText.value} phone number is VALID`);
		return true;
	} else {
		inputText.style.border = 'thick solid red';
		console.log(`${inputText.value} phone number is VALID`);
		return false;
	}
}
