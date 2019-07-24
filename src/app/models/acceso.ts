export class Acceso {
  constructor(_id = '', date = '', hour = '', user = '', sala = '', type = '') {
    this._id = _id;
    this.date = date;
    this.hour = hour;
    this.user = user;
    this.sala = sala;
    this.type = type;
  }

  _id: string;
  date: string;
  hour: string;
  user: string;
  sala: string;
  type: string;
}
