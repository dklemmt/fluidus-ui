import { Suspense } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Fallback } from "@components/Fallback";
import { ErrorPage } from "@pages/Error";
import { PageContainer } from "@pages/PageContainer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageContainer />} errorElement={<ErrorPage />}>
      <Route path="/pages/*">
        <Route path="home" lazy={() => import("./pages/Home")} />
        <Route path="showroom" lazy={() => import("./pages/Showroom")} />
        <Route path="blogpost" lazy={() => import("./pages/BlogPost")} />
        <Route
          path="userlist"
          loader={() => fetch("/mock/users.json")}
          lazy={() => import("./pages/UserList")}
        />
        <Route path="imprint" lazy={() => import("./pages/Imprint")} />
      </Route>
    </Route>,
  ),
);

export const App = () => (
  <Suspense fallback={<Fallback />}>
    <RouterProvider router={router} />
  </Suspense>
);
