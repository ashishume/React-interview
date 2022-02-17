import FolderComponent from "./components/FolderComponent";
import FolderData from "./Data/FolderData";
import "./style.scss";
const App = () => {
  return (
    <div>
      <FolderComponent explorer={FolderData} />
    </div>
  );
};

export default App;
