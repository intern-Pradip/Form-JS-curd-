document.addEventListener('DOMContentLoaded', () => {
    const formData = document.getElementById('formData');

    const handleSubmit = (e) => {
        e.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const contact = document.getElementById('contact').value;

        let formDetails = {
            id: uuid.v4(), // Use v4() method for UUID
            firstName: firstName,
            lastName: lastName,
            email: email,
            contact: contact
        };

        data(formDetails);
        initialValue();
        updateTable();
    }

    function data(formDetails) {
        let userData = JSON.parse(localStorage.getItem("formData")) || [];
        userData.push(formDetails);
        localStorage.setItem('formData', JSON.stringify(userData));
    }

    function initialValue() {
        document.getElementById('firstName').value = "";
        document.getElementById('lastName').value = "";
        document.getElementById('email').value = "";
        document.getElementById('contact').value = "";
    }

    function updateTable() {
        const tbody = document.querySelector('tbody.table-body');
        const data = JSON.parse(localStorage.getItem('formData')) || [];

        tbody.innerHTML = data.map((item, index) => `
            <tr>
                <td>${index + 1}</td>
                <td>${item.firstName}</td>
                <td>${item.lastName}</td>
                <td>${item.email}</td>
                <td>${item.contact}</td>
                <td> <button class='edit'>Edit</button></td>
                <td> <button class='delete'>Delete</button></td>
            </tr>
        `).join('');
    }

    formData.addEventListener('submit', handleSubmit);
    updateTable(); 
});
