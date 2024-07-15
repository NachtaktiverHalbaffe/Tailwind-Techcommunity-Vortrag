import React from "react";

const Why = () => {
  return (
    <div>
      <ul>
        <p>Aus der Doku:</p>
        <li>
          {
            "- Keine Energie verschwenden, CSS Klassennammen zu finden => Klassennamen von Tailwind intuitiv und mMn gut gewählt"
          }
        </li>
        <li> - Ist nicht global wie CSS</li>
        <li> - Keine riesige CSS Dateien</li>
        <li>
          - In Gegensatz zu Inline-Styles: Tailswind kann auch States und
          Utilities wie Media-Queries
        </li>
      </ul>
      <br />
      <p>Aus meiner Sicht viel wichtiger</p>
      <ul>
        <li>
          - Vorgefertigte Abstände Abstände, Farben etc. machen es schwieriger,
          sich mit Styling in den eigenen Fuß zu schießen
        </li>
        <li>
          - Richtiges Separation of Concerns: Ich sehe direkt, wie meine
          Component aussieht anstatt zwischen HTML und SCSS hüpfen müssen
        </li>
        <li> - Vereinfachung von gallischen CSS-Flüchen (Siehe später)</li>
        <li> - Einfacheres modifizieren von Styles existierender Components</li>
        <li> - Subjektiv: Leserlicher </li>
        <li>
          - Subjektiv: Ohne CSS stylen ohne komplett zu vergessen, wie CSS
          funktioniert
        </li>
      </ul>
    </div>
  );
};

export default Why;
