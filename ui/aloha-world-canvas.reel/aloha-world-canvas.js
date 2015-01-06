/**
 * @module ui/aloha-world-canvas.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class AlohaWorldCanvas
 * @extends Component
 */
exports.AlohaWorldCanvas = Component.specialize(/** @lends AlohaWorldCanvas# */ {
    constructor: {
        value: function AlohaWorldCanvas() {
            this.super();
        }
        
    },
    
    draw:{
        value: function(){
            var canvas = this.element.querySelector('canvas');
            var cxt = canvas.getContext("2d");
            cxt.font = "30px Arial";
            cxt.fillText("Aloha, World",200,200);
        }
    }
});
