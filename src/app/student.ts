export class Student {

  constructor(
    public student_id: number,
    public firstname: string,
    public lastname: string,
    public username: string,
    public gender: string,
    public age: number,
    public institution: string,
    public degree: string) {}
  }

export class UserLogin {

  constructor(
    public user_id: number,
    public password: string) {}
}