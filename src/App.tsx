import { useEffect, useRef, useState } from "react";
import "./App.css";
import HeartButton from "./components/buttons/HeartButton";

function App() {
  const [isYes, setIsYes] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [randomNum, setRandomNum] = useState(1);
  const [text, setText] = useState<string>("Ты меня любишь ? :3");
  const [buttonCoords, setButtonCoords] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const happyCatImgPath = require(`./img/happy-cat${randomNum}.gif`);
  const blinkingCatImgPath = require(`./img/blinking-cat.gif`);
  const smileCatImgPath = require(`./img/smile-cat.gif`);

  const [path, setPath] = useState<string>(blinkingCatImgPath);

  const setRandomCoords = () => {
    const buttonRect = buttonRef.current?.getBoundingClientRect();

    if (buttonRect?.width && buttonRect?.height) {
      const randomX = Math.round(
        Math.random() * (window.innerWidth - buttonRect.width)
      );
      const randomY = Math.round(
        Math.random() * (window.innerHeight - buttonRect.height)
      );

      setButtonCoords({ x: randomX, y: randomY });
    }
  };

  useEffect(() => {
    if (isYes) {
      setRandomNum(Math.floor(Math.random() * 4) + 1);
      setText("Урааааа! Я тебя тоже люблю <3");
      setPath(happyCatImgPath);
    }
  }, [happyCatImgPath, isYes]);

  useEffect(() => {
    if (noCount > 0) {
      setRandomCoords();
    }
    if (noCount > 10) {
      setIsDisabled(true);
      setNoCount(0);
      setText("Кажется у тебя не осталось выбора)");
      setPath(smileCatImgPath);
    }
  }, [noCount, smileCatImgPath]);

  return (
    <>
      <div className="max-w-[90vw] flex flex-col gap-4 rounded-xl px-7 py-7 border bg-white shadow">
        <h1 className="text-4xl font-bold text-black">{text}</h1>
        <img src={path} alt="cat" />
        {isYes || (
          <div className="flex items-center justify-center gap-5">
            <HeartButton onClick={() => setIsYes(true)} className="w-[100px]">
              Да
            </HeartButton>
            <button
              ref={buttonRef}
              disabled={isDisabled}
              onClick={() => setNoCount((prev) => prev + 1)}
              className={`transition-all duration-500 px-6 py-4 bg-gray-500 text-white rounded-full active:scale-105 disabled:cursor-not-allowed disabled:opacity-50`}
              style={
                buttonCoords && noCount > 0
                  ? {
                      position: "absolute",
                      left: `${buttonCoords.x}px`,
                      top: `${buttonCoords.y}px`,
                    }
                  : {}
              }
            >
              Нет
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
