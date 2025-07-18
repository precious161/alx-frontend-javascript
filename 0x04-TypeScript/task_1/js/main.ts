interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

interface studentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}
interface studentConstructor {
  new (firstName: string, lastName: string): studentClassInterface;
}
class studentClass {
  constructor(public firstName: string, public lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework = () => {
    return "currently working";
  };
  displayName = () => {
    return this.firstName;
  };
}
