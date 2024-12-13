let onoff = false;

var tabla = document.getElementById("tabla")

const xArray = ["Oszlop 1", "Oszlop 2", "Oszlop 3"];
const yArray = [];


function onStart() {
    for (var index = 0; index < 9; index++) {
        yArray.push(Math.floor(Math.random()*10));
        
    }
    document.getElementById("tabla").innerHTML = "<tr><th>Oszlop1</th><th>Oszlop2</th><th>Oszlop3</th></tr>"+"<tr>"+"<td>"+yArray[0].toString()+"</td>"+"<td>"+yArray[1].toString()+"</td>"+"<td>"+yArray[2].toString()+"</td>"+"</tr>" +"<tr>"+"<td>"+yArray[3].toString()+"</td>"+"<td>"+yArray[4].toString()+"</td>"+"<td>"+yArray[5].toString()+"</td>"+"</tr>" +"<tr>"+"<td>"+yArray[6].toString()+"</td>"+"<td>"+yArray[7].toString()+"</td>"+"<td>"+yArray[8].toString()+"</td>"+"</tr>";
    const yArray1 = [yArray[0]+yArray[1]+yArray[2],yArray[3]+yArray[4]+yArray[5],yArray[6]+yArray[7]+yArray[8]];
    
    const data = [{
    x: xArray,
    y: yArray1,
    type: "bar",
    orientation:"v",
    marker: {color:"rgba(0,0,255)"}
    
    }];
    
    
    
    const layout = {title:"A táblázat"};
    
    
    Plotly.newPlot("myPlot", data, layout);

}


function showchart() {
    if (onoff) {
        document.getElementById("chart").style.transition = "opacity 2s";
        document.getElementById("chart").style.opacity = 0
        onoff = false
    }
    else{
        document.getElementById("chart").style.opacity = 1
        onoff = true
    }
    
}

