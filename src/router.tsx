import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import About from "./pages/About";
import Put from "./pages/Put";
import Open from "./pages/Open"
import Add from "./pages/PutPill"
import PutDone from "./pages/PutDone"
import OpenDone  from "./pages/OpenDone"

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "put",
      element: <Put></Put>,
      children: [{
        path: "",
        element: <Add></Add>,
      },
      {
        path: "put_done",
        element: <PutDone></PutDone>
      }]
    },
    {
      path: "open",
      element: <Open></Open>,
      children: [{
        path: "open_done",
        element: <OpenDone/>,
      },
      ]
    },
    {
      path: "about",
      element: <About></About>
    }
  ]);
  
  export default router;
  