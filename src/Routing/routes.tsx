import { ReactElement } from "react";
import App from "../App";
import FolderComponent from "../components/FolderComponent";
import ContextParent from "../containers/ContextParent";
import Photo from "../containers/Photo";
import { FolderData } from "../Data/FolderData";
import UseCallbackHook from "../hooks/UseCallback/useCallback";
import Factorial from "../hooks/useMemo";
import StopWatch from "../hooks/useReducer";

export const routes: {
  routeName: string;
  component: ReactElement;
}[] = [
  {
    routeName: "",
    component: <App />,
  },
  {
    routeName: "use-callback",
    component: <UseCallbackHook />,
  },
  {
    routeName: "nested-folder",
    component: <FolderComponent explorer={FolderData} />,
  },
  {
    routeName: "use-memo",
    component: <Factorial />,
  },
  {
    routeName: "use-reducer",
    component: <StopWatch />,
  },
  {
    routeName: "photo-tagging",
    component: <Photo />,
  },
  {
    routeName: "context-api",
    component: <ContextParent />,
  },
];
