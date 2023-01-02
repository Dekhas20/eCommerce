export interface User {
  id: number;
  name: string;
  email:string;
  password: string;
}


export interface createUserDTO extends Omit<User, 'id' > {
}
