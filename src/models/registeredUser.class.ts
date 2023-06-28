export class RegisteredUser {
  email: string;
  password: string;
  privateChannels: object;

  //Die namen sind noch nicht final und können geändert werden
  fullName: string;
  displayName: string;
  title: string;
  phone: string;
  profilePicture: string;
  organisations: string;
  onlineStatus: boolean;
  userStatus: string;
  timezone: string;


  constructor(obj?: any) {
    this.email = obj ? obj.email : '';
    this.password = obj ? obj.password : '';
    this.privateChannels = obj ? obj.privateChannels : '';

    //
    this.fullName = obj ? obj.fullName : '';
    this.displayName = obj ? obj.displayName : '';
    this.title = obj ? obj.title : '';
    this.phone = obj ? obj.phone : '';
    this.profilePicture = obj ? obj.profilePicture : '';
    this.organisations = obj ? obj.organisations : '';
    this.onlineStatus = obj ? obj.onlineStatus : '';
    this.userStatus = obj ? obj.userStatus : '';
    this.timezone = obj ? obj.timezone : '';
  }

  public toJSON() {
    return {
      email: this.email,
      password: this.password,
      privateChannels: this.privateChannels,

      //
      fullName: this.fullName,
      displayName: this.displayName,
      title: this.title,
      phone: this.phone,
      profilePicture: this.profilePicture,
      organisations: this.organisations,
      onlineStatus: this.onlineStatus,
      userStatus: this.userStatus,
      timezone: this.timezone,
    };
  }
}
