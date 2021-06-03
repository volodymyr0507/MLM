"use strict";
exports.__esModule = true;
exports.Matrix = void 0;
var Matrix = /** @class */ (function () {
    /*int $depth,int $pow */
    function Matrix(dimension) {
        this.depth = dimension.depth;
        this.width = dimension.width;
        this.matrix = [];
        this.generateNest = [];
        var pointer = 1;
        for (var d = 0; d <= this.depth; ++d) {
            this.matrix[d] = [];
            this.generateNest[d] = [];
            for (var n = 0; n < pointer; ++n) {
                this.matrix[d][n] = null;
                this.generateNest[d][n] = 0;
            }
            pointer *= this.width;
        }
        this.generateMatrix = this.matrix;
        this.generateNest[0][0] = [1, this.getNodes(0) * 2];
    }
    Matrix.prototype.recursive = function (d, offset, position) {
        if (offset === void 0) { offset = 0; }
        if (position === void 0) { position = 0; }
        for (var n = 0; n < this.width; ++n) {
            var childs = 2 * this.getNodes(d) * n;
            var left = offset + childs;
            this.generateNest[d][position + n] = left;
            var nextOffset = left + 1;
            if (d < this.depth) {
                this.recursive(d + 1, nextOffset, this.width * (position + n));
            }
        }
        console.log(this.generateNest);
    };
    /* @return int */
    Matrix.prototype.getDepth = function () { return this.depth; };
    /* @return int */
    Matrix.prototype.getWidth = function () { return this.width; };
    Matrix.prototype.addTenant = function (call) {
        for (var d = 0; d <= this.depth; ++d) {
            var isAdded = false;
            for (var n = 0; n <= Math.pow(this.width, d); ++n) {
                if (this.generateMatrix[d][n] === null) {
                    this.generateMatrix[d][n] = call.name;
                    // this.generateMatrix[d][n] = {id: count, data: call.name, level: d, left: lft, right: rgt};
                    console.log(this.generateMatrix);
                    isAdded = true;
                    break;
                }
            }
            if (isAdded) {
                break;
            }
        }
    };
    Matrix.prototype.getNodes = function (d) {
        var count;
        count = (Math.pow(this.width, this.depth - d + 1) - 1) / (this.width - 1);
        return count;
    };
    return Matrix;
}());
exports.Matrix = Matrix;
