
interface NestModel{
  id: number,
  data: string,
  level: number,
  left: number,
  right: number   
}
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

  private generateMatrix;
  private generateNest;
  private matrix:number[][];

  /*int $depth,int $pow */
  constructor(dimension) {
    this.depth = dimension.depth;
    this.width = dimension.width;
    this.matrix = [];
    this.generateNest = [];
    var pointer = 1;
    for (var d:number = 0; d <= this.depth; ++d) {
      this.matrix[d] = [];
      this.generateNest[d] = [];
      for (var n:number = 0; n < pointer; ++n) {
        this.matrix[d][n] = null;
        this.generateNest[d][n] = 0;
      }
      pointer *= this.width;
    }
    this.generateMatrix = this.matrix;
    this.generateNest[0][0]=[1,this.getNodes(0)*2];
  }
  recursive(d:number, offset: number = 0, position: number = 0){
    for (var n:number = 0; n < this.width; ++n) {
      let childs = 2 * this.getNodes(d) * n;
      let left = offset + childs;
      this.generateNest[d][position + n] = left;
      let nextOffset = left + 1;
      if(d < this.depth) {
          this.recursive(d+1, nextOffset, this.width * (position + n));
      }
    }

  }
  /* @return int */
  getDepth() {return this.depth;}

  /* @return int */
  getWidth() {return this.width;}



  addTenant(call):void{

      for(var d:number = 0; d <= this.depth; ++d){
        var isAdded = false;

        for(var n:number = 0; n <= Math.pow(this.width,d); ++n){
          if(this.generateMatrix[d][n] === null) {
            this.generateMatrix[d][n] = call.name;
            // this.generateMatrix[d][n] = {id: count, data: call.name, level: d, left: lft, right: rgt};
            console.log(this.generateMatrix);
            isAdded = true;         
            break;
          }
        }
        if(isAdded)
          {break;}
      }
  }
  getNodes(d){
    var count;
    count = (Math.pow(this.width, this.depth-d+1)-1)/(this.width - 1);
    return count;
  }
  
}


