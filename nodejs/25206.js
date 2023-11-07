const input = `BruteForce 3.0 F
Greedy 1.0 F
DivideandConquer 2.0 F
DynamicProgramming 3.0 F
DepthFirstSearch 4.0 F
BreadthFirstSearch 3.0 F
ShortestPath 4.0 F
DisjointSet 2.0 F
MinimumSpanningTree 2.0 F
TopologicalSorting 1.0 F
LeastCommonAncestor 2.0 F
SegmentTree 4.0 F
EulerTourTechnique 3.0 F
StronglyConnectedComponent 2.0 F
BipartiteMatching 2.0 F
MaximumFlowProblem 3.0 F
SuffixArray 1.0 F
HeavyLightDecomposition 4.0 F
CentroidDecomposition 3.0 F
SplayTree 1.0 F`.split('\n')
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const board = {
    ['A+'] : 4.5,
    ['A0'] : 4.0,
    ['B+'] : 3.5,
    ['B0'] : 3.0,
    ['C+'] : 2.5,
    ['C0'] : 2.0,
    ['D+'] : 1.5,
    ['D0'] : 1.0,
    ['F'] : 0.0,
}
let 학점합 = 0
let 평점합 = 0
for(let i=0;i<input.length;i++){
    const [과목명, 학점, 평점] = input[i].split(' ')
    // P
    if(평점 === 'P'){
        continue
    }
    else {
        학점합 += Number(학점)
        평점합 += Number(학점) * Number(board[평점])
    }
}
console.log((평점합 / 학점합).toFixed(5))
