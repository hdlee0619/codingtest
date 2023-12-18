function solution(rny_string) {
    return rny_string.split("").map(word => {
        if (word === "m") {
            return "rn";
        } else {
            return word;
        }
    }).join("");
    
}