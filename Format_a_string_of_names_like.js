function list(names){
    var string = [];
    names.forEach(function(name, index) {
        for (var value in name) {
            if( (names.length - 2) > index && (names.length - 1) > index ){
                string.push(name[value] + ",");
            }else if( (names.length -1) == index && names.length > 1){
                string.push( '& '+ name[value]);
            } else{
                string.push(name[value]);
            }
        }

    });
    var str = string.join(' ');
    return str;
}

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'