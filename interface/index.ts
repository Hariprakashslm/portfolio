export interface IMenuItem {
  name: string;
  linkTo: string;
}

export interface IUserProfile {
  title: string;
  menu: IMenuItem[];
}
