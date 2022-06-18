import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Post author="Thiago Enninger" content="Aqui vai o conteúdo do autor" />
      <Post author="Stephanie Echevarria" content="Outro post muito positivo"/>
      <Post />
    </div>
  );
}
