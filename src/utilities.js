export const getRandomKey = (obj) => {
    const keys = Object.keys(obj)
    const i = keys.length - 1
    const j = Math.floor(Math.random() * i)

    return keys[j]
}

export const pickRandom = (arr, count) => {
    let _arr = [...arr];
    return[...Array(count)].map( ()=> _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0] ); 
}

export const shuffleArray = (arr) => {
    let currentIndex = arr.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }

    return arr;
}