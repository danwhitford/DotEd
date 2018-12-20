'use strict';
/*jslint browser:true */
/*global d3*/

function dan_make_graph(DOTstring) {

    var w = document.getElementById('mynetwork').getBoundingClientRect().width;
    var h = document.getElementById('mynetwork').getBoundingClientRect().height;

    d3.select("#mynetwork")
        .graphviz()
            .width(w)
            .fit(true)
            .zoom(false)
                .renderDot(DOTstring);

}

function update(ev) {
    var target = ev.currentTarget;
    if (target !== null) {
        dan_make_graph(target.value);
    }
}

window.onload = function () {
    var mytext = document.getElementById('mytext');
    if (mytext !== null) {
        mytext.oninput = update;
        dan_make_graph(mytext.value);
    }
};
