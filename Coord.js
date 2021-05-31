"use strict";
exports.__esModule = true;
exports.Coord = void 0;
var Coord = /** @class */ (function () {
    /**
     * Coord constructor.
     * @param int $depth
     * @param int $index
    */
    function Coord(depth, index) {
        this.depth = depth;
        this.index = index;
    }
    /**
     * @return int
    */
    Coord.prototype.getDepth = function (int) {
        return this.depth;
    };
    /**
     * @return int
    */
    Coord.prototype.getIndex = function (int) {
        return this.index;
    };
    return Coord;
}());
exports.Coord = Coord;
