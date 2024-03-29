document.getElementById("dayButton").addEventListener("click", function() {
    // Get the current date
    var currentDate = new Date();

    // Get the day of the week (0-6 where 0 is Sunday)
    var dayIndex = currentDate.getDay();

    // Define an array with the names of the days
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Display the current day
    document.getElementById("dayDisplay").textContent = "Today is " + days[dayIndex];
});