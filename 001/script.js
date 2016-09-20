function startDrawShape(){

    var sign = "#";
    var start = 1;
    var end = 7;

    for (start; start <= end; start++) {
        var row = "";
            for (i = 1; i <= start; i++) {

                row += sign;
            }
            console.log(row);
    }
}

startDrawShape();
