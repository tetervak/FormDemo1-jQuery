$(document).ready(function(){
    $("#studentForm").validate({
        rules:{
            firstName: "required",
            lastName: "required"
        },
        messages:{
            firstName: "First name is required",
            lastName: "Last name is required"
        },
        errorElement: "em",
        submitHandler: saveStudentData
    })
});

function saveStudentData(form){

    // pick the data from the inputs
    let firstName = $("input[name=firstName]").val();
    let lastName = $("input[name=lastName]").val();
    let programName = $("select[name=programName]").val();
    let programYear = $("input[name=programYear]:checked").val();
    let programCoop = $("input[name=programCoop]").prop("checked");
    let programInternship = $("input[name=programInternship]").prop("checked");

    // it is a shortcut to make the object from variables
    let studentData = {firstName, lastName, programName, programYear, programCoop, programInternship};

    // log the object content for debugging
    console.log(studentData);

    // put the object data into localStorage
    localStorage["studentData"] = JSON.stringify(studentData);

    // go to them next page
    form.submit();
}
