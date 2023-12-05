// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const input = [0,1,3,2]
const library = {
    1 : '-',
    3 : '- -',
    9 : '- -   - -',
    27 : '- -   - -         - -   - -',
    81 : '- -   - -         - -   - -                           - -   - -         - -   - -',
}
function removeMiddle(array){
    const length = array.length
    if(library[length]) {
        
        return library[length]
    }

    const windowSize = length / 3
    const first = removeMiddle(array.slice(0, windowSize))
    const second = Array.from({length : windowSize}, ()=>' ')
    const third = removeMiddle(array.slice(windowSize * 2))

    const result = [...first, ...second, ...third].join('')
    if(!library[length]) library[length] = result
    return result
}

for(const number of input){
    const arr = Array.from({length : 3**number}, ()=>'-')
    console.log(removeMiddle(arr))
}