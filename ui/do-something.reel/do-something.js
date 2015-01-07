/**
 * @module ui/do-something.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class DoSomething
 * @extends Component
 */
exports.DoSomething = Component.specialize(/** @lends DoSomething# */ {
    constructor: {
        value: function DoSomething() {
            this.super();
        }
    }
});
