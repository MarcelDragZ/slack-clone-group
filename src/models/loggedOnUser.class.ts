export class LoggedOnUser {
  id: string;
  timeStamp: string;

  constructor(obj?: any) {
    this.id = obj ? obj.id : '';
    this.timeStamp = obj ? obj.timeStamp : '';
  }

  public toJSON() {
    return {
      id: this.id,
      timeStamp: this.timeStamp,
    };
  }
}
