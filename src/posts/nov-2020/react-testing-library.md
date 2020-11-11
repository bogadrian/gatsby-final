---
title: “React Testing Library Practical Cheat sheet"
date: "2020-11-11"
thumbnail: "../images/landscape4.jpg"
---

![React Testing Library](../images/landscape4.jpg)

#<center>Why React Testing Library Practical Cheat sheet?</center>

When it comes to testing React apps, you’ll fins so much about the topic of google it.

But all the articles, courses and any material that talsk about the argument, misses one thing: explaining how to think about testing in a practical point of view!

Them are talking about unit test, integration test, end-to-end test etc.

They explain quite well how to implement testing in your React app.

But what they don’t tell you, just because for every developer who uses test is so obvious that he doesn’t think is even needed, is how to picture your testing strategy.

Maybe I don’t explain myself quite well, so let’s see in practice.

What do we need to test first of all in a React app?

Well, leaving apart unit testing, we usually test if the components are there when the app renders. We test also if the expected behavior is the one our app is suppose to have when faced with the user interactions.

So, we must first of all find out how the components and the elements in charge with the behavior may be selected. Because we need to have them in the test units if we want to see if them renders or have the expected behavior.

Once selected, we can test a lot of things. We test is them are there when suppose to be there in first palace. For example, if a component is there, if a text is there, if some HTML element is there etc.

If an element is there, a text or a component for example, we can assert that the app is working correctly and there are no errors, is it?

After making sure the elements are there, we can test the user interaction or/and how the app interacts with external data (data fetched from back-end for example).

So here we go with a practical cheat sheet for React Testing Library.

The elements in the lists below allows us to select components or HTML elements and make assertion about them.

I made this list for my own use but then I thought to put it nice in an article and so make it easy for me to find it quick when I need it but also available to everyone else interested!

#.1 Selections

##If the Text, Label, Role, Alt, Value, Placeholder ARE there – positive assertion

- getByText
- getByRole
- getByLabelText
- getByPlaceholderText
- getByAltText
- getByDisplayValue

##If the Text, Label, Role, Alt, Value, Placeholder AREN’T there - negative assertion

- queryByText
- queryByRole
- queryByLabelText
- queryByPlaceholderText
- queryByAltText
- queryByDisplayValue

##If the Text, Label Role, Alt, Value, Placeholder WILL BE there – asynchronous assertion. Usually use await in front of this assertions

- findByText
- ByRole
- ByLabelText
- ByPlaceholderText
- ByAltText
- ByDisplayValue

##If there are MORE THAN ONE Text, Label, Role, Value, Placeholder in the rendered DOM, use All

- getAllBy
- queryAllBy
- findAllBy

#.2 Assertive Functions

- toBeDisabled
- toBeEnabled
- toBeEmpty
- toBeEmptyDOMElement
- toBeInTheDocument
- toBeInvalid
- toBeRequired
- toBeValid
- toBeVisible
- toContainElement
- toContainHTML
- toHaveAttribute
- toHaveClass
- toHaveFocus
- toHaveFormValues
- toHaveStyle
- toHaveTextContent
- toHaveValue
- toHaveDisplayValue
- toBeChecked
- toBePartiallyChecked
- toHaveDescription

.3 Fire Event to test user interaction (reference: <a href="https://testing-library.com/docs/guide-events, all supported events" target="_blank">testing-library.com/docs/guide-events</a>: <a href="https://github.com/testing-library/dom-testing-library/blob/master/src/event-map.js" target="_blank">testing-library/dom</a>)

- userEvent.type as a replacer for all the below

- fireEvent.mouseOver(element)
- fireEvent.mouseMove(element)
- fireEvent.mouseDown(element)
- element.focus() (if that element is focusable)
- fireEvent.mouseUp(element)
- fireEvent.click(element)
