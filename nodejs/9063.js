let sites = require('fs').readFileSync('input.txt').toString().split('\n')
const T = Number(sites.shift())
// const [T, sites] = ['1', ['15 13']]

let xSites = []
let ySites = []

for(let i=0;i<Number(T);i++){
    const [X,Y] = sites.shift().split(' ').map(x=>Number(x))
    xSites.push(X)
    ySites.push(Y)
}
const WIDTH = Math.max(...xSites) - Math.min(...xSites)
const HEIGHT = Math.max(...ySites) - Math.min(...ySites)

console.log(WIDTH * HEIGHT)