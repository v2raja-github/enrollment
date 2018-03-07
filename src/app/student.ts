export class Student {
    studentid: number;
    firstname: string;
    lastname: string;
    username: string;
    gender: string;
    age: number;
    institution: string;
    degree: string;
  }

export class UserLogin {

  constructor(
    public user_id: string,
    public password: string) {}
}