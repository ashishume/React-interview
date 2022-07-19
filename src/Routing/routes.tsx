import { ReactElement } from "react";
import App from "../App";
import FolderComponent from "../components/FolderComponent";
import Photo from "../containers/Photo";
import { FolderData } from "../Data/FolderData";
import Dashboard from "../e-commerce/components/dashboard";
import Cart from "../e-commerce/containers/cart";
import Input from "../hooks/customHooks/input";
import UseCallbackHook from "../hooks/UseCallback/useCallback";
import UseContext from "../hooks/UseContext";
import Factorial from "../hooks/useMemo";
import UseMemo2 from "../hooks/useMemo2";
import StopWatch from "../hooks/useReducer";
import UseRef from "../hooks/useRef";

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
    routeName: "use-memo2",
    component: <UseMemo2 />,
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
    component: <UseContext />,
  },
  {
    routeName: "store",
    component: <Dashboard />,
  },
  {
    routeName: "store/cart",
    component: <Cart />,
  },
  {
    routeName: "use-ref",
    component: <UseRef />,
  },
  {
    routeName: "custom-hooks",
    component: <Input />,
  },
];
