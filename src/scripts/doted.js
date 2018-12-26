'use strict';
/*jslint browser:true */
/*global d3*/

function dan_make_graph(DOTstring) {

    var total = document.getElementById('flex-container').offsetWidth;
    var left = document.getElementById('inner-left').getBoundingClientRect().width;
    var w = total - left;

    d3.select("#mynetwork")
        .graphviz()
            .width(w)
            .fit(true)
            .zoom(false)
                .renderDot(DOTstring);

}

var detectResize = (function() {

    function detectResize(id, intervall, callback) {
      this.id = id;
      this.el = document.getElementById(this.id);
      this.callback = callback || function(){};
  
      if (this.el) {
        var self = this;
        this.width = this.el.clientWidth;
        this.height = this.el.clientHeight;
  
        this.el.addEventListener('mouseup', function() {
          self.detectResize();
        });
  
        this.el.addEventListener('keyup', function() {
          self.detectResize();
        });
  
        if(intervall) setInterval(function() {
            self.detectResize();
        }, intervall);
  
      }
      return null;
    }
  
    detectResize.prototype.detectResize = function() {
        if (this.width != this.el.clientWidth || this.height != this.el.clientHeight) {
          this.callback(this);
          this.width = this.el.clientWidth;
          this.height = this.el.clientHeight;
        }
    };
  
    return detectResize;
  
  })();

function update(ev) {
    var target = ev.currentTarget;
    if (target !== null) {
        dan_make_graph(target.value);
    }
}

window.onload = function () {
    var mytext = document.getElementById('mytext');
    var redrawbutton = document.getElementById('redraw-button');

    redrawbutton.onclick = function() {
        dan_make_graph(mytext.value);
    };

    mytext.oninput = update;
    dan_make_graph(mytext.value);
};

window.onresize = function () {
    var mytext = document.getElementById('mytext');
    if (mytext !== null) {
        dan_make_graph(mytext.value);
    } 
};