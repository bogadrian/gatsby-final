---
title: "A JavaScript storytelling!"
date: "2020-09-18"
thumbnail: "../images/code6.jpg"
---

</br>

![Gatsby](../images/code6.jpg)

#Get those JavaScript coders to sleep!

When I start learning JavaScript and web development, I dived directly into code.

I took some courses on Udemy and there from, my path was to become more and more professional in using the language.

But if it was quite simple to understand the variables, if else checks and the syntax, when it came to core principles it wasn’t that easy anymore.

As a matter of fact, I had to return many times on explanations about scope, closures, asynchronous JavaScript, inheritance etc; in order to understand what is all about.

But if I had someone telling me in plain English what those core principles are, I could probably spare some time.

I try here to give a simpler, readable and not technical explanation on those core principles. But take it as it is, a story telling, not a tool to learn JavaScript.

After you see what a principle is from a narrative point of view, maybe you can better understand the technical part of it!

#What is Scope in JavaScript?

How would you explain “scope” to someone who doesn’t know JavaScript? Is it even possible?

Yes, it is!

Do you know those shop windows colored black which you can’t see anything inside?

But if you are inside you can see everything out?

Well, if you were a function inside the shop and your girlfriend would be a variable outside, you can see her but she can’t see you!

#What is Hoisting in JavaScript?

Can you explain hoisting to someone who does not know JavaScript?

Since let, const and arrow functions were introduced, hoisting happens much less and nobody cares anymore.

But;

We were all to school sometime.

Let’s say you were a function siting in the middle of the classroom and your classmate is passing you the answers every time you have a test.

He is sitting behind you because so he can use his cell phone to text messages to you with the right answers without being noticed by the teacher.

But one day the teacher notices him texting on the phone.

Then he takes his phone and put it in front of the classroom, on his desk.

Your classmate was “hoisted” in this case.

Its phone was declared in front of the classroom and himself was initialized at the end of the classroom.

Now you, the function, can receive only undefined on your phone instead of answers.

#What are Closures in JavaScript?

What are closures in JavaScript as explained to a non-coder?

Let’s say you are now a developer looking for your first job.

You made countless application so far.

One day you receive a phone call and you are told that you were being offered a job.

They tell you to pass by and see your new job place.

The day after you go to that company and they employ you straightforward.

If you were a JavaScript function, let’s say, the company is a wrapper function over you because they gave a job to you.

They give you a very expensive computer as well, as “work equipment”.

The next day you are expected to start.

But that evening they call you to say they are sorry, but they made a mistake.

Someone else got the job, not you!

As compensation you can keep the computer.

If the computer was a variable initialized in the wrapper function, you, the inner function can still have access to it even though the wrapper function has closed its doors to you!

#What are Promises in JavaScript?

Explain what a Promise is to someone who doesn’t know JavaScript!

Let’s suppose you are a worker in agriculture. You have to collect a field of 1000 rows of tomatoes until the evening comes.

You are the JavaScript execution runtime and the field is 1000 rows of console.log(‘collecting tomatoes’).

At the midday let’s say, because of the heat, you get really thirsty.

So, you ask the landlord to give you a beer (because you don’t drink the water).

You are so decisive that you tell him you won’t finish the work without a beer.

The landlord tells you that he does not have a beer right now but he will send someone to bring you one as soon as possible.

He asks you to keep doing your job meanwhile waiting for the beer.

He made you a “Promise”.

You believe him and keep collecting the tomatoes (console.log the rest of the rows).

Later eventually the beer arrives.

So, you didn’t lose time and the work may be finished that day.

Without a Promise, you would have stopped collecting tomatoes (the app crashed).

Ah, nobody guarantees you the beer will arrive, it may not.

Then is when the Promise is rejected.

Or maybe it arrives and the Promise is fulfilled.

But the important fact is that, you didn’t quit your job meanwhile expecting the beer.

#What is the Event Loop in JavaScript?

What the heck is the JavaScript Event Loop?

In plain English please!

Did you read about Promises here above?

About the agriculture worker waiting a beer, but keeping on working because he was Promise he’s going to get one?

If not do so now.

Let’s suppose our worker (JavaScript runtime execution), needs more than a beer!

He wants some food, a desert and lately a coffee to complete.

He asks all of this from the landlord. He says he’s going to stop working if not receiving them.

The landlord got his beer first, but then he has to provide for all the others requests from our worker.

It takes time.

First to find the beer, then to prepare some food.

Then to make a desert and lately a coffee.

So, meanwhile our worker keeps doing his job, because he was “Promise”, the Event Loop (our landlord), is taking care of making everything available for him.

Once the food is ready, he’s bringing it to our worker.

Then the desert and then the coffee.

One by one.

We can say that the Event Loop (landlord), is taking care of providing all the requests made in the call stack (our field) by the worker.

Whenever a request is ready, he’s bringing it to the field (call stack), so the worker (JS runtime), can have it.

He can be happy and keep doing its job!

#What is the Prototypal Inheritance in JavaScript?

If possible, explain to someone who does not know JS.

When we talk about OOP we are mainly talking about “blueprints” to create objects.

The objects can “inherit” the blueprint methods or proprieties.

A blueprint is a function constructor or a Class in Ecma2015.

Let’s imagine a car maker. Let’s say BMW.

Every single BMW that exit from the BNW factory is the product of a blueprint and a productive path.

By example, the engine is a “method” that every BMW car inherits from the factory.

All the engines for one model are the same.

They are the creation of the BMW car maker blueprint.

So, every method or property of the blueprint is being inherited by its products.

The BMW car maker has a prototype which is then inherited by the cars it produces.

Every object in JavaScript has a prototype which points to the object it derives from.

There are JavaScript objects, such as the window object, the Object itself or the Array (which is a specific object as well in JavaScript).

And then are objects created by us.

They must be constructors not instances.

An empty object is part of the Object JavaScript.

An empty array is part of Array, and so on.

It inherits all the Object (or Array) methods.

#What is Memoization in Javascript?

What is “memoization” in JavaScript, as explained to someone who does not know JavaScript?

A very important part in JavaScript is done by code “calculations”.

“Functions call” on other words.

There may be simple computation functions and very expensive computation functions.

Memoization is “remembering” parts of those expensive functions next time are called.

Let’s imagine you work at MacDonald’s.

Lots of people come in and ask for a Big Burger.

For every single order you have to take the meat, machine it, season it and fry it as a burger.

Then people become hungry and angry, because waiting too much for you to do all of that.

But what if, the meat is already machined, seasoned and prepared as a burger?

Then all you have to do is to fry it and pack as a burger.

Will take much less work for you as people are waiting and will make all the customers happy.

We can say that you “memoized” your work and now all of it is easier for you (as a function which has to do expensive computation).

Make sense?

#What is Polymorphism in JavaScript?

As explained to someone who does not know JavaScript?

To understand polymorphism, we first need to understand OOP principles.

You need to know what the prototypal inheritance is in order to understand polymorphism!

Now let’s imagine the BMW industry, which make various models of BMW.

There is the main compound where they make the engines and there are different compounds for 4x4, limousines, sport cars etc.

Every “sub factory” makes one model of BMW let’s say, but all of them install the engines made in the main factory.

In 4x4 factory however, in order to be able to install the engine from the main factory, they have to do some changes to the engine!

That’s polymorphism!

The ability to change in a subclass, a method declared in a main class!

In other words, a method can assume many forms.

Can be overwritten by example, can be modified and can be used for different scopes than it was first declared.

#What is Encapsulation in JavaScript?

As explained to someone who doe not know anything about JavaScript’?

Encapsulation is making things private, roughly!

Do you know that neighbor of you?

The one to whom, when you say “Good Morning” he always responds educate and nicely to you?

Well, that neighbor of yours that seems so well educated, may be a bully home with his family!

But you can’t see it, you can’t know it because he keeps his house things private!

He just exposes a nice face to the world out there!

Encapsulation is a class, or object, which do act on data that it contains not by directly interacting with that data but by calling a “method” it exposes to the outside (the scope) world!

<br>

##I don’t know if this article will ever be of any use to someone, but I know it would have been to me when I first learned JavaScript!
