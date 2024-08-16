// ! EMPLOYEES

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


// ? Show and hide sidebar sections on click of button

document.querySelectorAll('.toggle-button').forEach( button =>{
	const defaultButton = document.querySelector('.toggle-button.active');
	const defaultContent = document.getElementById(defaultButton.getAttribute('data-target'));

	// Show the default content on page load
	defaultContent.classList.add('active');
	defaultContent.style.display = 'block';

	button.addEventListener('click', function(){
		// Remove active class from all buttons and hide all content
		document.querySelectorAll('.toggle-button').forEach(tb => tb.classList.remove('active'));
		document.querySelectorAll('.toggle-section').forEach(ts => {
			ts.classList.remove('active');
			ts.style.display = 'none';
		});
	
		// Add active class to the clicked button and show content
		this.classList.add('active');
		const sectionId = this.getAttribute('data-target');
		document.getElementById(sectionId).classList.add('active');
		const section = document.getElementById(sectionId);
			section.classList.add('active');
			section.style.display = 'block';
	});
});

// ? Show and hide tabs 

document.querySelectorAll('.tab').forEach(tab => {
	const defaultTab = document.querySelector('.tab.active');
	const defaultContent = document.getElementById(defaultTab.getAttribute('data-target'));

	// Show the default content on page load
	defaultContent.classList.add('active');
	defaultContent.style.display = 'block';

	tab.addEventListener('click', function() {
			// Remove 'active' class from all tabs and hide all content
			document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
			document.querySelectorAll('.tab-content').forEach(c => {
				c.classList.remove('active');
				c.style.display = 'none';
			});
			
			// Add 'active' class to the clicked tab and show content
			this.classList.add('active');
			const contentId = this.getAttribute('data-target');
			document.getElementById(contentId).classList.add('active');
			const content = document.getElementById(contentId);
			content.classList.add('active');
			content.style.display = 'block';
	});
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

// ? Pagination

// 5 rows per page

document.addEventListener('DOMContentLoaded', function() {
	const rowsPerPage = 5;
	const table = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
	const rows = Array.from(table.getElementsByTagName('tr'));
	const paginationControls = document.getElementById('paginationControls');
	const totalPages = Math.ceil(rows.length / rowsPerPage);
	
	function displayPage(page) {
			table.innerHTML = '';
			const start = (page - 1) * rowsPerPage;
			const end = start + rowsPerPage;
			const paginatedRows = rows.slice(start, end);
			paginatedRows.forEach(row => table.appendChild(row));
			
			// Update pagination controls
			paginationControls.innerHTML = '';
			for (let i = 1; i <= totalPages; i++) {
					const button = document.createElement('button');
					button.textContent = i;
					button.className = 'pagination-button';
					if (i === page) button.classList.add('active');
					button.addEventListener('click', () => displayPage(i));
					paginationControls.appendChild(button);
			}
	}
	
	displayPage(1);
});


// ! ROLES

// ? Activate search

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

// Grid and line view

document.getElementById('gridViewBtn').addEventListener('click', function() {
	const rolesSection = document.getElementById('contentA');
	rolesSection.classList.remove('line-view');
	rolesSection.classList.add('grid-view');
});

document.getElementById('lineViewBtn').addEventListener('click', function() {
	const rolesSection = document.getElementById('contentA');
	rolesSection.classList.remove('grid-view');
	rolesSection.classList.add('line-view');
});

// // Modal pop up
document.querySelector('.assign-role-btn').addEventListener('click', function() {

	
	document.querySelector('.modal-background').style.display = 'block';
	document.querySelector('.modal').style.display = 'block';
});

// Modal close
document.querySelector('.close-btn').addEventListener('click', function() {
	document.querySelector('.modal-background').style.display = 'none';
	document.querySelector('.modal').style.display = 'none';
});


document.querySelectorAll('.employee input').forEach(item => {
	item.addEventListener('click', event => {
		// Clear previous selection
		document.querySelectorAll('.employee input').forEach(div => div.classList.remove('selected'));

		// Add the 'selected' class to the clicked employee
		event.target.classList.add('selected');
	});
});



// // Example usage: Show modal on some event
// document.getElementById('assign-button').addEventListener('click', showModal);
