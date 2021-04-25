---
title: “Compare today to today in JavaScript!"
date: "2021-02-24"
thumbnail: "../images/dream-job.jpg"
---

![Docker](../images/2021/code8.jpg)
<br>

# Working with dates is not easy, we all know that.

<br>

<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">For example, do you know that you can&rsquo;t compare a new Date(Date.now()) to a new Date(Date.now)) ?</span></p><p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;color:#4472C4;">new Date(Date.now()) === new Date(Date.now()) // always false.</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">Even though you get the time stamp, even though we think they are the same time (Date.now); they will always be different in a JavaScript compare and the logic won&rsquo;t work.</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">A good workaround of this is to use a time library (I use date-fns) and to extract the day, the month, the year even the minute or second if you need that.</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">So I ad those numbers together ( <span style="color:#4472C4;">getDay(Date.now()</span>) will give me today number of the month day - 24. And so on.</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">So, I add <span style="color:#4472C4;">24 + 2021 + 02 = 2045,2</span></span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">Now if I need to compare a date selection range (different days not today === today) I use those addition results.</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;color:#4472C4;">2045,2 === 2045,2</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">Might exist simpler ways but this one works well for me.</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">date-fns has a helper called isSameDay. But it does not work well with Date.now() if there sometimes you need to compare only the day, other times the minutes, the seconds, etc!</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">As someone pointed out to me, this is supposed to work:</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;color:#4472C4;">new Date().getTime() === new Date().getTime()&nbsp;</span><span style="font-size:19px;">// true</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">But it doesn&rsquo;t. Do you know why?</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">Yes because the getTime method takes the milliseconds.&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">So no matter if it is today compared to today, what if in your code have something like this?</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;color:#4472C4;">&nbsp; const date1 = new Date().getTime();</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;color:#4472C4;">&nbsp; await sleep(100);</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;color:#4472C4;">&nbsp; const date2 = new Date().getTime();</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;color:#4472C4;">&nbsp; console.log(date1 === date2);</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><br></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">there are 100 milliseconds delay between setting date 1 and date 2, which makes the dates not be the same anymore. Even 1 milisecond is enough to get false in this case.&nbsp;</span></p>
<p style='margin:0in;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;">I hope you get the point!</span></p>
