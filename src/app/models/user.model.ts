export interface User {
  id: number;
  name: string;
  email:string;
  password: string;
  role: 'customer' | 'admin';
}


export interface createUserDTO extends Omit<User, 'id' > {
}
