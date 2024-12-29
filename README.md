unsplash : download free images
ejs-mate
bootstrap : for styling, cards, forms, validation
font awesome : for icons
font awesome cdn : so that icons can be seen on website
google fonts : for fonts
mdn : for docs/learnings
joi -> an npm package : to validate our schema/ object schema validation

error handled by : error handling middleware, wrap async

Part 2 :-
Added reviews in listing schema, created reviews schema separately

create reviews: 1. Creating form 2. submitting the form
will create forms which will take reviews as input -> 1. form created
connect form to a route to make it functional -> 2.
as we submit the form -> POST request to /reviews
validation to be added to client side review as well as server side review so that the review placeholder does not submit an empty string

1. client side validation(form)
2. server side validation (joi) -> to prevent empty string from being submitted

.populate() -> to show the data of an object id

delete reviews function -> POST request sent to /listings/:id/reviews/:reviewId

Express router, cookies->how cookies are used for personalization for user preferences

Express sessions : server side data -> saved in a temporary storage -> creates a session id for it(unique) -> this is sent to client(browser) => which saves the session id
: creates a session middleware which consists of many options
Flash/ flash msgs
used for user authentication - login/signup
authorization - after login what all the user has access to
Hashing passwords
salting, reverse lookup table
passport -> npm library that help in authentication, express compatible authentication middleware for node.js
passport-local
passport-local-mongoose -> simplifies building username and password
configuring strategy -> middleware that initializes passport
Signup-register; login-authenticate, passport, etc
logout-passport
login after signup, post-login, etc
listing owner : authorization
nested populate
