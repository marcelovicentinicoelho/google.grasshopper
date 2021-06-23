import { studentList } from 'class.students';
function needsAdultTicket(arrayStudent, ___) {
  for (var element of arrayStudent) {
    if (element['age'] > 12) {
      console.log(element['name']);
    }
  }
};
needsAdultTicket(studentList);