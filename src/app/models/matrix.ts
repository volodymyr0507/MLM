import { Dimension } from './dimension';
import { User } from './user';
import { Position } from './position';
export class Matrix {

  public depth:number;
  public width:number;

  private count:number = 1;
  private ddd:number = 0;
  private iii:number = 0;

  private matrix:any|null[][];
  private generateNest:any;

  /**
   * Contructor  
   */
  constructor(dimension:Dimension) {
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
    this.generateNest[0][0]=[1,this.getNodes(0)*2];

    this.initNodes(1, 2, 0);
  }

  /**
   * Initialize nodes
   */
  initNodes(d:number, offset: number = 0, position: number = 0){
    for (var n:number = 0; n < this.width; ++n) {
      let childs = 2 * this.getNodes(d) * n;
      let left = offset + childs;
      let right = left + 2 * this.getNodes(d) - 1;
      this.generateNest[d][position + n] = [left, right];
      let nextOffset = left + 1;
      if(d < this.depth) {
        this.initNodes(d+1, nextOffset, this.width * (position + n));
      }
    }
  }


  /**
   * Add a node  
   */

  addTenant(position:Position|null, node:User) {
    if(position == null){
      for(var d:number = 0; d <= this.depth; ++d){
        var isAdded = false;
        for(var n:number = 0; n <= Math.pow(this.width,d); ++n){
          if(this.matrix[d][n] && this.matrix[d][n].name === node.name){
            isAdded = true;
            // console.log("User already joined to this matrix!");
            break;
          } else if(this.matrix[d][n] === null) {
            this.matrix[d][n] = {id: this.count, user_id: node.id, name: node.name, points:node.points, level: d, index: n,left: this.generateNest[d][n][0], right: this.generateNest[d][n][1]};
            if(this.matrix[d][n] != 0){
              this.count++;
              this.ddd = d;
              this.iii = n;
            }
            isAdded = true;         
            break;
          }
        }
        if(isAdded)
          {break;}
      }
    } else {
      for(var d=0; d <= this.depth; d++){
        if(d == position.depth){
          for(var n=0; n <= Math.pow(this.width,d); n++){
            if( n == position.index){
              this.matrix[d][n] = {id: this.count, user_id: node.id, name: node.name, points:node.points, level: d, index: n,left: this.generateNest[d][n][0], right: this.generateNest[d][n][1]};
            }
          }
        }
      }
    }

    return {depth:this.ddd, index:this.iii};
  }


  /**
   * Get all parent nodes
   */
  getParents(d:number, n:number){
    var parents=[];
    const node = this.matrix[d][n];
    var dd = d;
    var nn = n;
    while(dd > 0){
      let parent = this.getParent(dd, nn);
      parents.push(parent);
      dd--;
      nn = parent.index;
    }
    return parents.reverse();
  }

  /**
   * Get a parent node
   */
  getParent(d:number, n:number){
    const node = this.matrix[d][n];
    const parents = this.matrix[d-1];
    var index=parents.findIndex(function(parent:any) {
      return parent.right > node.right;
    });
    return parents[index];
  }

  /**
   * Get a child by id
   */
  getChildById(id: number){
    let node = null;
    this.matrix.forEach((row: any, i: any)=>{
      for(let j = 0; j < row.length; j++){ 
        if(row[j] && row[j].user_id == id){
          node = row[j];
          break;
        }
      }
    });

    return node;
  }

  isCompleted() {
    for(var d=0; d <= this.depth; d++){
      for(var n=0; n < Math.pow(this.width, d); n++){
        if(this.matrix[d][n] == null){

          return false;

        }
      }
    }

    return true;
  }

  clear() {
    for(var d=0; d <= this.depth; d++){
      for(var n=0; n < Math.pow(this.width, d); n++){
        this.matrix[d][n] = null;
      }
    }
  }

  /**
   * Get child nodes  
   */
  getNodes(d:number){
    var count;
    count = (Math.pow(this.width, this.depth-d+1)-1)/(this.width - 1);
    return count;
  }

  /**
   * Get generated matrix
   */
  getMatrix(){
    return this.matrix;
  }

  /**
   * Set generated matrix
   */
  setMatrix(matrix: any){
    this.matrix = matrix;
  }
}


