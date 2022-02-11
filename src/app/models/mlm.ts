import { User } from './user';
import { Matrix } from './matrix';
import { Position } from './position';

export class MLM {
  id: number;
  points: number;
  depth: number;
  width: number;
  users: User[] = [];
  constructor(
    options: any
  ) {
    this.id = options.id;
    this.points = options.points;
    this.depth = options.depth;
    this.width = options.width;
  }

  findUserByID(id: number): User|null {
    return this.users.find(user => user.id == id);
  }

  updateUser(user: User) {
    const index = this.users.findIndex(u => user.id == u.id);
    this.users[index] = user;
    this.saveUsers();
  }
  validation(user: User){
    if(user.points < this.points){
      console.log("user.points", user.points);
      console.log("this.points", this.points);
      console.log("you don’t have enough points");
      return false;
    }
    return true;
  }

  joinUser(parent: User, user: User) {
    //point validation
    if(this.validation(user)){
      // Check if user already joined
      if(this.checkJoin(parent, user)) {
        // add new user
        if(parent.id == user.id) {
          user.matrix.addTenant(null, user);
          this.users.push(user);
        } else {
          // update parents
          let originParent = parent;
          let originIndex = 0;
          let originDepth = 0;
          let prevParent = parent;
          let index = 0;
          let positionParent = null;
          let firstParent = null;
          let userInFirstParent = null;
          do {
            let currentPos = parent.matrix.addTenant(positionParent, user);

            if(index == 0) {
              // user.parent = parent.id;
              user.matrix.addTenant(null, user);
              this.users.push(user);
              originDepth = currentPos.depth;
              originIndex = currentPos.index;

              firstParent = parent.matrix.getParent(originDepth, originIndex);

              // update children
              let middleParent = this.findUserByID(firstParent.user_id);
              while(parent.id !== middleParent.id) {
                middleParent.matrix.addTenant(null, user);
                middleParent = this.findUserByID(middleParent.parent);
              }

              userInFirstParent = this.findUserByID(firstParent.user_id).matrix.getChildById(user.id);
              user.parent = firstParent.user_id;
            }
            index++;

            this.updateUser(parent);

            if (parent.parent) {
              prevParent = parent;
              let newParent = this.findUserByID(parent.parent);
              if(newParent) {
                  parent = newParent;
              }
            } else {
              break;
            }

            // Find position in parent matrix
            let resultParent: any = parent.matrix.getChildById(firstParent.user_id);
            if(resultParent) {
              positionParent = new Position(
                userInFirstParent.level + resultParent.level,
                resultParent.index * this.width + userInFirstParent.index
              );
            }
          } while(prevParent.parent != null)
        }

        // move points
        if(parent.id == user.id) {
          user.points -= this.points;
          console.log(user.name + ' sent points ' + this.points);
          this.updateUser(user);
        } else {
          user.points -= this.points;
          console.log(user.name + ' sent points ' + this.points);
          let parent = this.findUserByID(user.parent);
          parent.points += this.points/2;
          console.log(parent.name + ' received points ' + this.points/2);
          this.updateUser(parent);
          let parentsParent = this.findUserByID(parent.parent);
          if(parentsParent) {
            parentsParent.points += this.points/2;
            console.log(parentsParent.name + ' received points ' + this.points/2);
            this.updateUser(parentsParent);
          }
        }
      }
    }
  }

  checkJoin(parent: User, user: User) {
    const parentMatrix = parent.matrix.getMatrix();
    for(let d = 0; d <= this.depth; ++d){
      for(let n = 0; n <= Math.pow(this.width, d); ++n){
        if(parentMatrix[d][n] && parentMatrix[d][n].user_id === user.id){
          console.log("User already joined to this matrix!");
          return false;
        }
      }
    }
    return true;
  }

  completeUserMatrix(user: User) {
    const children = user.matrix.getMatrix()[1];
    for(let user of children) {
      let child = this.findUserByID(user.user_id);
      child.parent = null;
      this.updateUser(child);
    }
    user.matrix.clear();
    this.updateUser(user);
  }

  getEmptyMatrix() {
    const matrix = new Matrix({depth: this.depth, width: this.width});
    return matrix.getMatrix();
  }
  saveUsers() {
    let string_users = localStorage.getItem('users')
    let json_users:User[] = [];
    const userArr = JSON.parse(string_users);
    for (var user of userArr) {
      let userInstance = new User(
        user.id,
        user.name,
        user.parent,
        user.points,
        user.matrix.matrix
      );
      json_users.push(userInstance);
    }
    let temp;
    for(let i = 0; i < this.users.length; i++){
      for(let j = 0; j < json_users.length; j++){
        if(json_users[j].name == this.users[i].name){
          json_users[j].points = this.users[i].points;
        }
      }
    }
    localStorage.setItem('users', JSON.stringify(json_users));
    return json_users;
  }
}