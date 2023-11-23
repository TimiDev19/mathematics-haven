function sendMail()
{
    var SubjectLine = "New Application To Math Haven";
    var body = "FIRST NAME: " + document.getElementById("First Name").value + "                   "  + "MIDDLE NAME: " + document.getElementById("Middle Name").value + "                   " + "LAST NAME: " + document.getElementById("Last Name").value + "                  " + "SEX: " + document.getElementById("Sex").value + "                  "  +  "DATE OF BIRTH: " + document.getElementById("DOB").value + "                  " + "PHONE NUMBER: " + document.getElementById("Phone Number").value + "                    " + "EMAIL: " + document.getElementById("email").value + "                  " + "ADDRESS: " + document.getElementById("Address").value + "                  " + "EXAM TYPE: " + document.getElementById("Exam Type").value + "                  ";
    window.location.href = "mailto:adeniyiolalekan34@gmail.com?subject=" +SubjectLine+"&body="+body;
}