---
title: “Upload images to AWS S3 from React Native with Node Js and saving the URLs to MongoDb. "
date: "2020-09-26"
thumbnail: "../images/robo1.jpg"
tags: "Node"
---

![Code](../images/robo1.jpg)

#Task: Build a fully functional React Native app with a back-end Node Js which uploads photos or any files to AWS S3 and then use them in front-end mobile React Native App.

This is more about full-stack application using the MERN stack with React Native than about React native itself.

I am building an app which has this feature enabled: allow users to upload photos or PDF files, and use them on their profile!

This is just a tiny part of the app I am building, but to be honest it was a challenging one!

I use Expo, but in React Native CLI the <a href="https://www.npmjs.com/package/react-native-image-picker" target=_blank>Image Picker</a> works the same, so nothing changes either with Expo or not.

This article I am writing is more about the steps that has to be followed than about the writing code, even though I will show you all the code.

#Step 1:

You need an Amazon account.

If you don’t have one, you need a credit card to create a “bucket”.

The procedure to create a bucket is pretty complex, but you can find an explanation here down!

I followed this video when I created mine bucket: <a href="https://www.youtube.com/watch?v=uhCCB8Vqi9E" target=_blank>Jean Rauwers</a>

In practice you need an Access Key Id and a Secret Access Key issued by Amazon Console when you finish to create your bucket.

<br>

![Key acccess](../images/s3/key-access-s3.png)

<br>

These keys are used by your Node application to communicate with Amazon S3 interface storage.

You will install a few packages which will do the communication task between the Node app and Amazon S3.

<br>

![Key acccess](../images/s3/packeges.png)

<br>

#Step 2:

Once you have created your bucket and saved the access key and the secret key, create a file into your Node app and call it whatever you want.

As it is the file in charge with the communication between the node and S3, I called it s3Uploads.ts (.ts because I am using typescript, call it s3Uploads.js otherwise).

In this file you will import the packages - after installing them.

Next you declare a constant where you import the keys.

Next step is to create a filter.

This is a JavaScript filter which filters only for images.

It simply works by grabbing the mime type of the file arriving from front-end and checking if it starts with "image/".

<br>

![Key acccess](../images/s3/filter-s3.png)

<br>

Here you can filter for image, PDF or any other type of file you want to allow your users to upload to S3.

<br>

![Key acccess](../images/s3/mimetype.png)

<br>

Last step here is to create a storage multer S3 function as in the image below.

Then pass it to a function together with the filter and export that function.

<br>

![Key acccess](../images/s3/storage.png)

<br>

That function you will import where you need to call upload image (or images).

As you can see in the images below, that function gives you either uploads single for a single file, or uploads array for multiple files.

<br>

![Key acccess](../images/s3/upload-single.png)

<br>

<br>

![Key acccess](../images/s3/upload-array.png)

<br>

#Step 3:

Create a route to upload photo.

In my case I have a route which upload the photo/photos, but also updates some fields of the user document in MongoDb.

<br>

![Key acccess](../images/s3/update-me.png)

<br>

Upload photo is a middleware here as you can see.

Once the photo is uploaded to S3, the S3 returns the URL of that photo and put it in the "request.file.location" or "request.files[i].location" if there are more than 1 file.

Req.files is an array so you have to loop over it and grab the location of each file.

Then you call that function before the update me function (in my case).

<br>

![Key acccess](../images/s3/call-upload-photo.png)

<br>

This is how update me function looks like if you are interested.

<br>

![Key acccess](../images/s3/update-me-function.png)

<br>

Please note there is a filterObj function call which is in charge with filtering out the un-allowed fields to be updated! Here is the function.

<br>

![Filter Object](../images/s3/filter-object.png)

<br>

And this is all about the back-end!

If you send now a form data request with the right mime-type of file, them should be saved to AWS S3 and the url should be saved to MongoDb.

In an User document in my case, but you can have any MongoDb document you want as you imagine!

#Step 4:

The request from React Native now!

From React Native you have to send the Form Data request to the end-point.

I am using Axios, so this is how my request function looks like:

<br>

![Key acccess](../images/s3/axios.png)

<br>

So, here a few considerations:

The Image Picker React Native does not give us the clean file; it gives us the full path to that file.

Please note the uri path here:

<br>

![Key acccess](../images/s3/uri-path.png)

<br>

Then we use "split(‘/’)" and "pop()" to get only the last part of that path, that means the name of the file.

We use Regex to match the filename (please don’t ask me how that works, I just found it on Stack Overflow).

We append to the form an object with the uri, the filename and a type.

To be honest I had a lot of troubles finding out what is the right way to make a request from React Native with Form Data to a Node app.

Meanwhile it worked quite well from Postman, it wasn’t working from the code until I found and used the Regex bit of code that you can see in the axios function here above!

Please note that, in order to append files to Form Data, I have to loop over them always, even though there is just one (as for example one user photo).

That depend on how you grab the file from your component and issue it to the axios function call.

In my case is always an array!

I don’t have any idea if I was clear, if this will ever help someone, but here we are!

Another bit of learning knowledge shared as I was learning!

PS: Please don't bother you with any on typescript I use; I still have to figure out those types :).
