function filter_list_and_change(l) {
    var newList = l.filter(function (value) {
        value = parseInt(value);
        if(typeof value == "number" && !isNaN(value)){
            return true;
        }
    }).map(function (value) {
        return parseInt(value);
    });
    return newList;
}

function filter_list(l) {
    var newList = l.filter(function (value) {
        if(typeof value == "number" ){
            return true;
        }
    });
    return newList;
}

 filter_list([1,2,'a','b']);
 filter_list([1,'a','b',0,15]);
 filter_list([1,2,'aasf','1','123',123]);

 filter_list_and_change([1,2,'a','b']);
 filter_list_and_change([1,'a','b',0,15]);
 filter_list_and_change([1,2,'aasf','1','123',123]);
