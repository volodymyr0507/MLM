import { Injectable } from '@angular/core';

import { MLM } from '../models/mlm';
import { User } from '../models/user';
import { Data } from '../shared/data';

@Injectable({ providedIn: 'root' })
export class DataService {

  games: MLM[] = [];
  users: User[] = [];

  constructor() {
    // Initalize users
    const users = localStorage.getItem('users');
    if(users) {
      const userArr = JSON.parse(users);
      for (var user of userArr) {
        let userInstance = new User(
          user.id,
          user.name,
          user.parent,
          user.points,
          user.matrix.matrix
        );
        this.users.push(userInstance);
      }
    } else {
      this.users = Data.USERS;
      this.saveUsers();
    }

    // Initialize games
    const gamesData = localStorage.getItem('games');
    if(gamesData) {
      const games = JSON.parse(gamesData);
      for(let game of games) {
        let gameInstance = new MLM({
          id: game.id,
          points: game.points,
          depth: game.depth,
          width: game.width
        });

        // add users
        if(game.users) {
          let users: User[] = [];
          for (var user of game.users) {
            let userInstance = new User(
              user.id,
              user.name,
              user.parent,
              user.points,
              user.matrix.matrix
            );
            users.push(userInstance);
          }

          gameInstance.users = users;
        }

        this.games.push(gameInstance);
      }
    } else {
      this.games = Data.GAMES;
      this.saveGames();
    }
  }

  getCurrentGame(): MLM {
    return this.games[0];
  }

  getGames(): MLM[] {
    return this.games;
  }

  getCurrentUser(): User {
    return this.users[4];
  }

  updateGame(game: MLM) {
    const index = this.games.findIndex(g => game.id == g.id);
    this.games[index] = game;
    this.saveGames();
  }

  saveGames() {
    localStorage.setItem('games', JSON.stringify(this.games));
  }

  saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
