import { graphviz } from 'd3-graphviz';
import * as d3 from 'd3';

function make_graph(DOTstring: string) {

    graphviz("#mynetwork")        
        .renderDot(DOTstring);
}

function update(ev: Event) {
    const target = <HTMLInputElement> ev.currentTarget;
    if (target != null)
        make_graph(target.value);
    
}

window.onload = function() {
    const mytext = <HTMLInputElement> document.getElementById('mytext');
    if (mytext != null) {
        mytext.oninput = update;
        make_graph(mytext.value);
    }
}
