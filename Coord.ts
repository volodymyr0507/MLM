export class Coord {
  /**
   * @var int
   */
  private depth:number;
  /**
   * @var int
   */
  private index:number;
  /**
   * Coord constructor.
   * @param int $depth
   * @param int $index
  */
  constructor (depth:number, index:number) 
  {
    this.depth = depth;
    this.index = index;
  }
  /**
   * @return int
  */
  getDepth(int) 
  {
    return this.depth;
  }
  /**
   * @return int
  */
  getIndex(int) 
  {
    return this.index;
  }

}