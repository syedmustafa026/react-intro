modal = document.getElementById("modal")

btn1 = () => {
    modal.innerHTML = ""
    modal.innerHTML += `<h2 style="margin: 0%; "class="heading"> Overview</h2>
Now that you’re set up, let’s get an overview of React!

<h2 class="pre-heading "> What is React?</h2>
React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
It lets you compose complex UIs from small and isolated pieces of code called “components”.

React has a few different kinds of components, but we’ll start with React.Component subclasses:
<img src="imgs/code1.PNG" alt="">
We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see
on the screen. When our data changes, React will efficiently update and re-render our
components.

Here, ShoppingList is a React component class, or React component type. A component takes in
parameters, called props (short for “properties”), and returns a hierarchy of views to display
via the render method.

The render method returns a description of what you want to see on the screen. React takes the
description and displays the result. In particular, render returns a React element, which is a
lightweight description of what to render. Most React developers use a special syntax called
“JSX” which makes these structures easier to write. The
<div /> syntax is transformed at build time to React.createElement('div').`


}

btn2 = () => {
    modal.innerHTML = ""
    modal.innerHTML += `<h2 style="margin: 0%; text-align: center;" class="heading">SPA vs Mpa</h2>
<h2 class="pre-heading"> Speed</h2>
Speed is an important factor here – people’s attention spans are getting shorter, and we get
more and more impatient. SPA’s load faster. Why? As it loads the majority of app resources just
once. The page doesn’t reload entirely whenever the user requests a new piece of data.

MPA is slower as the browser must reload the entire page from scratch whenever the user wants to
access new data or moves to a different part of the website. The optimal loading time for a
website is 0.4 seconds. If your website or app is image-heavy, then choosing a SPA is a safer
option.
<img src="imgs/code2.jpg" alt="">
<h2 class="pre-heading"> Coupling</h2>
SPA is strongly decoupled, meaning that front-end and back-end are separate. Single-page
applications use APIs developed by server-side developers to read and display data. In MPA’s,
front-end and back-end are more interdependent. All coding is usually housed under one project.
<h2 class="pre-heading">Search Engine Optimization</h2>
One of the weaknesses of the SPA is SEO. Unfortunately, they aren’t as SEO friendly as MPA’s.
It’s primarily because most single-page applications are run on JavaScript, which most search
engines do not support. Web pages are indexed through “crawling” or “spidering”. Search engine
crawlers download the page’s HTML files which makes static HTML web-pages are easier to rank.

MPA enables better website positioning, as each page can be optimized for a different keyword.
Also, meta tags can be included on every page – this positively impacts Google rankings.



<h2 class="pre-heading"> User experience</h2>
A good user experience is no longer an option but a requirement. SPA’s are more mobile-friendly,
and it’s something worth remembering as a lot of traffic comes from mobile devices. Even Google
started to prioritize mobile experience over the desktop. Frameworks applied in SPA development
enable you to develop mobile apps.

MPA’s, on the other hand, enable better information architecture. You can create as many pages
as required, and you can include as much information on a page as you need without any limits.
Navigation is clear, so the user can easily find their way around the website, which positively
impacts their experience.`
}
btn3 = () => {
    modal.innerHTML = ""
    modal.innerHTML +=
        ` <h2 class="pre-heading">React:</h2>
A Javascript library for building user interfaces” (React official documentation)

<h2 class="pre-heading">Angular:</h2> A framework for building client applications in HTML and
either JavaScript or a language like TypeScript that compiles to JavaScript.” (Angular official
documentation)
<img src="imgs/AngularVSReact.png" alt="">
So Angular is a framework with lot of things already built in, like HttpClient to make HTTP requests, Routing and Navigation, Animations and
 others. It is based on modules which are boxing components and services.`

}

btn4 = () => {
    modal.innerHTML = ""
    modal.innerHTML +=
        `<h2 class="pre-heading">The Technical Difference</h2>

    The technical difference between a framework and library lies in a term called inversion of
    control.

    When you use a library, you are in charge of the flow of the application. You are choosing when
    and where to call the library. When you use a framework, the framework is in charge of the flow.
    It provides some places for you to plug in your code, but it calls the code you plugged in as
    needed.

    Let’s look at an example using jQuery (a library) and Vue.js (a framework).

    Imagine we want to display an error message when an error is present. In our example, we will
    click a button, and pretend an error occurs.
    <img src="imgs/code4.jpg" alt="">
    <ul>
        <li>Frameworks and libraries are both code written by someone else that helps you perform
            some common tasks in a less verbose way.</li>
            <li> A framework inverts the control of the program. It tells the developer what they need. A
        library doesn’t. The programmer calls the library where and when they need it.
        </li>
        <li> The degree of freedom a library or framework gives the developer will dictate how
        “opinionated” it is.
       </li>
    </ul>`
}
btn5 = () => {
    modal.innerHTML = ""
    modal.innerHTML +=
        `<h2 class="pre-heading"> DOM</h2>
Just to get things straight - DOM stands for Document Object Model and is an abstraction of a
structured text. For web developers, this text is an HTML code, and the DOM is simply called
HTML DOM. Elements of HTML become nodes in the DOM.
So, while HTML is a text, the DOM is an in-memory representation of this text.
Compare it to a process being an instance of a program. You can have multiple processes of the
same one program, just like you can have multiple DOMs of the same HTML (e.g. the same page
loaded on many tabs).
The HTML DOM provides an interface (API) to traverse and modify the nodes. It contains methods
like getElementById or removeChild. We usually use JavaScript language to work with the DOM,
because… Well, nobody knows why :).
<img src="imgs/code5.png" alt="">
<h2 class="pre-heading">Virtual DOM</h2>
First of all - the Virtual DOM was not invented by React, but React uses it and provides it for
free.
The Virtual DOM is an abstraction of the HTML DOM. It is lightweight and detached from the
browser-specific implementation details. Since the DOM itself was already an abstraction,
the virtual DOM is, in fact, an abstraction of an abstraction.Perhaps it’s better to think of
the virtual DOM as React’s local and simplified copy of the HTML DOM. It allows React to do its
computations within this
abstract world and skip the “real” DOM operations, often slow and browser-specific.`}

btn6 = () => {
    modal.innerHTML = ""
    modal.innerHTML += `<h2 style="margin: 0%;" class="heading">What is DataBinding?</h2>
    DataBinding means connecting the data to the view or UI, it means the data we defined inside our
    component is attached to the HTML template.
    <h2 class="pre-heading">One-way data binding</h2>

    One-way data-binding means the data flows in a single direction so that whenever the data
    changes in a component, it also updates the view with new data.
    <img src="imgs/code6.png" alt="">
    <h2 class="pre-heading">Two-way data binding</h2>
    Two-way data binding means data flows in both directions, it means any change happens in the
    view updates the data and any change happens in the data updates the view.

    In angular, by using ngModel directive we can create two-way data binding.`}