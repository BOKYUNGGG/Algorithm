const rl = require('readline').createInterface(process.stdin)
rl.on('line', (line)=>{
    let count = 0
    
    for(let i=0;i<line.length;i++){
        count = count + getSubstrings(line.split(''), i+1).size
    }
    console.log(count)
    rl.close()
})

function getSubstrings(string, length){
    const set = new Set()
    for(let i=0;i+length<=string.length;i++){
        set.add(string.slice(i,i+length).join(''))
    }
    return set
}