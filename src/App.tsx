import { MouseEvent, useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import { Route, Routes } from "react-router-dom";
import { Menu } from "./pages/Menu/Menu";
import { Cart } from "./pages/Cart/Cart";
import { Error } from "./pages/Error/Error";

function App() {
  const [counter, setCounter] = useState<number>(0); //типипзация состояния

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
      <Routes>
        <Route path="menu" element={<Menu />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;

//у нас есть два роута на главной меню а на другой карт

{
  /* <Routes> 
<Route path="/" element={<Menu/>}/>
<Route path="Cart" element={<Cart/>}/>
</Routes> */
}

//В новой версии для указания дефолтного
//маршрута используется * вместо path="/".
