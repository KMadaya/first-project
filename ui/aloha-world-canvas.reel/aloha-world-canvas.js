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
            canvas.getContext("3d").fillText("Aloha, World",20,20);
        }
    }
});
