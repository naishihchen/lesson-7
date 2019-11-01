function getTime() {
    
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    var months = [" ", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    var date = new Date();
    
    var year = date.getFullYear();

    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    
    var monthNum = parseInt(month)

    var day = ("0" + date.getDate()).slice(-2);
    
    var dayNum = parseInt(day) % 7;
 
    var date_string = daysOfWeek[dayNum] + ", " + day + " " + months[monthNum] + " " + year;
    
    //alert(dayNum);
    
    document.getElementById("year").innerHTML = year;
    
    document.getElementById("fullDate").innerHTML = date_string;
}