import FolderComponent from "./components/FolderComponent";
import FolderData from "./Data/FolderData";
import Photo from "./containers/Photo";
import "./style.scss";
const App = () => {
  return (
    <div>
      <Photo />
      {/* <FolderComponent explorer={FolderData} /> */}
    </div>
  );
};

export default App;
