function showDescription(descript){
    $("#description").html("Description: " + descript);
}

function hideDescription(){
    $("#description").html("");
}

function validate(){
    var zip = $("#zip").val();
    var zip_length = zip.length;
    if (zip_length != 5 || isNaN(zip)){
        alert("Zip code is not valid or not in a valid format.");
        return false;
    }
}