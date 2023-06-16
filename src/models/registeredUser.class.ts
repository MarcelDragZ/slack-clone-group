export class RegisteredUser {
  email: string;
  password: string;

  constructor(obj?: any) {
    this.email = obj ? obj.email : '';
    this.password = obj ? obj.password : '';
  }

  public toJSON() {
    return {
      email: this.email,
      password: this.password,
    };
  }
}
