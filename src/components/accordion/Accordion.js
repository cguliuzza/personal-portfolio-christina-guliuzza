import React from 'react'

const Accordion = () => {
    return (
        <>
            <section class="ac-container">
                <div>
                    <input id="ac-1" name="accordion-1" type="checkbox" />
                    <label for="ac-1">About us</label>
                    <article class="ac-small">
                        <p>Some content... </p>
                    </article>
                </div>
                <div>
                    <input id="ac-2" name="accordion-1" type="checkbox" />
                    <label for="ac-2">How we work</label>
                    <article class="ac-medium">
                        <p>Some content... </p>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Accordion
