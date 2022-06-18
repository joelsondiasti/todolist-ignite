import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Tasks } from "./components/Tasks";

import "./styles/global.css";

function App() {
  return (
    <>
      <Header />
      <Search />
      <Tasks />
    </>
  );
}
export default App;
