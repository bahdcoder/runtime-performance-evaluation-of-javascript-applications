### Steps to use this demo

#### Optimize Javascript Execution 1

- Take a performance recording. Click on the `Sort with slow function`. Use devtools to find out how long the function took.
- Take another one. this time use the `Sort with fast function`. Use devtools to find out how long the function took.

#### Optimize Javascript Execution 2
- Take a PR (performance recording). Click on the `Square first 1000 numbers`. Notice the function took long. Use the summary/bottom-top tabs to click and see how long each line of the function took to run. Notice `box.innerHTML = (item)` takes too long.  
- Change the demo code. Enable `box.appendChild(document.createTextNode(item))` and disabled `box.innerHTML = (item)`.
- Take another PR. Follow the same steps. Notice the `createTextNode` function takes much shorter time.
