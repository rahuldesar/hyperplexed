export default function Randomizccccc() {
  const handleRandomizeWords = (e: any) => {
    let word: string = e.target.innerText;

    let iterations = 0;
    const interval = setInterval(() => {
      e.target.innerText = word
        .split("")
        .map((item, index) => {
          if (index < iterations) {
            return word[index];
          }

          return String.fromCharCode(65 + Math.floor(Math.random() * 26));
        })
        .join("");

      if (iterations >= word.length) {
        clearInterval(interval);
      }

      iterations += 1 / 3;
    }, 20);
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1
        className="font-mono text-3xl text-white sm:text-8xl"
        onMouseOver={handleRandomizeWords}
        onClick={handleRandomizeWords}
      >
        RAHULDESAR
      </h1>
    </div>
  );
}
