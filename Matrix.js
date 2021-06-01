"use strict";
exports.__esModule = true;
exports.Matrix = void 0;
/**
 * Class Matrix
 *
 * @package Nepster\Matrix
*/
var Matrix = /** @class */ (function () {
    /**
    * Matrix constructor.
    * @param int $depth
    * @param int $pow
    */
    function Matrix(depth, width) {
        this.depth = depth;
        this.width = width;
        this.matrix = [];
        var pointer = 1;
        for (var d = 0; d <= this.depth; ++d) {
            this.matrix[d] = [];
            for (var n = 0; n < pointer; ++n) {
                this.matrix[d][n] = null;
            }
            pointer *= this.width;
        }
        this.generateMatrix = this.matrix;
    }
    /**
    * @return int
    */
    Matrix.prototype.getDepth = function () { return this.depth; };
    /**
    * @return int
    */
    Matrix.prototype.getWidth = function () { return this.width; };
    /**
    * @return int
    */
    Matrix.prototype.toArray = function () { return this.generateMatrix; };
    Matrix.prototype.addTenant = function (coord, call) {
        if (coord === null) {
            for (var d = 0; d <= this.depth; ++d) {
                var isAdded = false;
                for (var n = 0; n <= this.width; ++n) {
                    if (this.generateMatrix[d][n] === null) {
                        this.generateMatrix[d][n] = call;
                        isAdded = true;
                        break;
                    }
                }
                if (isAdded)
                    break;
            }
        }
    };
    return Matrix;
}());
exports.Matrix = Matrix;
