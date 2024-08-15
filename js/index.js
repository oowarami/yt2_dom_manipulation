// ? Activate search

// Employee search
document.getElementById('employeeSearch').addEventListener('input', function() {
	const searchTerm = this.value.toLowerCase();
	const employees = document.querySelectorAll('.employee-row');
	console.log(' 👩🏾‍💻')

	employees.forEach(employee => {
			const name = employee.querySelector('.employee-name').textContent.toLowerCase();
			const id = employee.querySelector('.employee-id').textContent.toLowerCase();
			const role = employee.querySelector('.employee-role').textContent.toLowerCase();
			
			if (name.includes(searchTerm) || id.includes(searchTerm) || role.includes(searchTerm)) {
					employee.style.display = 'flex'; // Show the row
			} else {
					employee.style.display = 'none'; // Hide the row
			}
	});
});

// Role search
document.getElementById('roleSearch').addEventListener('input', function() {
	const searchTerm = this.value.toLowerCase();
	const roles = document.querySelectorAll('.role-card');

	roles.forEach(role => {
			const title = role.querySelector('h3').textContent.toLowerCase();
			const description = role.querySelector('p').textContent.toLowerCase();

			if (title.includes(searchTerm) || description.includes(searchTerm)) {
					role.style.display = 'flex'; // Show the card
			} else {
					role.style.display = 'none'; // Hide the card
			}
	});
});

// ? show and hide sections on click of button

// Show Employee

document.getElementById('employeeButton').addEventListener('click', function() {
	document.getElementById('main-employee').classList.remove('hide');
	document.getElementById('main-role').classList.add('hide');
});

// Show Roles

document.getElementById('RolesButton').addEventListener('click', function() {
	document.getElementById('main-role').classList.remove('hide');
	document.getElementById('main-employee').classList.add('hide');
});


// ? Add New Employees

document.getElementById('addEmployeeBtn').addEventListener('click', function() {
	const employeeTable = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];

	const newRow = employeeTable.insertRow();
	newRow.className = 'employee-row';

	const nameEmailCell = newRow.insertCell(0);
	const idCell = newRow.insertCell(1);
	const roleCell = newRow.insertCell(2);
	const statusCell = newRow.insertCell(3);
	const teamsCell = newRow.insertCell(4);


	nameEmailCell.innerHTML = '<strong>John Doe </strong><br><span>John.employee@example.com</span>';
	idCell.textContent = '#654321ABCD';
	roleCell.textContent = 'Backend Engineer';
	statusCell.textContent = 'Inactive';
	teamsCell.textContent = 'Product, Engineering';

});


