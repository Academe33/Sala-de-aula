const classroom = document.getElementById('classroom');
let students = [
    { name: "João", grade: "5ª série", contact: "joao@example.com", income: 1000 },
    { name: "Maria", grade: "5ª série", contact: "maria@example.com", income: 1000 },
    { name: "Carlos", grade: "5ª série", contact: "carlos@example.com", income: 1000 },
    // Adicione mais alunos aqui, até um total de 30
];
const monthlyExpense = 3000;
const maxStudents = 30;
const studentIncome = 1000;

function createSeats() {
    classroom.innerHTML = '';  // Limpa os assentos anteriores
    for (let i = 0; i < 30; i++) {
        const seat = document.createElement('div');
        seat.classList.add('seat');
        if (students[i]) {
            seat.classList.add('occupied');
            seat.dataset.index = i;
        }
        seat.textContent = i + 1;
        seat.addEventListener('click', showInfo);
        classroom.appendChild(seat);
    }
}

function showInfo(event) {
    const seat = event.target;
    const index = seat.dataset.index;
    if (index !== undefined) {
        const student = students[index];
        document.getElementById('name').textContent = student.name;
        document.getElementById('grade').textContent = student.grade;
        document.getElementById('contact').textContent = student.contact;
        document.getElementById('income').textContent = `R$ ${student.income},00`;
    } else {
        document.getElementById('name').textContent = "";
        document.getElementById('grade').textContent = "";
        document.getElementById('contact').textContent = "";
        document.getElementById('income').textContent = "";
    }
}

function calculateFinance() {
    const totalIncome = students.reduce((sum, student) => sum + student.income, 0);
    const balance = totalIncome - monthlyExpense;
    const potentialIncome = maxStudents * studentIncome;
    const potentialProfit = potentialIncome - totalIncome;

    document.getElementById('totalIncome').textContent = `R$ ${totalIncome},00`;
    document.getElementById('balance').textContent = `R$ ${balance},00`;
    document.getElementById('potentialProfit').textContent = `R$ ${potentialProfit},00`;

    drawFinancialChart(totalIncome, potentialProfit);
}

function drawFinancialChart(currentIncome, potentialProfit) {
    const ctx = document.getElementById('financialChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Rendimento Atual', 'Lucro Potencial'],
            datasets: [{
                label: 'Financeiro',
                data: [currentIncome, potentialProfit],
                backgroundColor: ['#28a745', '#ffc107']
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
        }
    });
}

function addStudent() {
    const name = prompt("Nome do aluno:");
    const grade = prompt("Série:");
    const contact = prompt("Contato:");
    const income = parseFloat(prompt("Rendimento:"));
    students.push({ name, grade, contact, income });
    refreshClassroom();
}

function removeStudent() {
    const index = parseInt(prompt("Número da cadeira para remover (1-30):")) - 1;
    if (students[index]) {
        students.splice(index, 1);
        refreshClassroom();
    } else {
        alert("Cadeira vazia ou número inválido!");
    }
}

function refreshClassroom() {
    createSeats();
    calculateFinance();
}

function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(event) {
        const csv = event.target.result;
        const studentsArray = parseCSV(csv);
        if (studentsArray.length > 0) {
            students = studentsArray;
            refreshClassroom();
        } else {
            alert('Erro ao ler arquivo CSV.');
        }
    };
    
    reader.readAsText(file);
}

function parseCSV(csv) {
    const lines = csv.split('\n');
    const result = [];
    for (const line of lines) {
        const [name, grade, contact, income] = line.split(',');
        if (name && grade && contact && income) {
            result.push({ name, grade, contact, income: parseFloat(income) });
        }
    }
    return result;
}

function showAddStudentForm() {
    const name = prompt("Nome do aluno:");
    const grade = prompt("Série:");
    const contact = prompt("Contato:");
    const income = parseFloat(prompt("Rendimento:"));
    if (name && grade && contact && !isNaN(income)) {
        students.push({ name, grade, contact, income });
        refreshClassroom();
    } else {
        alert("Informações inválidas.");
    }
}

function showRemoveStudentForm() {
    const index = parseInt(prompt("Número da cadeira para remover (1-30):")) - 1;
    if (index >= 0 && index < students.length) {
        students.splice(index, 1);
        refreshClassroom();
    } else {
        alert("Cadeira inválida.");
    }
}

createSeats();
calculateFinance();