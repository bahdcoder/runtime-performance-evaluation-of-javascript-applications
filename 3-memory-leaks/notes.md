### Steps to use this demo

- Open the application and take a performance recording for 3 seconds using the `Start profiling and reload page`. Make sure `memory` is checked.
        - Notice the memory goes high because of the call to `increaseItems`. Also notice it gets cleaned up after the function is done.
        - The garbage collector cleaned it up because it was a local variable

- Change the code a little. Declare the `items` variable globally. 
- Open the application again. Take a performance recording again and keep clicking the `Add more items` button.
        - Notice the memory usage keeps going up and up. The garbage collector can't clean it up since its global.
- Switch to the memory tab and take a heap snapshot. Notice the `array()` at the top. Click through to see the `items` variable created more heap size.
