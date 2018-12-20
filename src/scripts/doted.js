

function dan_make_graph(DOTstring) {

    const w = document.getElementById('mynetwork').getBoundingClientRect().width;

    const gv = d3.select("#mynetwork")
        .graphviz();

    gv.width(w)
    gv.fit(true)
    gv.zoom(false);

    gv.renderDot(DOTstring);

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
