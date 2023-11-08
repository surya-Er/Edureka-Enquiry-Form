// first all id
const form = document.getElementById('form');
const Firstname = document.getElementById('Firstname');
const Lastname = document.getElementById('Lastname');
const Dob = document.getElementById('DOB');
const Email = document.getElementById('Email');
const Qualification = document.getElementById('Qualification');
const College = document.getElementById('College');
const organisation = document.getElementById('organisation');
const year = document.getElementById('year');
const experience = document.getElementById('experience');
const city = document.getElementById('city');
const state = document.getElementById('state');
const pin = document.getElementById('pin');
const phone = document.getElementById('phone');
const course = document.getElementById('course');
const refer = document.getElementById('refer');
const tc = document.getElementById('tc');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const FirstnameValue = Firstname.value;
    const LastnameValue = Lastname.value;
    const DobValue = DOB.value;
	const EmailValue = Email.value;
	const QualificationValue = Qualification.value;
    const CollegeValue = College.value;
	const organisationValue = organisation.value;
    const yearValue = year.value;
	const experienceValue = experience.value;
    const cityValue = city.value;
	const stateValue = state.value;
    const pinValue = pin.value;
	const phoneValue = phone.value;
    const courseValue = course.value;
	const referValue = refer.value;
    const tcValue = tc.value;

	// firstname
	if(FirstnameValue === '') {
		setErrorFor(Firstname, 'Username cannot be blank');
	} else {
		setSuccessFor(Firstname);
	}
    //lastname
    if(LastnameValue === '') {
		setErrorFor(Lastname, 'Username cannot be blank');
	} else {
		setSuccessFor(Lastname);
	}
    //dob
    if(DobValue === '') {
		setErrorFor(DOB, 'Username cannot be blank');
	} else {
		setSuccessFor(DOB);
	}
    //email

    if(EmailValue === '') {
     setErrorFor(Email, 'Email cannot be blank');
    } else if (!isEmail(EmailValue)) {
    setErrorFor(Email, 'Not a valid email');
    } else {
    setSuccessFor(Email);
    }
    //qualification
    if(QualificationValue === '') {
		setErrorFor(Qualification, 'Username cannot be blank');
	} else {
		setSuccessFor(Qualification);
	}
	//college
    if(CollegeValue === '') {
		setErrorFor(College, 'Username cannot be blank');
	} else {
		setSuccessFor(College);
	}
    //organisation
    if(organisationValue === '') {
		setErrorFor(organisation, 'Username cannot be blank');
	} else {
		setSuccessFor(organisation);
	}
    //year
    if(yearValue === '') {
		setErrorFor(year, 'Username cannot be blank');
	} else {
		setSuccessFor(year);
	}
    //experience
    if(experienceValue === '') {
		setErrorFor(experience, 'Username cannot be blank');
	} else {
		setSuccessFor(experience);
	}
    //city
    if(cityValue === '') {
		setErrorFor(city, 'Username cannot be blank');
	} else {
		setSuccessFor(city);
	}
    //state
    if(stateValue === '') {
		setErrorFor(state, 'Username cannot be blank');
	} else {
		setSuccessFor(state);
	}
    //pin
    if(pinValue === '') {
		setErrorFor(pin, 'Username cannot be blank');
	} else {
		setSuccessFor(pin);
	}
    //phone
    if(phoneValue === '') {
		setErrorFor(phone, 'Username cannot be blank');
	} else {
		setSuccessFor(phone);
	}
    //course
    if(courseValue === '') {
		setErrorFor(course, 'Username cannot be blank');
	} else {
		setSuccessFor(course);
	}
    //refer
    if(referValue === '') {
		setErrorFor(refer, 'Username cannot be blank');
	} else {
		setSuccessFor(refer);
	}
    //tc
    if(tcValue === '') {
		setErrorFor(tc, 'Username cannot be blank');
	} else {
		setSuccessFor(tc);
	}

}


// function

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'one error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'one success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}










