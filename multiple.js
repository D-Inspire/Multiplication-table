let Btn = document.getElementById('btn');
let output = document.getElementById('output');
console.log(33)

function calc(){
    let div = document.createElement('div')
    for(let m = 3; m <= 4; m +=1){
        for(let n = 1; n <= 12; n +=1){
            let p = m * n;
            let y = document.createElement('p');

            y.innerHTML = (m + ' X ' + n + ' = ' + p);
            div.appendChild(y);
        };
        output.appendChild(div);
    };
}
calc()