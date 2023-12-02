// const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const input = 9
function getPicture(number, template){
    if(number === 3) {
        return template
    }
    const newTemplate = {
        1 : template,
        2 : template,
        3 : template,
        4 : template,
        5 : template,
        6 : template,
        7 : template,
        8 : template,
        9 : template,
    }
    return getPicture(number / 3, newTemplate)
}

const result = getPicture(input, {
    1 : '*',
    2 : '*',
    3 : '*',
    4 : '*',
    5 : ' ',
    6 : '*',
    7 : '*',
    8 : '*',
    9 : '*',
})
console.log(result)
