import { recordShow, setAlarm, turnOffFan, turnOnFan, turnOffLight, turnOnLight } from 'assistantFunctions';
function myAssistant(time, callbackFunction, ___) {
  console.log('Scheduling:');
  callbackFunction(time, ___);
  console.log('Complete.');
};
myAssistant('8am', turnOnFan);
myAssistant('4pm', turnOffFan);