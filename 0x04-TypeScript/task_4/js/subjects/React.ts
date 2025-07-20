/// <reference path="Teacher.ts"/>
/// <reference path="Subject.ts"/>

namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }
  class React extends Subject {
    gerRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }
    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingReact > 0) {
        return ` Available Teacher: ${this.teacher.firstName}`;
      } else {
        return `No available teacher`;
      }
    }
  }
}
