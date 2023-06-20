export class RegisteredUser {
  email: string;
  password: string;
  privateChannels: object;

  constructor(obj?: any) {
    this.email = obj ? obj.email : '';
    this.password = obj ? obj.password : '';
    this.privateChannels = obj ? obj.privateChannels : '';
  }

  public toJSON() {
    return {
      email: this.email,
      password: this.password,
      privateChannels: this.privateChannels,
    };
  }
}
