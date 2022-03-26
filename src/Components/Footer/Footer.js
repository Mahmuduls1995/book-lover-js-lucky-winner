import React from 'react';
import './Footer.css'
const Footer = () => {

    
                            // Question and Answer Part


    return (
        <div>
            <h2 class="bg-gradient text-center text-info my-4">Question and Answer</h2>
            <div class="container mx-auto my-4">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button collapsed text-primary fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Question:  How does React Work ?
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>React is  declarative, efficient, and flexible library for building user interfaces.</strong>
                                So React.js is generally thought of as the view layer in an application.React is divided into two major API. First, the React DOM. This is the API that’s used to perform the actual rendering on a web page. Second, there’s the React component API. These are the parts of the page that are actually rendered by React DOM. API It defines the logical structure of documents and the way a document is accessed and manipulated.. So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript.React component, the following areas
                                . Data: This is data that comes from somewhere (the component doesn’t care where), and is rendered by the component.
                                Lifecycle: These are methods that we implement that respond to changes in the lifecycle of the component. For example, the component is about to be rendered.
                                Events: This is code that we write for responding to user interactions.
                                JSX: This is the syntax of React components used to describe UI structures.
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed text-primary fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Question:  How does useState Work ?
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>useState takes a value which will be the default information stored in your shelf space.</strong>Imagine React has a large warehouse where it can store information you don't want to reset every time React updates the view. We'll call this warehouse Central Storage.
                                To be able to store information in Central Storage, we'll have to reserve shelf space. We reserve shelf space by calling useState.
                                useState returns an array with two items:
                                (1) A fresh copy of the information stored in your shelf space. We'll receive a fresh copy every time React updates the view.
                                (2)A function which let's us overwrite the information stored in your shelf space. To permanently change the information, which we receive a copy of in 1, we have to call this function with the new information.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p class="bg-secondary text-center text-white my-4 p-3">Powered By Mahmudul && Programming Hero-2022</p>
        </div>

    );
};

export default Footer;