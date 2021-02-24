---
title: “Make your code asleep for a while in JavaScript."
date: "2021-02-25"
thumbnail: "../images/dream-job.jpg"
---

![Docker](../images/2021/code8.jpg)
<br>
#Sooner or later you’ll encounter a situation in your code when a race condition may happen.
<br>

<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">We are JavaScript developers so we know how to deal with that, don&rsquo;t we?</span></p><p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">Well, if the race condition is all about asynchronous code.&nbsp;</span></p><p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">Take a look at this:</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race</a></span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">But what if when building the application of your dreams, part of your synchronous code needs to wait for a race condition to fulfill?</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">As an example, in React, you may make an api call request to some backend and move forward to a new page where the answer will be displayed.&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">This is simple to set up, all you need to do is to conditionally render the result page if the answer came back, or render some spinner, etc if it is waiting or error if an error comes back.</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">But for the need of this example, let&rsquo;s say you don&rsquo;t render conditionally the result page.&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">You go straight forward for the answer.&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">But wait, the answer is not there yet! So, we&rsquo;ll see a blank page!</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">We don&rsquo;t want that! And we don&rsquo;t use a spinner for the sake of this example.</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">What else can we do?</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">We can eventually delay the routing to the result page and so give some tie to the answer to come back.&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">Yes, the server response may take a different time than the delay you give to the execution stack but at least we have tried didn&rsquo;t we?</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">Question: How do I delay the execution stack?</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">Answer:&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">In Javascript ES6 we can create a function:&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size: 19px; background-color: rgb(0, 0, 0); color: rgb(239, 239, 239);">const sleep = ms =&gt; {</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="color: rgb(239, 239, 239);"><span style="font-size:19px;;background-color: rgb(0, 0, 0);">&nbsp; return new Promise(resolve =&gt; setTimeout(resolve, ms));</span></span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size: 19px; background-color: rgb(0, 0, 0); color: rgb(239, 239, 239);">};</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">Then we can use it in an async bit of code like this:&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;"><span style="color: rgb(239, 239, 239); background-color: rgb(0, 0, 0);">await sleep(500)</span>, where 500 are 500 milliseconds.&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">In Node instead, we can use the promisify utility.&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">Like this:&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size: 19px; color: rgb(239, 239, 239); background-color: rgb(0, 0, 0);">const sleep = promisify(setTimeout)</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">Used like this:&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size: 19px; color: rgb(239, 239, 239); background-color: rgb(0, 0, 0);">await sleep(500)</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">Apart from the scenario when you might need to pause the execution stack (I know the example above is pretty dumb), this is the way to achieve it.&nbsp;</span></p>
