import React from 'react';

const Blogs = () => {
    return (
        <div>
           
           <b>Question 1: How will you improve the performance of a React Application?</b>
           <p></p>
Answer: As react js use virtual dom for its work so the performance is already very optimized.
but still we can boost improve it's performance using some follwoing methods:
1. We can use useMemo hook for memorising the components
2. Clean up method can be used after rendering data
3. For memorise function declarations we can use useCallback hook
4. We can use react fragment to avoid adding extra nodes to the DOM
5. We can avoid anonymous functions where its not needed
6. We have to avoid using index as key for map function
7. We can always use CDN for boost up performance
<p></p>


<b>Question 2:What is a unit test? Why should write unit tests?</b>
Answer: Usint test is a type of application testing where all components and units are tested indivisually.
A unit can not only be component but also can be functions,methods,module etc.
It is very important because by this we are able to validate that each and every unit/functions are perform accurately within our application. It's basically done during development phrase.

<p></p>

<b>Question 3: How does prototypical inheritance work?</b>
<p></p>
Ansswer: Prototypal inheritance is when an object inherits from another object.
<p></p>
Its based on parent classes, assigned varibale and methods.Parents are the main classes we want to extend and one class can extend other classes.Variables are the number of stored value that instances will have.Methods is a table of fucntions that describes which services each instance of the class will support.
and these all togather how the prototype inheritance works.
<p></p>
<b>Question 4:  Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</b>
<p></p>
Answer: As react use its own virtual dom and compare the main dom and virtual dom. Then it update the the area where the change happen. If we direct assing into the products array then the the whole value will be replaced but if we update the value with setProduct then we can get the previous value and new changes will be reflected.
<p></p>
<b>Question 5: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</b>
<p></p>
Answer: Atfirst I need to take a search variable using useState hook.
<p></p>
then where im goona map the product I will implement inlcude function in the product name to check if the product name match with my search text.
for beter search I will turn the search work toLowerCase function and product name all toLowerCase function so that the seach text and product name matches succesfully.

           
        </div>
    );
};

export default Blogs;