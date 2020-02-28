$(document).ready(function(){
    let studentData = JSON.parse(localStorage["studentData"]);
    $("#firstName").text(studentData.firstName);
    $("#lastName").text(studentData.lastName);
    $("#programName").text(studentData.programName);
    $("#programYear").text(studentData.programYear);
    $("#programCoop").text(studentData.programCoop?"yes":"no");
    $("#programInternship").text(studentData.programInternship?"yes":"no");
});
