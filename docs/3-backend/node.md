---
sidebar_position: 2
---

# Introducing Node.js

## What is Node.js?
Node.js is a runtime environment that allows developers to execute JavaScript code outside of a web browser, enabling server-side scripting for building scalable, event-driven applications. With its non-blocking I/O model, Node.js efficiently handles concurrent connections, making it ideal for real-time web applications, APIs, and microservices. 

## Why Was It Created?

### C10K Problem 
In the early 2000s, as internet is starting to take off, engineers are met with problem: How can web servers handle ten thousand clients simultaneously? Hence the term C10k for the "10,000 clients problem".

At the first presentation of Node.js at JSConf 2009, Ryan Dahl, the creator of Nodejs, criticized:
* The limited possibilities of the most popular web server in 2009, Apache HTTP Server to handle a lot of concurrent connections (up to 10,000 or more); 
* The most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks (read as “more hardware and software”, more money) in the case of simultaneous connections.

![](/img/ryan-dahl.jpg)
***Ryan Dahl***

### The Apache Problem
The Apache problem is the more connections the worse the performance.


### The Solution
This problem was solved by fixing OS kernels and moving away from threaded servers like Apache to event-driven servers like Nginx and Node.

As Ryan Dahl noted, Node.js and Javascript were able to solve this problem at that time at no extra cost: 
* Node.js provides a purely evented, non-blocking infrastructure to script highly concurrent programs. 
* Javascript is designed specifically to be used with an event loop: anonymous functions, closures; only one callback at a time; I/O through DOM event callbacks. The culture of JavaScript is already geared towards evented programming.

## Why Learn Nodejs?

Learning Node.js offers several compelling benefits, making it a worthwhile endeavor for developers:

### JavaScript Everywhere
With Node.js, developers can use JavaScript not only for frontend development but also for server-side scripting. This allows for full-stack development using a single language, streamlining the development process and reducing the cognitive overhead of learning multiple languages.

### Scalability and Performance
Node.js is built on the V8 JavaScript engine, known for its high performance and efficiency. Its non-blocking, event-driven architecture enables handling of large numbers of concurrent connections with minimal overhead, making it well-suited for building scalable, real-time applications.

### Rich Ecosystem
Node.js has a vast ecosystem of libraries, frameworks, and tools available via npm (Node Package Manager). This ecosystem includes modules for web development, data processing, networking, security, and more, empowering developers to leverage existing solutions and accelerate development.

### Community Support
Node.js boasts a large and active community of developers, contributing to its growth, improvement, and support. Community-driven initiatives, forums, documentation, and tutorials provide valuable resources for learning, troubleshooting, and sharing knowledge.

### Versatility and Flexibility
Node.js is highly versatile and adaptable, suitable for various types of applications, including web servers, APIs, microservices, real-time applications, IoT (Internet of Things) devices, and more. Its lightweight nature and modular design enable building lean and efficient solutions tailored to specific requirements.

### Industry Adoption
Node.js is widely adopted across industries, with many prominent companies using it to power their applications and services. This includes companies like Netflix, Uber, PayPal, LinkedIn, Walmart, and many others, demonstrating Node.js's reliability and scalability in real-world scenarios.

### Career Opportunities
Proficiency in Node.js can enhance career prospects for developers, as it is in demand across industries and sectors. Whether working as a full-stack developer, backend engineer, or specializing in Node.js development, having Node.js skills can open up a wide range of job opportunities and career paths.


[![IMAGE ALT TEXT](/img/nodejs1.png)](/img/nodejs1.png)
[![IMAGE ALT TEXT](/img/nodejs2.png)](/img/nodejs2.png)
[![IMAGE ALT TEXT](/img/nodejs3.png)](/img/nodejs3.png)
[![IMAGE ALT TEXT](/img/nodejs4.png)](/img/nodejs4.png)
[![IMAGE ALT TEXT](/img/2024-03-12_19-31-47.png)](/img/2024-03-12_19-31-47.mp4)

References:
* https://belitsoft.com/php-development-services/php7-vs-nodejs
* https://highscalability.com/the-secret-to-10-million-concurrent-connections-the-kernel-i/
* http://www.kegel.com/c10k.html