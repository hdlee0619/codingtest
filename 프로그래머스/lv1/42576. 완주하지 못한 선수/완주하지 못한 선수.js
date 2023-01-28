const solution = (participant, completion) => {
    let copyParti = [...participant].sort();
    let copyComple = [...completion].sort();
    let dataArray = new Array();
    console.log(copyComple, copyParti);
    for (let i = 0; i < participant.length; i++) {
        if (copyParti[i] !== copyComple[i]) {
            dataArray.push(copyParti[i]);
        }
    }
    return dataArray[0];
};