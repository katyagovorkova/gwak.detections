
fetch('data.json').then((res) => res.json()).then((data) => {
    const layout = {
        title: "GPS Data",
        xaxis: {
            title: "Date"
        },
        yaxis: {
            title: "Value"
        }
    };

    Plotly.newPlot('plot', data, layout);
    document.getElementById('plot').on('plotly_click', function(data){

        var pts = '';
        for(var i=0; i < data.points.length; i++){
            pts = 'x = '+data.points[i].x +'\ny = '+
                data.points[i].y.toPrecision(4) + '\n\n';
        }

        show_image(`data/${data.points[0].data.file[data.points[0].pointNumber]}`);

    });
});

function show_image(src){
    const backdrop = document.createElement('div');
    backdrop.classList.add('backdrop');
    backdrop.addEventListener('click', function(){
        this.remove();
    });

    const img = document.createElement('img');
    img.setAttribute('src', src);

    backdrop.appendChild(img);
    document.body.appendChild(backdrop);
}
