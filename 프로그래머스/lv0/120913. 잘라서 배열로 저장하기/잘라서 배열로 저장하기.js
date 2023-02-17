const solution = (my_str, n) => {
    let array = my_str.split("");
    let ans = [];
    
    while(array.length > 0){
        ans.push(array.splice(0,n).join(""));
    }
    
    return ans;
}