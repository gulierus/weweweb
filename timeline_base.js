// Switch between timetable days
function showDay(day) {
            const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

            days.forEach(d => {
                document.getElementById("dv-" + d).style.display = 'none';
            });
            document.getElementById("dv-" + day).style.display = 'table';
}

// Switch between Day View and Full Week View
 function switchView(view) {
            const dayView = document.getElementById('timetable-day');
            const weekView = document.getElementById('timetable-week');
            const dayViewButtons = document.getElementById('dayViewButtons');

            if (view === 'day') {
                dayView.style.display = 'block';
                weekView.style.display = 'none';
                dayViewButtons.style.display = 'flex';
            } else {
                dayView.style.display = 'none';
                weekView.style.display = 'flex';
                dayViewButtons.style.display = 'none';
            }
}
 
// Set header for tables
function dayViewTableSetHeader() {
            const tableHeaderTemp = document.getElementById('dv-table-header');
            const tables = document.querySelectorAll('[id^="dv-"]');

            Array.from(tables).forEach(table => {
                const clone = tableHeaderTemp.content.cloneNode(true);
                table.insertBefore(clone, table.firstChild);
            });
}

document.addEventListener('DOMContentLoaded', dayViewTableSetHeader);