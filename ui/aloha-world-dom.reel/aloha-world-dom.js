/**
 * @module ui/aloha-world-dom.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class AlohaWorldDom
 * @extends Component
 */
exports.AlohaWorldDom = Component.specialize(/** @lends AlohaWorldDom# */ {
    constructor: {
        value: function AlohaWorldDom() {
            this.super();
        }
    },
    
    draw:{
        value: function() {
            var div = document.createElement("div");
            div.textContent = "Aloha World";
            this.element.appendChild(div);
        }
    }
});
