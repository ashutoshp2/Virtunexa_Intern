 
const events = {
    "2023-10-05": "Team Meeting",
    "2023-10-12": "Project Deadline",
    "2023-10-20": "Client Presentation",
  };
  
 
  const date = new Date();
  let currentMonth = date.getMonth();
  let currentYear = date.getFullYear();
  
 
  const calendarGrid = document.getElementById("calendar-grid");
  const currentMonthElement = document.getElementById("current-month");
  const prevMonthButton = document.getElementById("prev-month");
  const nextMonthButton = document.getElementById("next-month");
   
  function renderCalendar(month, year) {
    calendarGrid.innerHTML = "";
  
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDay = firstDay.getDay();
  
    currentMonthElement.textContent = `${firstDay.toLocaleString("default", { month: "long" })} ${year}`;
  
   
    for (let i = 0; i < startDay; i++) {
      calendarGrid.appendChild(document.createElement("div"));
    }
  
    for (let i = 1; i <= daysInMonth; i++) {
      const dayElement = document.createElement("div");
      dayElement.textContent = i;
  
       
      const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`;
  
      
      if (events[dateKey]) {
        dayElement.classList.add("event");
        dayElement.setAttribute("data-event", events[dateKey]);
      }
  
      calendarGrid.appendChild(dayElement);
    }
  }
  
 
  prevMonthButton.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
  });
  
  nextMonthButton.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
  });
  
 
  renderCalendar(currentMonth, currentYear);