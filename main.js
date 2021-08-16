nameOfTheStudentArray = [];

function submit() {
    var display_student = [];
    for (var j = 1; j <= 4; j++) {
        var name_of_the_student = document.getElementById("name_of_the_student_" + j).value;
        nameOfTheStudentArray.push(name_of_the_student);
        console.log(nameOfTheStudentArray);
    }
    var length = nameOfTheStudentArray.length;
    console.log(length);
    for (var b = 0; b < length; b++) {
        display_student.push("<h4>NAME - " + nameOfTheStudentArray[b] + "</h4>");
        console.log("display_student");
    }
    document.getElementById("display_name_with_commas").innerHTML = display_student;
    var remove_commas = display_student.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
};

function sorting() {
    nameOfTheStudentArray.sort();
    console.log(nameOfTheStudentArray);
    var displaySortedArray = [];
    var length = nameOfTheStudentArray.length;
    console.log(length);

    for (var j = 0; j < length; j++) {
        var name_of_the_student = document.getElementById("name_of_the_student_" + j).value;
        displaySortedArray.push(name_of_the_student);
        console.log(displaySortedArray);
    }

    for (var b = 0; b < length; b++) {
        displaySortedArray.push("<h4>NAME - " + nameOfTheStudentArray[b] + "</h4>");
        console.log(displaySortedArray);
    }
    var remove_commas = displaySortedArray.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

    

}
