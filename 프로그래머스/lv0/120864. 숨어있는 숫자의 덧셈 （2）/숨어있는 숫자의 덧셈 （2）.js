function solution(my_string) {
    let regex = /[a-z & A-Z]/
    let array = [];
    my_string.split(regex).forEach((a) => {if (a !== '') {
        array.push(a);
    }});
    
    if (array.length === 0) {
        return 0
    } else {
        return array.reduce((a, b) => Number(a) + Number(b), 0);
    }
}