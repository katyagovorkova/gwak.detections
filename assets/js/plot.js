let go_fetch=(filename, title)=>{
fetch(filename).then((res) => res.json()).then((data) => {

const layout = {
        title: title,
        xaxis: {
            title: "Date"
        },
        yaxis: {
            title: "FAR"
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
}
// let boolean = true
// let ds_selection = ()=> {
//     if (boolean){
//         document.getElementsByClassName("button")[0].innerHTML = "O3a analysis"
//         go_fetch('data_ryan.json', 'O3a GWAK Detections')
//     }
//     else{
//         document.getElementsByClassName("button")[1].innerHTML = "BURST Challenge"
//         go_fetch('data_moreno.json', 'Burst GWAK Detections')
//     }
// }

document.getElementsByClassName("button")[0].addEventListener('click', function(){
    document.getElementsByClassName("button")[0].innerHTML = "O3a analysis"
    go_fetch('data_ryan.json', 'O3a GWAK Detections')
})
document.getElementsByClassName("button")[1].addEventListener('click', function(){
    document.getElementsByClassName("button")[1].innerHTML = "BURST Challenge"
    go_fetch('data_moreno.json', 'Burst GWAK Detections')
})
document.getElementsByClassName("button")[0].innerHTML = "O3a analysis"
go_fetch('data_ryan.json', 'O3a GWAK Detections')


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
