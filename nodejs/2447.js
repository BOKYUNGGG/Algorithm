// const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const input = 9


const library = {
}
function getTemplate(size){
    if(library[size]) return library[size]
    const newSize = size / 3
    const book = Array.from({length : 9}, (_, index)=>{
        if(index === 5) return
        else return library[newSize]
    })

    const newTemplate = library[size / 3].map((element,index) => {

    })
}




getTemplate(9)

// ***
// * *
// ***

// *********
// * ** ** *
// *********
// ***   ***
// * *   * *
// ***   ***
// *********
// * ** ** *
// *********

