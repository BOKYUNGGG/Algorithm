function navigateCircularStructure(obj, targetKey, steps) {
    const visited = new Set();
  
    function dfs(currentObj, currentPath, currentSteps) {
      if (currentSteps === steps) {
        console.log('찾음 : ', currentObj)
        return currentObj;
      } 
      console.log('=============================')
      console.log('current Object ', currentObj)
      console.log('current Path ', currentPath)
      console.log('current Steps ', currentSteps)
      
      if (typeof currentObj === 'object' && currentObj !== null) {
        visited.add(currentObj);
  
        for (const [key, value] of Object.entries(currentObj)) {
          const newPath = [...currentPath, key];
  
          if (!visited.has(value)) {
            dfs(value, newPath, currentSteps + 1);
          }
        }
      }
    }
  
    return dfs(obj, [], 0);
  }
  
const obj1 = { 
    aValue : 'a',
    a: { 
        bValue : 'b',
        b: { 
            cValue : 'c',
            c: {
                temp : 'asd',
                hello : 'world'
            } 
        } 
    } 
};
  obj1.circularRef = obj1;
  console.log(navigateCircularStructure(obj1, 'circularRef', 3))