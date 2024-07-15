import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import logo from "@/assets/react.svg";

const Fundamentals = () => {
  return (
    <>
      <p>Angenommen wir wollen folgende Component entwerfen:</p>
      <br />
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <img className="h-12 w-12" src={logo} alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>
      <br></br>
      <p>
        Tailwind ermöglicht es, HTML anstatt klassisch in getrennten HTML und
        Custom CSS Files/properties:
      </p>
      <br />
      <SyntaxHighlighter
        language="HTML"
        PreTag="div"
        className="rounded-2xl"
        style={vs2015}
        children={`<div class="chat-notification">
        <div class="chat-notification-logo-wrapper">
          <img class="chat-notification-logo" src="/img/logo.svg" alt="ChitChat Logo">
        </div>
        <div class="chat-notification-content">
          <h4 class="chat-notification-title">ChitChat</h4>
          <p class="chat-notification-message">You have a new message!</p>
        </div>
      </div>

      <style>
        .chat-notification {
          display: flex;
          align-items: center;
          max-width: 24rem;
          margin: 0 auto;
          padding: 1.5rem;
          border-radius: 0.5rem;
          background-color: #fff;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .chat-notification-logo-wrapper {
          flex-shrink: 0;
        }
        .chat-notification-logo {
          height: 3rem;
          width: 3rem;
        }
        .chat-notification-content {
          margin-left: 1.5rem;
        }
        .chat-notification-title {
          color: #1a202c;
          font-size: 1.25rem;
          line-height: 1.25;
        }
        .chat-notification-message {
          color: #718096;
          font-size: 1rem;
          line-height: 1.5;
        }
      </style>`}
      />
      <br />
      <p>
        Das Styling direkt in HTML mithilfe von vordefnierte Klassen zu
        definieren:
      </p>
      <br />
      <SyntaxHighlighter
        language="HTML"
        PreTag="div"
        className="rounded-2xl"
        style={vs2015}
        children={`<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>`}
      />
      <br />
      <p>
        Effektiv müssen wir somit kein Custom CSS/SCSS/SASS/LESS schreiben.
        Außerdem reduziert es die LoC für das Styling, weil CSS-Attribute
        zusammengefasst werden bei zeitlgeicher guter atomarität
      </p>
      <br />
      <p>
        Under the Hood laufen wieder Pre-Processor (PostCSS) für CSS (in v4 wird
        ein neuer, performanter Processor in RUst geschrieben)
      </p>
    </>
  );
};

export default Fundamentals;
