import React from 'react'
import './Accordion.css';

const Accordion = () => {
    const onPanelClick = () => {
        let acc = document.getElementsByClassName("accordion");
        let i;
    
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                let panel = this.nextElementSibling;

                (panel.style.display === "block") ? (panel.style.display = "none") : 
                (panel.style.display = "block")

                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    }
    
    return (
        <>
            <section class="ac-container" onClick={onPanelClick}>
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