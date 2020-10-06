---
title: "Dataset relationship in Mongoose"
date: "2020-10-06"
thumbnail: "../images/landscape6.jpg"
---

</br>

![Gatsby](../images/landscape6.jpg)

#Data Modelling Mongoose

I am building an app with React Native, Express and Mongo DB.

It is a pretty complex app, I have to say.

Especially for the level I am now: mid-level full-stack developer.

And of course, I am using Mongoose to make the Express app communicate with Mongo DB.

There is a lot to be learned about Mongoose. Particularly speaking, about how to structure the relationship between data sets.

It took me some time until I understood how it works.

And because is a tough topic, and many newcomers, as myself, have problems understanding all this staff, I am writing this article.

I give you a case example, so you can see from a practical point of view how it works.

#What is relationship when it comes to data in Mongo DB?

Well, it is about how a set of data relates to another set of data.

By example, in an e-commerce app, the orders will be direct children of the product.

When you query for a type of data, let’s say the product, you will need to know how many orders that product has had and some details about the orders as well.

In plain English than means a product can be ordered several times.

Each order is a dataset. The product itself is a dataset. The relation between them is called relationship, or better, data modelling.

In this case, for example, the product does not need to know anything about the orders. Well, it can, but is a bad pattern!

It doesn’t care how many orders were so far.

This happens when queried on its own.

Or better, when the app owner inserts a product, it will put in the product info.

The orders for that product will come later (hopefully for the owner), and he will need to know by then the orders info as well.

But the orders care about the product.

Because an order can only be made for that product (I mean, if you order a bike, you don’t want to see a car arriving to you because the order doesn’t know which product belongs to, do you?).

They need to know for sure to which product they belong to!

In Mongo DB each document can be up to 16 megabytes of data. 16 megabits is a lot, but still, if you are Amazon and you sell a very cool product, there are chances there may be millions of orders, so that the 16 megabits limit will be not enough.

In this case your e-commerce app will break.

You don’t want to keep any information about the orders in this case in the product document, as I said.

You will keep a “reference” from the children – the orders – to their parent – the product.

Then when you touch the product endpoint, you will populate virtually a filed in that product with all orders references.

The virtual populate is a very strong Mongoose tool, which allows you to have all the children’s data but without saving it to the database.

The data on product will only be available for query!

You can also allow only fields from the Order document that you are interested in to be virtual populated in the Product document, such as the name of the buyer or its address, but not the price, because the price is already in the product document.

I know this staff is confusing, it was for me. I am doing my best to better explain it.

#And here it comes parent referencing!

You will have the product reference in the order document. This is simply achieved by creating a field in Orders Schema, and assigning to it a “mongoose.Schema.ObjectId” type. Then you will have a ref propriety which will point to the product:

<center>product:
{
type: mongoose.Schema.ObjectId,
ref: ‘Product’
}</center>

In this way, if you call the populate(‘product’) function on the endpoint handler (or in a query middleware), the product will be available in the order document!

Now, if you do this contrary, I mean child referencing and put the Order filed in the product document, the size of the Product document can grow until overcoming that 16 megabits of size.

But even though it doesn’t, the size of the product document being too large will cause performance issues on query.

Instead for having the orders into the product, which interest us more, because we do not query for a specific order, but for the product and then we need to know about the orders, we can call the virtual populate in the Product document as explain here up.

Virtual populate creates, as the name says, a virtual field (which does not exist in the database), and populates it with the data of the orders.

In this way we save the Product document growing indefinitely and we will have in the query answer all the orders data when querying for the product!

I know it is confusing. But is truly powerful. It amazes me.

The possibilities are endless.

You will master it after some practice.

Not in the beginning, it is a pretty tough topic!
