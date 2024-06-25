import React from "react";
import { Accordion,AccordionContent,AccordionItem,AccordionTrigger } from "../ui/accordion";
import about from "../../config/about.json";

const AboutSection = () => {
  return (
    <div className="min-h-screen text-white container relative z-10 flex-grow p-4">
        {about.map((item, index) => (
                <Accordion type="single" collapsible key={index}>
                    <AccordionItem value={index + 1}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>
                        {item.answer}
                    </AccordionContent>
                    </AccordionItem>
                </Accordion>
        ))}

    </div>

  );
}

export default AboutSection;