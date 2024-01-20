import { MouseEvent } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

function App() {
  const addCounter = (e: MouseEvent) => {
    console.log(e);
  };

  return (
    <>
      <Button appearance="small" onClick={addCounter}>
        Кнопка{" "}
      </Button>
      <Button appearance="big" onClick={addCounter}>
        Кнопка{" "}
      </Button>
      <Input isValid={true} placeholder="Email" />

      <div>
        <a href="/menu">Меню</a>
        <a href="/cart">Коризна</a>
      </div>
    </>
  );
}

export default App;
