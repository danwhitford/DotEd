'use strict';
/*jslint browser:true */
/*global d3*/

function dan_make_graph(DOTstring) {

    var total = document.getElementById('flex-container').offsetWidth;
    var left = document.getElementById('inner-left').getBoundingClientRect().right;
    var w = total - left;

    console.log(total, left,)

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

window.onresize = function () {
    var mytext = document.getElementById('mytext');
    if (mytext !== null) {
        mytext.oninput = update;
        dan_make_graph(mytext.value);
    } 
};
