import { Coord } from "./Coord";
/**
 * Class Matrix
 *
 * @package Nepster\Matrix
*/
export class Matrix {
  /**
  * Number of levels
  * Don't specify a large number (it is recommended 3 or 4)
  * @var int
  */
  private depth:number;
  /**
  * Pointer to the power (binary matrix, cubic matrix etc.)
  * Don't specify a large number (it is recommended 2 or 3)
  * @var int
  */
  private width:number;
  /**
  * @var int
  */
  private generateMatrix;
  private matrix:number[][];
  /**
  * Matrix constructor.
  * @param int $depth
  * @param int $pow
  */
  constructor(depth:number, width:number) {
    this.depth = depth;
    this.width = width;
    this.matrix = [];
 
    var pointer = 1;
    for (var d:number = 0; d <= this.depth; ++d) {
      this.matrix[d] = [];
      for (var n:number = 0; n < pointer; ++n) {
        this.matrix[d][n] = null;
      }
      pointer *= this.width;
    }
    this.generateMatrix = this.matrix;
  }
  /**
  * @return int
  */
  getDepth() {return this.depth;}
  /**
  * @return int
  */
  getWidth() {return this.width;}
  /**
  * @return int
  */
  toArray(){return this.generateMatrix;}


  addTenant(coord:Coord|null, call:string):void {

    if(coord === null) {
      for(var d:number = 0; d <= this.depth; ++d){
        var isAdded = false;
        for(var n:number = 0; n <= this.width; ++n){
          if(this.generateMatrix[d][n] === null) {
            this.generateMatrix[d][n] = call;
            isAdded = true;
            break;
          }
        }
        if(isAdded)
          break;
      }
    }
  }

}

 

