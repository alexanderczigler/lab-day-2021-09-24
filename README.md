# Lab day 2021-09-24

A gentle comparison of GraphQL, gRPC and OpenAPI.

## Introduction

At Iteam use one friday every month to experiment and learn. We call these fridays "lab days". I am spending this lab day to have a brief look at GraphQL, gRPC and OpenAPI and compare them. As I am only spending a day on this I will have to limit my scope quite a lot. I will for example not go into comparing performance or anything like that but rather focus on what it is like to get started with each of the frameworks and what I like/dislike about them at a first glance.

### What do I want to compare?
 - Basic CRUD operations
 - Way of working
 - Readability and maintainability
 - Websockets

### Method

Using each of the frameworks, build a basic API doing the same things.

## GraphQL

I have some previous experience working with GraphQL backends so this was not completely new to me. I think GraphQL adds a pretty nice layer of control between the backend and frontend(s) and the built-in query tool is wonderful. When working with other developers GraphQL makes it easy to discuss the API.

The documentation is good and there are plenty of examples out there to learn from. What I do not like about it is that when I do something wrong I often get error messages that are hard to decipher. GraphQL has a bit of a learning curve to it but I think it is worth the time and effort.

### Likes
 - Built-in query tool
 - Structured way to specify what is visible to the clients
 - It takes little effort to comment and document the API
 - Tooling
 - Docs + examples

### Dislikes
 - Need to learn a new query language
 - Some error messages are too esoteric/non-descriptive
 - Feels a bit repetitive

 ## gRPC

I am completely new to gRPC. At a first glance it looks a bit different than my usual way of making http(s) calls between backends and/or frontend <-> backend. The code examples look a bit complicated and scary because they include a bunch of different languages, but it didn't take long until I found a nodejs example in the public grpc repos.

### Likes
 - The .proto file is easy to read and work with
 - Syntax related errors were relatively friendly
 - Looks like a promising alternative to making http(s)/fetch server <-> server requests 

### Dislikes
 - Requires additional components to serve web browsers