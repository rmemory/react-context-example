# Introduction

This project provides an example of how to use React's context api. My starting point is the following project:

https://github.com/rmemory/react-basic-boilerplate

The react context API is included in the core react library as of version 16.3.

https://reactjs.org/docs/context.html

Its a way of providing a centralized location and access to state without needing to pass props up and down multiple levels, aka prop drilling.

https://blog.kentcdodds.com/prop-drilling-bb62e02cb691

Also, see this for a description for the differences between Context and Redux. 

https://daveceddia.com/context-api-vs-redux/

## Context

Context requires a context, a producer. and a consumer. See src/components/App.jsx.