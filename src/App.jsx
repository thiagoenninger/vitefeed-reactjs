import { Header } from "./components/Header";
import { Post } from "./Post";

import './global.css';

export function App() {
  return (
    <div>
      <Header/>
      <Post author="Thiago Enninger" content="Aqui vai o conteúdo do autor" />
      <Post author="Stephanie Echevarria" content="Outro post muito positivo"/>
      <Post />
    </div>
  );
}
