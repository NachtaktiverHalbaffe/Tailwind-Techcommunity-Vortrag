import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Wishtopics = () => {
  return (
    <>
      <h2 className="text-lg font-medium">Animationen</h2>
      <br />
      <p>Gibt vorgefertigte Animationen, z.B.:</p>
      <div className="flex justify-center items-center p-4">
        <div className="flex flex-col justify-center items-center p-4">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
          Ping
        </div>

        <div className="flex flex-col justify-center items-center p-4">
          <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-700 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          Pulse
        </div>

        <div className="flex flex-col justify-center items-center p-4">
          <Avatar className="animate-bounce">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          Bounce
        </div>
      </div>

      <br />
      <br />
      <p>
        Man kann es aber auch selbst animieren. Hierfür kann man Keyframes
        definieren:
      </p>
      <br />
      <SyntaxHighlighter
        language="HTML"
        PreTag="div"
        className="rounded-2xl"
        style={vs2015}
        children={`module.exports = {
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    }
  }
}`}
      />
      <br />
      <p>Und dann daraus ne Animation basteln:</p>
      <br />
      <SyntaxHighlighter
        language="HTML"
        PreTag="div"
        className="rounded-2xl"
        style={vs2015}
        children={`module.exports = {
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    }
  }
}`}
      />

      <br></br>
      <p>
        Man kann aber auch es sich "On-The-Fly" generieren lassen (Animation,
        nicht keyframes)
      </p>
      <SyntaxHighlighter
        language="HTML"
        PreTag="div"
        className="rounded-2xl"
        style={vs2015}
        children={`<div class="animate-[wiggle_1s_ease-in-out_infinite]">
  <!-- ... -->
</div>`}
      />
      <br />
      <div className="flex flex-col justify-center items-center p-4">
        <div className="animate-[wiggle_1s_ease-in-out_infinite]">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </>
  );
};

export default Wishtopics;
