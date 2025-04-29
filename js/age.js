function calculateAge() {
	const today = new Date();
	const birth = new Date(2006, 11, 22);

	let age = today.getFullYear() - birth.getFullYear();
	const monthDifference = today.getMonth() - birth.getMonth();
	const dayDifference = today.getDate() - birth.getDate();
	
	if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
		age--;
	}

	return age;
}

document.getElementById('age').textContent = calculateAge();