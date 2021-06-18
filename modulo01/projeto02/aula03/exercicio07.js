function myAssistant(time, callbackFunction, ___) {
  console.log('I am your personal assistant, and I am happy to help with your request');
  callbackFunction(time, ___);
};
myAssistant('6pm', recordShow);
myAssistant('8am', turnOnLights);
