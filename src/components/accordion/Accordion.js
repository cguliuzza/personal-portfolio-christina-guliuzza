import React from 'react'
import './Accordion.css';

const Accordion = () => {
    return (
        <>
            <section class="ac-container">
                <button class="accordion">Section 1</button>
                <div class="panel">
                <p>Lorem ipsum...</p>
                </div>

                <button class="accordion">Section 2</button>
                <div class="panel">
                <p>Lorem ipsum...</p>
                </div>

                <button class="accordion">Section 3</button>
                <div class="panel">
                <p>Lorem ipsum...</p>
                </div>
            </section>
        </>
    )
}

export default Accordion
