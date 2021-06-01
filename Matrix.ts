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
  addTenant(coord:Coord|null, value:string):void {

    if(coord === null) {
      this.generateMatrix.forEach((depth,d)=>{
       
        depth.forEach((index, n)=>{
          if(index === null) {
       // console.log(n + "*");
       // console.log(d);
       
          var result:string = value;
            this.generateMatrix[d][n] = result;
            return;
            // console.log(this.generateMatrix);
          }
        });
      });
    } else {
      this.generateMatrix.forEach((depth,d)=>{
        if(d === coord.getDepth()) {
          depth.forEach((index, n)=>{
            if(coord.getIndex() === n) {
              var result:string;
              this.generateMatrix[d][n] = result;
            }
          })
        }
      })
    }
  }

  isFilled() {
    this.generateMatrix.forEach((depth,d)=>{
      if()
    })

  }
}

 

