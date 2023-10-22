import "@patternfly/elements/pf-card/pf-card.js";
import "@patternfly/elements/pf-icon/pf-icon.js";
import "@patternfly/elements/pf-button/pf-button.js";
import "@patternfly/elements/pf-accordion/pf-accordion.js";
import { useRef } from "react";

export function UseRefExample() {
  const cardRef = useRef(null);
  const accordionRef = useRef(null);

  const handleClick = () => {
    console.log("button clicked!");
    console.log(cardRef.current.size); // Accessing the size property of the pf-card web component
  };

  const openAccordion = () => {
    console.log("accordion clicked!");
    accordionRef.current.toggle(0);
  };

  return (
    <div className="">
      <pf-card ref={cardRef} size="compact">
        <h3 slot="header">Header</h3>
        <p>This is the compact card</p>
      </pf-card>
      <pf-accordion ref={accordionRef}>
        <pf-accordion-header>
          <h3>Laboris sunt qui dolor consectetur excepteur in aliqua ipsum?</h3>
        </pf-accordion-header>
        <pf-accordion-panel>
          <p>Culpa adipisicing sunt dolor ullamco dolor duis in ad commodo.</p>
        </pf-accordion-panel>
      </pf-accordion>
      <pf-button onClick={handleClick}>Access property</pf-button>
      <pf-button onClick={openAccordion}>Expand Accordion</pf-button>
    </div>
  );
}
