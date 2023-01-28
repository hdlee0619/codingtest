function solution(strings, n) {
    var answer = [];
    let alphabet;
    for (let i = 0; i < strings.length; i++) {
        alphabet = strings[i][n] + strings[i]; // 1. 인덱스 값을 받아서 스트링의 인덱스 문자를 받는다.
        strings[i] = alphabet; // 2. 앞 글자에 받은 인덱스 문자를 붙인다.
    }
    strings.sort(); // 3. 정렬한다.
    for (let i = 0; i < strings.length; i++) {
        strings[i] = strings[i].substr(1); // 4. 맨 앞 문자를 자른다.
        answer.push(strings[i]);
    }
    return answer;
}