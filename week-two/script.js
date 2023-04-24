function generateAkanName() {
	// Get the user's input
	let dob = new Date(document.getElementById("dob").value);
	let gender = document.getElementById("gender").value;

	// Calculate the day of the week the user was born
	let dayOfWeek = dob.getDay();
	let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	// Determine the corresponding Akan name based on gender and day of the week
	let akanNamesMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
	let akanNamesFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

	let akanName;
	if (gender === "male") {
		akanName = akanNamesMale[dayOfWeek];
	} else {
		akanName = akanNamesFemale[dayOfWeek];
	}

	// Display the result on the HTML page
	document.getElementById("result").innerHTML = "You were born on a " + daysOfWeek[dayOfWeek] + ", your Akan name is " + akanName;
}