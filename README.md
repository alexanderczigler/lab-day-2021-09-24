# Lab day 2021-09-24

## Introduction

A gentle comparison of GraphQL, gRPC and OpenAPI.

### What do I want to compare?
 - Basic CRUD operations
 - Way of working
 - Readability and maintainability
 - Websockets

### Method

Using each of the frameworks, build a basic API doing the same things.

## GraphQL
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