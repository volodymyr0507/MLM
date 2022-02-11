import { Matrix } from './matrix';
import { Dimension } from './dimension';
import { Constants } from '../shared/constants';

export class User {
  id: number;
  name: string;
  parent: number|null;
  points: number;
  matrix: Matrix;

  constructor(
    id: number,
    name: string,
    parent: number|null,
    points: number,
    matrix: any = null
  ){
    this.id = id;
    this.name = name;
    this.parent = parent;
    this.points = points;
    const dimension = new Dimension(Constants.DEPTH, Constants.WIDTH);
    if(matrix) {
        let matrixInstance = new Matrix(dimension);
        matrixInstance.setMatrix(matrix);
        this.matrix = matrixInstance;
    } else {
        this.matrix = new Matrix(dimension);
    }
  }
}