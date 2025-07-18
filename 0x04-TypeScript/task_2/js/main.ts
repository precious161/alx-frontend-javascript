interface DirectorInterface {
  workForHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
interface TeachcerInterface {
  workForHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
class Director implements DirectorInterface {
  workForHome = () => {
    return "Working from home";
  };
  getCoffeeBreak = () => {
    return "Getting a coffee break";
  };
  workDirectorTasks = () => {
    return "Getting to director tasks";
  };
}
class Teacher implements TeachcerInterface {
  workForHome = () => {
    return "Cannot work from home";
  };
  getCoffeeBreak = () => {
    return "Cannot have a break";
  };
  workDirectorTasks = () => {
    return "Getting to work";
  };
}
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}
