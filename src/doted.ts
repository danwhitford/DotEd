import * as vis from 'vis';

function make_graph(DOTstring: String) {
    var parsedData = (<any>vis).network.convertDot(DOTstring);

    var data: vis.Data = {
        nodes: parsedData.nodes,
        edges: parsedData.edges
    }

    var options: vis.Options = parsedData.options;

    // you can extend the options like a normal JSON variable:
    options.nodes = {
        color: 'red'
    }

    // create a network
    var container = document.getElementById('mynetwork');
    if (container != null) 
        var network = new vis.Network(container, data, options);
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
