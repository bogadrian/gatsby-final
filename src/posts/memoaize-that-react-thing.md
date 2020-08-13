---
title: “Memoaize That React Thing"
date: "2020-08-13"
thumbnail: "../images/code4.jpg"
---

![Memoaizetion](../images/code4.jpg)

#What the heck are React Memo, use Memo and use Callback?

Please, as you explain them to your grandma!

React is great, I can tell you that!

I knew React for the last two years now and we are getting along very nicely together!

It wasn’t like that, especially in the beginning, when it used to hide things from me!
But then, you know, the confidence between us has grown constantly, as two adult persons normally do!

By example, in the beginning, even though I learned about use Memo and use Callback hooks, I didn’t really grab the conceptual way in which they work and why they may be useful.

I was glad I could make use of use Effect and use State back then.

Then use Ref and use Reducer.

This last hook I learned it well just because I learned Redux and it is kind of similar at a smaller scale.

Now, is the right time to explain what those mysterious hooks are to my grandma!

She’s dying of curiosity to find out!

We, React developers, know that every child component of a component which re-renders will re-render also in a tree cascade like sequence.

It is just the way React works.

It is one of the reasons a component re-renders in React, as <a href="https://bogdan.digital/immutabil-react/" target="_blank">I was saying here!</a>

But there are times when blocking the component is good for optimizing the app flow!

By example, when a big computation happens in the child component, allowing it to re-render means that we just ask the computer dynamic memory to re-calculate everything again!

And if the re-renders is happening very quickly, this may be a problem for the same UI strange behavior reason that I was talking about here up somewhere.

It is up to you if you want to block a children re-render cycle!

But if you decide to do so, here we have a React wrapper:

#<center>React.memo (<MyComponent />)</center>

React Memo memoaizes the props that the child component recives.

If the prop change when the parent component re-render, React Memo allows the child component to re-render because it does a shallow compare with the props it has memoaized and the new props received.

If the props that it receives are the same as the ones it has memoaized, React Memo keeps the component as it is!

We know a prop may change identity even if it maintains the same values, do we?

Use Memo instead is a hook which memoaizes only the data inside of a component over a re-render.

There are situations when we want the data passed by values (objects and arrays roughly), to maintain their identity over a re-render.

Use Memo may supply the same functionality as React Memo wrapper as it keeps the data identity unchanged; but maybe we need that data to stay unchanged in the same component we declare it.

Then React Memo can’t be of any help but use Memo does!

#<center>const dataMemoized = useMemo(() => {a: 1, b:2}, [ // array of dependencies, when use Memo must allow the object to be changed!])</center>

The function you see here is just a helper.

It runs only when the variables in dependency allow it and then the identity of the object changes!

Use Callback memoaizes a function instead.

It looks the same, only that in place of the object will be a function:

#<center>const dataMemoaized = useMemo(() => functionMemoaized(), [ // array of dependencies, when use Memo must allow the function to be re-created!])</center>

This is a very useful hook!

If a component re-renders, a function (and all the data) will be re-born brown new.

The “functionMemoaized” would have a totally new brown identity if the component re-renders if it wasn’t inside a use Callback.

No matter that it is exactly the same function! (for us, and for our eyes but not for JavaScript).

Then, imagine you have a use Effect hook where you run some asynchronous code to fetch some data, let’s say!

If the “functionMemoaized” is in the use Effect array dependency and wasn’t inside a use Callback, its new identity will trigger use Effect to re-run and produce a tree cascade re-render!

What for if we have already fetched the data? It is all about optimization!

Or maybe “functionMemoaized” is passed as a prop to a child component which uses React Memo – so that component does not need to re-render!

But its new identity will trigger a re-render anyway because React Memo sees it as a new prop!

We all know that functions are objects in JavaScript and them are passed by reference, which means they change identity if them are new born - despite being the same function!

My grandma knew that!

Take care of your use Memo and use Callback!
