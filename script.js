
function addStudent() {
    let name = document.getElementById("studentName").value;

    if (name === "") {
        alert("Please enter student name");
        return;
    }

    let table = document.getElementById("attendanceList");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = name;

    row.insertCell(1).innerHTML = `
        <button onclick="markAttendance(this, 'Present')">
            Present
        </button>
        <button onclick="markAttendance(this, 'Absent')">
            Absent
        </button>
        <span></span>
    `;

    document.getElementById("studentName").value = "";
}

function markAttendance(button, status) {
    let cell = button.parentElement;
    let buttons = cell.querySelectorAll("button");

    buttons.forEach(btn => btn.disabled = true);

    cell.querySelector("span").innerHTML = status;
}
