import React from "react";
import { Button } from "../ui/button";
import { useTheme } from "@/providers/theme-provider";

const Features = () => {
  const { setTheme } = useTheme();

  return (
    <>
      <h2 className="text-lg font-bold">Intuitive States</h2>
      <br />
      <p>States wie Hover, Fokus oder Theme-Mode:</p>
      <div className="flex flex-col justify-center items-center p-4">
        <Button className="bg-red-500 hover:bg-cyan-600 m-4">
          Hover über mich!
        </Button>
      </div>

      <h2 className="text-lg font-bold">Pseudo-Klassen</h2>
      <br />
      <p>Nützliche Utilities als State wie z.B. First oder last</p>
      <div className="flex flex-col p-4">
        {[0, 1, 2, 3, 4].map((e) => (
          <Button className="m-8 first:mt-0 last:mb-0">{`Button ${e}`}</Button>
        ))}
      </div>
      <p>
        Weitere nützliche Pseudo-Klassen (Auszug): disabled, invalid, checked
        usw
      </p>
      <br></br>

      <h2 className="text-lg font-bold">Styling basierend auf Parent-Klasse</h2>
      <br />
      <p>
        Wenn das Styling vom State des Parent abhängt, kann man es mit groups
        machen
      </p>
      <div className="p-4">
        <a
          href="#"
          className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
        >
          <div className="flex items-center space-x-3">
            <svg
              className="h-6 w-6 stroke-sky-500 group-hover:stroke-white"
              fill="none"
              viewBox="0 0 24 24"
            ></svg>
            <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">
              New project
            </h3>
          </div>
          <p className="text-slate-500 group-hover:text-white text-sm">
            Create a new project from a variety of starting templates.
          </p>
        </a>
      </div>
      <p>Gibt auch group-active, group-focus etc. </p>
      <br />

      <h2 className="text-lg w-4 font-bold">Einfaches Responsive-Design</h2>
      <br />
      <p>Die aktuelle Screen-breite ist ein State</p>
      <div className="flex justify-center p-4">
        <Button className="lg:bg-cyan-600 md:bg-amber-500 sm:bg-red-600">
          Meine Farbe ändert sich abhängig von der Screengröße
        </Button>
      </div>
      <p>
        Man kann die Screenbreiten selbst konfigurieren oder neue hinzufügen
      </p>
      <br />

      <h2 className="text-lg font-bold">Easy Theme-Mode</h2>
      <br />
      <p>Seien wir mal ehrlich, wir alle wollen nur Darkmode:</p>
      <div className="flex flex-col justify-center items-center p-4">
        <Button
          className="visible dark:hidden"
          onClick={() => setTheme("dark")}
        >
          Drücke mich, wenn bei dir beim Lightmode die Augen wegbrennen
        </Button>
      </div>
      <p>
        Effektiv stylen wir das Component auf Light-Mode und modifizierne mit
        der dark-Pseudoklasse die DInge, die sich im Dark-Mode ändern
      </p>
    </>
  );
};

export default Features;
