import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from '../services/data.service';
import { Position } from '../models/position';
import { User } from '../models/user';
import { MLM } from '../models/mlm';
import { Constants } from '../shared/constants';

@Component({
  selector: 'app-mlm',
  templateUrl: './mlm.component.html',
  styleUrls: ['./mlm.component.scss']
})

export class MlmComponent implements OnInit {
  id:number;
  games: MLM[];
  currentUser: User|null = null;
  users = [];
  disUser:User;
  json_users:User[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {
    this.id = this.route.snapshot.params['id'];
    if(!this.id) {
      return;
    }

    this.currentUser = this.dataService.getCurrentUser();
    this.games = this.dataService.getGames();
    this.disUser = this.getUsers()[this.id-1];

    for(let game of this.games) {
      let user = game.findUserByID(this.id);
      if(user) {
        this.users.push({
          game_id: game.id,
          user: user,
          matrix: user.matrix.getMatrix(),
          isCompleted: user.matrix.isCompleted()
        });
      } else {
        this.users.push({
          game_id: game.id,
          user: this.currentUser,
          matrix: game.getEmptyMatrix()
        });
      }
    }
  }

  ngOnInit(): void {
  }

  join(user, index) {
    this.games[index].joinUser(user, this.currentUser);
    this.dataService.updateGame(this.games[index]);
  }

  reward(index) {
    console.log('You rewarded!');
    let user = this.games[index].findUserByID(this.id);
    this.games[index].completeUserMatrix(user);
    this.dataService.updateGame(this.games[index]);
  }

  go(id) {
    location.href = '/' + id;
  }
  
  getUsers() {
    let string_users = localStorage.getItem('users')
    const userArr = JSON.parse(string_users);
    for (var user of userArr) {
      let userInstance = new User(
        user.id,
        user.name,
        user.parent,
        user.points,
        user.matrix.matrix
      );
      this.json_users.push(userInstance);
    }
    return this.json_users;
  }
}
