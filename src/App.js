import MyPage from "./components/MyPage";
import MyPageContext from "./components/MyPageContext";
import ShoppingCard from "./components/ShoppingCard";

function App() {
  return (
    <div>
      <ShoppingCard />
      <hr />
      <h1>React context API</h1>
      <MyPageContext />

      <hr />
      <MyPage />
    </div>
  );
}

export default App;
