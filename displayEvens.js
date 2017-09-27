//clear errors function
function clearErrors() {
    for (var loopCounter = 0; 
        loopCounter < document.forms["displayEvens"].elements.length; 
        loopCounter++) {
            if (document.forms["displayEvens"].elements[loopCounter]
            .parentElement.className.indexOf ("has-") != -1) {
                document.forms["displayEvens"].elements[loopCounter]
                .parentElement.className = "form-group";
            }
        }
}

/*//Resetting the form
function resetForm() {
    clearErrors();
    document.forms["displayEvens"]["startingNum"].value = "";
    document.forms["displayEvens"]["endingNum"].value = "";
    document.forms["displayEvens"]["step"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Display Evens";
    document.forms["displayEvens"]["startingNum"].focus();
}*/

function validateItems () {
    clearErrors();
    //parseInt turns a string like "10" into 10
    var startingNum = parseInt(document.forms["displayEvens"]["startingNum"].value);
    var endingNum = parseInt(document.forms["displayEvens"]["endingNum"].value);
    var step = parseInt(document.forms["displayEvens"]["step"].value);
    var stepNum = [];
    if (startingNum == "" || isNaN(startingNum)) {
        alert("Starting Number must be filled in with a number.");
        document.forms["displayEvens"]["startingNum"]
           .parentElement.className = "form-group has-error";
        document.forms["displayEvens"]["startingNum"].focus();
        return false;
    }
   if (endingNum == "" || isNaN(endingNum)) {
       alert("Ending Number must be filled in with a number.");
       document.forms["displayEvens"]["endingNum"]
          .parentElement.className = "form-group has-error"
       document.forms["displayEvens"]["endingNum"].focus();
       return false;
   }
   if (step == "" || isNaN(step)) {
        alert("Step must be filled in with a number.");
        document.forms["displayEvens"]["step"]
        .parentElement.className = "form-group has-error"
        document.forms["displayEvens"]["step"].focus();
        return false;
    }
    if (step < 0) {
        alert("Step must be a positive number.");
        document.forms["displayEvens"]["step"]
           .parentElement.className = "form-group has-error"
        document.forms["displayEvens"]["step"].focus();
        return false;
        }
    if (endingNum <= startingNum) {
        alert("The Ending Number needs to be greater than the Starting Number.");
        document.forms["displayEvens"]["endingNum"]
           .parentElement.className = "form-group has-error"
        document.forms["displayEvens"]["endingNum"].focus();
        return false;
    }
    for (var i = startingNum; i <= endingNum; i += step) {
        if (i % 2 == 0) {
            stepNum.push(i);
        }
    }
        document.getElementById("results").style.display = "block";
        document.getElementById("startNum").innerText = startingNum;
        document.getElementById("endNum").innerText = endingNum;
        document.getElementById("stepNum").innerText = step;
        //document.getElementById ("evenNumbersDisplayed").innerText = stepNum;
        document.getElementById ("evenNumbersDisplayed").innerHTML = stepNum.join("<br/>");
        return false;
    }