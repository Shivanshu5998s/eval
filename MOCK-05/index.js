var selectanyRow = null;

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();

        if (selectanyRow == null) insertNewRecord(formData);
        else updateRecord(formData);

        resetForm();
    }
}

function resetForm() {
    document.getElementById("Country").value = "";
    document.getElementById("Population").value = "";
    document.getElementById("city").value = "";

    selectanyRow = null;
}

function readFormData() {
    var formData = {};
    formData["Country"] = document.getElementById("Country").value;
    formData["city"] = document.getElementById("city").value;
    formData["Population"] = document.getElementById("Population").value;

    return formData;

    // console.log(formData);
}

function insertNewRecord(data) {
    var table = document
        .getElementById("mydata")
        .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Country;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.city;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Population;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function onEdit(td) {
    selectanyRow = td.parentElement.parentElement;
    document.getElementById("Country").value =
        selectanyRow.cells[0].innerHTML;
    document.getElementById("city").value = selectanyRow.cells[1].innerHTML;
    document.getElementById("Population").value =
        selectanyRow.cells[2].innerHTML;
}

function updateRecord(formData) {
    selectanyRow.cells[0].innerHTML = formData.Country;
    selectanyRow.cells[1].innerHTML = formData.city;
    selectanyRow.cells[2].innerHTML = formData.Population;
}

function onDelete(td) {
    if (confirm("Are you sure to delete this record ?")) {
        row = td.parentElement.parentElement;
        document.getElementById("mydata").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    // if (document.getElementById("Country").value == "") {
    //   isValid = false;
    //   document
    //     .getElementById("CountryValidationError")
    //     .classList.remove("hide");
    // }
    // else {
    //   isValid = true;
    //   if (
    //     !document
    //       .getElementById("CountryValidationError")
    //       .classList.contains("hide")
    //   )
    return isValid;
}
