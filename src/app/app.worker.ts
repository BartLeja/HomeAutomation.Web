/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  let test = 0;
  // while(true){
  //   console.log(test);
  //   test = test++;
  // }

  postMessage(response);
});
