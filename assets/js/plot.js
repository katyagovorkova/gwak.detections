    const layout = {
        title: "GWAK Detections",
        xaxis: {
            title: "Date"
        },
        yaxis: {
            title: "FAR"
        }
    };

let go_fetch=(filename)=>{
fetch(filename).then((res) => res.json()).then((data) => {


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
let boolean = true
let ds_selection = ()=> {
    if (boolean){
        document.getElementsByClassName("button")[0].innerHTML = "bryan lol"
        go_fetch('data_ryan.json')
    }
    else{
        document.getElementsByClassName("button")[0].innerHTML = "moreno"
        go_fetch('data_moreno.json')
    }
}

document.getElementsByClassName("button")[0].addEventListener('click', function(){

    boolean = !boolean
    ds_selection();


})

    ds_selection();


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
