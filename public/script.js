function plotPoint(x0, y0, x, y) {
    
    const existingPoints = document.querySelectorAll('.point');
    existingPoints.forEach(p => p.remove());

    document.getElementById('in1').innerHTML = x0 + " " + y0 + " " + x + " " + y;

    var point = document.createElement('div');  
    point.className = 'point';

    point.style.left = (x - x0 + 200 - 5) + 'px'; 
    point.style.bottom = (y - y0 + 200 - 5) + 'px'; 

    document.getElementById('coordinatePlane').appendChild(point);

    let result = "";
    if (x === x0 || y === y0) {
        result = "divisa";
    }
    else if (x > x0 && y > y0) {
        result = "NE";
    }
    else if (x < x0 && y < y0) {
        result = "SO";
    }
    else if (x > x0 && y < y0) {
        result = "SE";
    }
    else if (x < x0 && y > y0) {
        result = "NO";
    }

    document.getElementById('out1').innerHTML = result;
}