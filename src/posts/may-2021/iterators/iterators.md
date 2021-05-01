---
title: “Generators and Iterators in JavaScript, what are they good at?"
date: "2021-05-01"
thumbnail: "./iterators.png"
---

![Iterators And Generators JavaScript](../iterators.png)

</br>

# First we generate then we iterate over the generated values!

The first thought which comes to my mind when thinking about generator in JavaScript is the possibility I have to “pause” a function execution at some point until I decide to let it go further!

And if I think also where I can use that, the first thing that comes to my mind is with some code which does some hard computation or is asynchronous.

But we already have Promises and async await in JavaScript, I hear you yelling at me!

I know. But what the generators allow us do, is to have full control over how the asynchronous code works. Not just the API which Promises expose for us!

<p style="color: #fff; background-color: #240048; padding: 0.5rem 1rem 0.5rem 1rem; -webkit-box-decoration-clone: clone; box-decoration-clone: clone" class="padded-multiline"><em>This pattern can be very useful many times when working with databases responses and we need to process the data arriving in a fashion that gives us full control on its flow.</em></p>

<p style="color: #fff; background-color: #240048; padding: 0.5rem 1rem 0.5rem 1rem; -webkit-box-decoration-clone: clone; box-decoration-clone: clone" class="padded-multiline"><em>The same with a water tap which can open more or close a bit to control the water flow!</em></p>

For a long time, I knew roughly what a generator function is just because I used it with Redux Saga.

I also knew what an iterable is because sometime JavaScript throw an error telling me that: “You try to iterate through a non iterable value!”.

I didn’t make the distinction between the _iterable_ and the _iterator_ anyway.

And I never knew what happens under the hood and what are them really about until I took <cite>Kyle Simpson course on ES6 the Right Parts”.</cite>

As MDN says, **“Iterators and Generators bring the concept of iteration directly into the core language and provide a mechanism for customizing the behavior of for...of loops.”.**

The iterators are also used in the spread operator.

The iterators can be used with the rest operator, just because they “iterate” over a value and pull a part each value of it.

    […items] // item1, item2, ...

Just as a note:

Those 3 dots in front of a value do much more than can be intended.

They call a next() method on each individual value from the iterable!

The next() method is abstract away from us by the language implementation.

The array in JavaScript has already the iterator integrated.

We don’t see it but it is there, which allow us to loop over the array.

It is a default iterator, not a customizable one as the iterator a generator function can give us.

In order to consume an array in an iterators fashion, we will have to create a generator function which will “yield” every value from that array for us.

    const arr = [1, 2, 3];

    function\* myFunction(array) {
        for (let v of array) {
        yield v;
        }
    }

    const res = myFunction(arr);

    console.log(res.next()); // {value : 1, done: false}
    console.log(res.next()); // {value: 2, done: fasle}
    console.log(res.next()); // {value: 3, done: false}
    console.log(res.next()); // {value: undefined, done: true}

</br>

# What for the generators and iterators in ES6?

Well, the main scope of them is to create and consume data in an iterable fashion!

Data which can be generated on purpose, each value one by one, and consume on purpose, each value itself and only when and if we need it!

The array in JavaScript is an iterable values. So does string as well by example. But not the object constructor.

In order to make an object iterable, we need to extend its signature with
an iterable.

An iterable is created with _Symbol.iterator_ metatag and adds a hidden _@@iterator_ propriety to the object.

The _Symbol.iterator_ is a native method built into the language and allows us to programmatically make a value iterable.

_Symbol.iterator_ is a function which when called, gives us back a next() method and an object with the current value and a boolean of done.

## <center> Why is this staff fascinating? </center>

Imagine you call a database into your code. The database provides you with a list of data.

Each value is a row for example, containing an object with much more proprieties on it.

You need to do something with that individual row, for each of them.

Something which is not straightforward, it requires some computation let’s say.

So, an iterable allows us to receive each row, do whatever we need with it and when we are ready we call the next() method, which will bring us another row of data.

This gives us basically the total control on how and when we consume the data!

**You need to remember this: an iterator , under the hood gives back a next() method and an object with each value and a boolean done.**

When we loop over a data set that is iterable with an iterator like for...of loop or the spread operator, we can’t see the next() method and the boolean done because they are abstracted away by those 2 apis for us.

But the iterator calls next() for us on each value.

There are 2 iterators available in JavaScript ( a part from the custom ones): the spread operator and the for of loop.

The array values by example, or the string, comes with the default iterator integrated.

That’s why we can loop over them.

But with a for loop (not for .. of loop), the default iterator goes form the index 0 to the last index or form key 1 in objects to the last key) in order.

We can’t customize the iterator as we can do with a for of loop on an iterable value.

I know you are confused here!

You know that an object can be iterated with a for in loop.

    const obj = {
        a: 1,
        b: 2,
        c: 3
    };

    for (let key in obj) {
        console.log(obj[key]); // 1, 2, 3
    }

</br>

Still obj is not an iterable value. It can be loop over and its keys can be retrieved but the iterator is the default one and can’t be customized!

The for...in loop was specifically built to have a possibility to retrieve an object keys.

But when you try a for of loop on obj, you will see an error:

    const obj = {
        a: 1,
        b: 2,
        c: 3
    };

    for (let key of obj) {
        console.log(obj[key]); // Uncaught TypeError: obj is not iterable
    }

</br>

This proves us that, the iterator can’t be used with the obj.

The spread operator anyway works on objects, but it still uses the default iterable.

At this point is maybe better if we understand well what an iterator is.

An iterator is not the same as an iterable, this is obvious but still we must be sure we understand it.

Meanwhile an iterbale is some value which contains more values and which can be iterated over, the iterator is an object which has a next() method on it and can be used to iterarte an iterable.

# Now we know what an iterator is, let’s see what is a generator and how it helps us write code that we control at 100%.

A generator is a function declared with a star, which will generate values and will “yield” them out one by one each time it is called with the next() method!

    function\* myFunction() {
        for (let i = 0; i < 5; i++) {
        yield i;
        }
    }

    const oneValueAtTheTime = myFunction();

    console.log(oneValueAtTheTime.next()); // {value: 0, done: false}
    console.log(oneValueAtTheTime.next()); // {value: 0, done: false}
    console.log(oneValueAtTheTime.next()); // {value: 0, done: false}
    console.log(oneValueAtTheTime.next()); // {value: 0, done: false}
    console.log(oneValueAtTheTime.next()); // {value: 0, done: false}
    console.log(oneValueAtTheTime.next()); // {value: undefined, done: true}

</br>

In the example above, each time we call myFunction a new value is given to us.

Then the execution stops there until the next() method call.

If we return to the previous example, when I was talking about some row coming from a database, now we can see how we can get each row, do whatever we want with it and when we are done we call next() again to get a new row until the done boolean will be true and the value undefined.

Note: There are also the async iterators which works with async generators.

The only difference is that an async iterator will return a Promise on yield instead of a value.
