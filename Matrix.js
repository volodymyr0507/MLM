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
    /**
    * Checks if matrix position is free
    *
    * @param Coord $coord
    * @return bool
    * @throws IncorrectCoordinatesMatrixException
    */
    /*  hasTenant(coord:Coord){
        if(this.isValidCoord(coord) === false) {
    
        }
        foreach ((generateMatrix)=>{this.generateMatrix.depth}){
          if(d === coord.getDepth()){
            foreach((depth)=>{depth.n,depth.index}) {
              if (coord.getIndex() === n){
                if(this.generateMatrix[d][n] === null){
                  return false;
                }
              }
            }
          }
        }
        return true;
      }*/
    /**
    * Take this matrix position
    *
    * @param Coord|null $coord
    * @param callable $tenant
    * @throws FilledMatrixException
    * @throws IncorrectCoordinatesMatrixException
    * @throws MatrixException
    * @throws UnavailablePositionException
    */
    Matrix.prototype.addTenant = function (coord, value) {
        var _this = this;
        if (coord === null) {
            this.generateMatrix.forEach(function (depth, d) {
                depth.forEach(function (index, n) {
                    if (index === null) {
                        // console.log(n + "*");
                        // console.log(d);
                        var result = value;
                        _this.generateMatrix[d][n] = result;
                        return;
                        // console.log(this.generateMatrix);
                    }
                });
            });
        }
        else {
            this.generateMatrix.forEach(function (depth, d) {
                if (d === coord.getDepth()) {
                    depth.forEach(function (index, n) {
                        if (coord.getIndex() === n) {
                            var result;
                            _this.generateMatrix[d][n] = result;
                        }
                    });
                }
            });
        }
    };
    return Matrix;
}());
exports.Matrix = Matrix;
