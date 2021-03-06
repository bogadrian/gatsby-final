---
title: “My first real app"
date: "2020-02-02"
thumbnail: "../images/park-your-tir.png"
tags: "My Path"
---

![Park Your Tir](../images/park-your-tir.png)

# I built and put online my first real app!

I finished my first real app. I overcome the todo's world! 😀 It feels so good that I was able to build it.

# <center>The back-end is made with NodeJs and the front-end is made with ReactJs.</center>

The app is supposed to help truck drivers around Europe to find parking for their lorries.

I used to drive a lorry in Europe and I know from my own experience that, when the night comes there is so hard to find parking for the lorry.

Countries like Germany, Belgium or the Netherlands are just a big problem for trucks parking.

Well, is not me the one who creates the parcking but the lorry drivers themselves.

The app allows to a registered user to create a place (parking) and to show that place to others.

As you may see if you open the app, the places are fetched around your position in a 100 km range. But you can insert an address and take a look if around that address parking exists.

The places are displayed by Google Maps and there are markers for them.

You can click that marker and a window will open. On that window, a button exists. Button that if it is clicked, will take you to a place page.

# <center>A place can be created with photos, title, description and rating.</center>

Other users can comment on that place. They can update or delete their comments.

So can you, the owner of that place (if you created it), for the place itself or for your own comments.

Every comment requires a rate. An average rating is displayed for each place.

It is calculated on the back-end and it sums the number of votes and the ratings given by you, the creator of that place, and commenters.

If you are a registered user, there is a “my profile” page.

On that page, you can update your info, profile photo, name, and email.

You can also request a new password and nodemailer will take care to send you a reset password link.

On that page, the places you created are also displayed.

If there are too many to fit the page, I implemented pagination for the “my-places” component.

Google Maps API is not free.

So, as this is a demo app, I don’t expect to exceed Google's free margin.

But if it happens, I will take it down.

Well, let me say that the UI isn’t astonishing!

It is rather ugly. My CSS skills are not at some kind of master level and I did what I could.

I concentered myself on making the app work and less on the User Interface.

I am not a designer; I hope you understand me.

If my app would ever be pushed to production, it needs a designer hands on it, no doubt about that!

Also, the app would be used mostly on mobile phones.

A lorry driver will access the app from its mobile in 95% of the cases.

So, the app was built for now with ReactJs and I tried my best to make it responsive.

But I would like to take it to React Native.

Probably I will do that in the future as I want to concentrate now on learning well React Native too.

# <center>The app is deployed on Heroku. Front-end and back-end.</center>

For the demo purposes it works just fine.

Less the photo upload feature.

Better said: Heroku allowsphoto uploads sometimes (I didn't get when and how yet), but it wipes them out very soon.

(Update: I changed the Express app to Digital Ocena. Now uploading photos work fine!)

Heroku on the free plan has a very slow response rate for such a complex app. I mean, an app that makes so many requests to the back-end.

That being said, if ever the app would go into production, it needs a proper hosting.

I published it to Google Cloud also.

But so far, I wasn’t able to make photo upload work on Google Cloud Storage.

Maybe I will do it next.

The app contains lots of files. Components, Redux files, Saga files, pages, utility files, etc. It is big for me.

I worked for more than 3 months on it.

But I have a regular job so I built it in my spare time.

I am really satisfied with what I managed to build!

To be honest, one year ago, when I was already thinking if I would ever be able to build such an app, I didn’t believe that I would!

Of course, my code is not a senior developer code. It may be ugly and sometimes too cumbersome.

That means I still have a lot to learn.

Therefore, I am looking forward to the next steps on my would-be developer path. With much more confidence now just because I managed to come so far!

Anyway, mine is a pure passion!

I am not young and restless anymore, and, therefore, I am aware it will be hard for me to find a day to day job as a dev, no matter how good I am or I will become.

I am not thinking of that, I did not learn everything thinking about getting a job in the first place!

I just enjoy my ability to build such a thing now! And I am looking forward to some freelancing work.

The app link is here if you want to take look:
<a href="https://park-your-tir.netlify.app/" target="_blank">Park Your Tir App!</a>
