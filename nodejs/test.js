const stringNumber = '666'.split('')
const length = stringNumber.length
for(let i=0;i<length;i++){
    for(let j=i+1;j<length;j++){
        for(let k=j+1;k<length;k++){
            console.log(i,j,k)
            const temp =[stringNumber[i],stringNumber[j],stringNumber[k]].join('')

            
            if(temp === '666'){
                console.log(stringNumber)
            }
        }
    }
}