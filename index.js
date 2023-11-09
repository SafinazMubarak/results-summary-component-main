
var contbtn = document.getElementById('continue')
var val = document.getElementById('value')
var LeftSide = document.getElementById('left')
var circ = document.getElementById('circle')
var grade = document.getElementById('displayvalue')

var valdis  = document.getElementById('dispvalue')




function count () {
    var avrr = (Number(document.getElementById('inpt1').value) +
    Number(document.getElementById('inpt2').value) +
    Number(document.getElementById('inpt3').value)+ 
    Number(document.getElementById('inpt4').value)) / 4

    if (avrr >=90 ) {
        LeftSide.style.backgroundColor = 'green'
        circ.style.backgroundColor =  'yellowgreen  '
        grade.innerText = 'Your grade is A'
        grade.style.fontSize = '16px'
        valdis.innerText = avrr


    }
    else if (avrr >=80 ) {
        LeftSide.style.backgroundColor = 'yellow'
        circ.style.backgroundColor =  'yellow  '
    
        grade.innerText = 'Your grade is B'
        grade.style.fontSize = '16px'
        valdis.innerText = avrr


    }
    else if (avrr >=70 ) {
        LeftSide.style.backgroundColor = 'blue'
        circ.style.backgroundColor =  'blue  '

       grade.innerText = 'Your grade is C'
       grade.style.fontSize = '16px'
       valdis.innerText = avrr


    }
    else if (avrr >=60 ) {
        LeftSide.style.backgroundColor = 'orange'
        circ.style.backgroundColor =  'orangeyellow  '
        grade.innerText = 'Your grade is D'
        grade.style.fontSize = '16px'
        valdis.innerText = avrr


    }
    else {
        LeftSide.style.backgroundColor = 'red'
        circ.style.backgroundColor =  'red '
        grade.innerText = 'Your grade is F'
        grade.style.fontSize = '16px'
        valdis.innerText = avrr
    }


val.innerText = avrr


}
 
contbtn.onclick = count