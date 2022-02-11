import { User } from '../models/user';
import { MLM } from '../models/mlm';
import { Constants } from './constants';

export class Data {
  public static GAMES: MLM[] = [
    new MLM({id: 1, points: 1, depth: Constants.DEPTH, width: Constants.WIDTH }),
    new MLM({id: 2, points: 0.5, depth: Constants.DEPTH, width: Constants.WIDTH }),
    new MLM({id: 3, points: 2, depth: Constants.DEPTH, width: Constants.WIDTH }),
  ];

  public static USERS: User[] = [
    new User(1, "Jack", null, 1),
    new User(2, "Joe", null, 1),
    new User(3, "Mark", null, 1),
    new User(4, "Ben", null, 1),
    new User(5, "John", null, 1),
    new User(6, "Smith", null, 1),
    new User(7, "Chris", null, 1),
    new User(8, "Tom", null, 1),
    new User(9, "Jenny", null, 1),
    new User(10, "Andson", null, 1),
    new User(11, "Pat", null, 1),
    new User(12, "Harry", null, 1),
    new User(13, "Jame", null, 1),
    new User(14, "Perkin", null, 1),
    new User(15, "Tony", null, 1),
    new User(16, "Jim", null, 1),
    new User(17, "Ted", null, 1),
    new User(18, "Eli", null, 1),
    new User(19, "Rad", null, 1),
    new User(20, "Faruk", null, 1),
  ]
}