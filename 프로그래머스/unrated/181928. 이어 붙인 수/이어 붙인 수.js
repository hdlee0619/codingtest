function solution(num_list) {
    let odd = "";
    let even = "";
    
    num_list.forEach(num => {
        num % 2 === 0 ? even += num.toString() : odd += num.toString();
    });
    
    return Number(odd) + Number(even);
}