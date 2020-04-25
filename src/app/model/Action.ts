export class Action {
  id: string;
  request: string;
  date: string;
  result: string;
  time: string;


  constructor(id: string, request: string, date: string, result: string, time: string) {
    this.id = id;
    this.request = request;
    this.date = date;
    this.result = result;
    this.time = time;
  }
}
