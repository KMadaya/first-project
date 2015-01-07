
/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },
    //defaultValue: {
    //    value: "Aloha"
    //},

    handleIncrementAction: {
        value: function (event) {
            var value = Number(this.templateObjects.Total.element.textContent);
            this.templateObjects.Total.element.textContent = value + 1;
        }
    },

    handleDecrementAction: {
        value: function (event) {
            var value = Number(this.templateObjects.Total.element.textContent);
            this.templateObjects.Total.element.textContent = value - 1;
        }
    },

    handlePLUSAction: {
        value: function (event) {
        }
    },

    handleMINUSAction: {
        value: function (event) {
        }
    }

});
