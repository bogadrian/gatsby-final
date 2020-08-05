---
title: “React Native app"
date: "2020-04-28"
thumbnail: "../images/react-native.png"
---

![React Native](../images/react-native.png)

#<center>I learned React Native in 1 month.</center>

To be honest, I learned the basics. There is still a lot for me to learn.

And I learned to build a mobile app with React Native over the Expo, without ejecting. Which would bring much more complexity to a React Native project.

#<center>Nevertheless, I did it. I built my first React Native app!</center>

A demo personal app built with React Native. It uses Redux, Redux Thunk, React Navigation 5, some must have dependency and Kitten UI.

I have built just 4 screens. A Home screen, About me screen, Blog screen and Portfolio screen. Then, there are 2 more protected screens behind authentication.

I didn’t know what to really put on these protected screens. I needed to build an authentication flow as every app has. So, I just created a "messages" screen.

Those screens can be seen only by authenticated users.

They can reed messages that occurred between me and them, can send me a message and I can answer them, can also edit or delete their own messages.

When you open the app there is a home screen. You can navigate to the other unprotected screens.

There is also a drawer. On that drawer, I put the login screen. Once you login you will be taken to messages screen where you will see my messages and yours, and where you can write me a message as well.

#<center>I do have a bottom tab navigation also.</center>

There is a “Home” button, a “Blog” button and a “Portfolio” button.

On the Home screen, I have 4 icons for LinkedIn, Twitter, GitHub and my website.

There is also a push notification arriving on the message sent, but; I didn't implement a database to store the push tokens.

The authentication occurs with Firebase Rest Api and the authentication in this case does not allow to create a user object either to loop over it and find the eventual token.

I was supposed to use the Firebase Auth3 app integration to do that but I started with the Rest Api and for this demo purpose is ok like so.

I think the design is ok also and it is much better than I ca do on the web with CSS.

The toggle "light - dark" mode button at the bottom of the page is pretty cool too, I think.

I published it just to the Expo server.

I don’t want to publish it to Apple Store or Play store, as it is just a demo app and would make no sense to do that.

#<center>You can see it on Expo. Therefore, you need to download the Expo app.</center>

Go to the link below, scan the QR code (with the photo cam works as well), and the app will open for you. In this way you can take a look and see my work if you want.

Unfortunately it does not works on IOS because of their policy. Only Android.

The Expo app is utilized by all the React Native developers out there.

Expo: <a href="https://expo.io/@bogdan_dev/bogdan-digital/" target="_blank">Expo Server!</a>
