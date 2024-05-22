import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Fallback } from "@components/Fallback";

const Home = lazy(() => import("./pages/Home") as never);
const About = lazy(() => import("./pages/About") as never);
// const Contact = lazy(() => import("./pages/Contact") as never);
const Imprint = lazy(() => import("./pages/Imprint") as never);

const App = () => (
  <Suspense fallback={<Fallback />}>
    <Routes>
      <Route path="/pages/home" element={<Home />} />
      <Route path="/pages/about" element={<About />} />
      {/* <Route path="/pages/contact" element={<Contact />} /> */}
      <Route path="/pages/imprint" element={<Imprint />} />
    </Routes>
  </Suspense>
);

export default App;
