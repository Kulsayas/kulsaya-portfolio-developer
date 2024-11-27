import App from "../App";
import DetailOnlineGame from "../Pages/DetailOnlineGame";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/detail/:id",
    element: <DetailOnlineGame />,
  },
]);

export default router;
