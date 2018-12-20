

function dan_make_graph(DOTstring) {

    const w = document.getElementById('mynetwork').getBoundingClientRect().width;

    d3.select("#mynetwork")
        .graphviz() 
            .width(w)
            .fit(true)
            .zoom(false)
                .renderDot(DOTstring);

}

function update(ev) {
    const target = ev.currentTarget;
    if (target != null)
        dan_make_graph(target.value);
    
}

window.onload = function() {
    const mytext = document.getElementById('mytext');
    if (mytext != null) {
        mytext.oninput = update;
        dan_make_graph(mytext.value);
    }
}
