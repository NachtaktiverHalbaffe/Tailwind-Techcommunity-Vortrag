import Navbar from "./components/scaffolding/navbar";
import Features from "./components/talking-points/features";
import Fundamentals from "./components/talking-points/fundamentals";
import Tipps from "./components/talking-points/tipps";
import Why from "./components/talking-points/why";
import Wishtopics from "./components/talking-points/wishtopics";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "./components/ui/accordion";
import { ThemeProvider } from "./providers/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <h1>Einführung</h1>
      <br />
      <p>
        HTML w/out Styling = Hässlich
        <br /> <br />
        Zuletzt "CSS-Improver" mit SCSS,SASS & LESS gesehen
        <br />
        <br />
        Jetzt Tailwind, da des Thema auch noch aufkam und einigen etwas mehr
        Interesse am Thema Tailwind hatten
      </p>
      <div className="m-4">
        <Accordion type="multiple">
          <AccordionItem value="what">
            <AccordionTrigger>Was ist Tailwind?</AccordionTrigger>
            <AccordionContent>
              <Fundamentals />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="multiple">
          <AccordionItem value="why">
            <AccordionTrigger>
              Warum Tailwind anstatt klassisches CSS?
            </AccordionTrigger>
            <AccordionContent>
              <Why />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="multiple">
          <AccordionItem value="features">
            <AccordionTrigger>Was bietet Tailwind noch?</AccordionTrigger>
            <AccordionContent>
              <Features />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="multiple">
          <AccordionItem value="why">
            <AccordionTrigger>Wunschthemen</AccordionTrigger>
            <AccordionContent>
              <Wishtopics />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="multiple">
          <AccordionItem value="why">
            <AccordionTrigger>Tipps & Tricks</AccordionTrigger>
            <AccordionContent>
              <Tipps />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </ThemeProvider>
  );
}

export default App;
