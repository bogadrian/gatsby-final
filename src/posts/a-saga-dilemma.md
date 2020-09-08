---
title: “A Saga Dilemma"
date: "2020-09-09"
thumbnail: "../images/app4.jpg"
---

![Trump](../images/app4.jpg)

#A Saga dilemma

I have encountered a little problem when building an app with React Native and my own back-end made with Express and MongoDb.

Don’t ask me why, but I needed 2 models for 2 types of users. They are totally different between each other, so separate them by “roles” felt like making no sense to me.

So I decided to go with 2 models, one for every type of users.

But as may already be thinking, there some problem arises, especially with the authentication for both of them.

You know, to keep a user logged in, you get its jwt token, save it to some secure storage in your app (in my case was the secure store provided by Expo), and send the token with a first request whenever the app first starts.

So the response will be the user object. The response is handled by an endpoint which takes the token, decodes it and extracts the id from it, then searches the database for the specific user and returns the user object to our front-end.

But here my problem arises: What if I had 2 models for users? (Because of my particular case, don’t ask why).

How would possible the back-end function handler will know where to look in database for a user?

Well, that is pretty obvious: I pass a “model” to the handler and when I called it from one or another user endpoints, I pass that model to it as a string. Letting the handler manage which document to search in the database.

But again, in front-end I only have the token! I don’t have the user id name or email. Anything but the token.

So I have to send the token to back-end and let it deal with the models.

Here’s the solution I came up with, using Redux Saga. Disclaimer: I don’t know if it is a good solution, I am not a coder guru!

I only know it works for me and I want to share it with you! Maybe there is a better solution than this, I can admit it!

I need two axios calls (I use axios btw), one with a route for one model another one with another route for the other model.

Note: It would be probably a simpler approach to use Promise.all and wait for both API calls. So this is just in case you use Saga!

I initiate the saga with a generic action: “setStartGet”.

<center><a href="https://github.com/bogadrian/social-coffee-native/blob/master/src/redux/getUser/users.saga.ts">Here is the code for Saga</a></center>

Then, I make my first call to the first and-point based on the first model. If that does not resolve, I will call another saga function where I make a second call to the second endpoint.

If that won’t resolve either, I call a “providerGetFailure” and a “userGetFailure” in the second function saga, that's where I make the second API call.

<center><a href="https://github.com/bogadrian/social-coffee-native/blob/master/src/redux/apis/getUser.ts">Here are the two api calls functions</a></center>

It works like a charm, confirming me what I already knew very well: Redux Saga is amazing!
No side effects, totally independent from React code, running on its own, asynchronously!
