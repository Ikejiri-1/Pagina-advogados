import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Base } from "../pages/Base";
import { DireitoTrabalhista } from "../pages/Direito-trabalhista";
import { Direito1 } from "../pages/Direito-1";
import { Direito2 } from "../pages/Direito-2";
import { Direito3 } from "../pages/Direito-3";

export function Root() {
  return (
    <Routes>
      <Route path="/" element={<Base />}>
        <Route path="/" element={<Home />} />
        <Route path="/direito-trabalhista" element={<DireitoTrabalhista />} />
        <Route path="/direito-1" element={<Direito1 />} />
        <Route path="/direito-2" element={<Direito2 />} />
        <Route path="/direito-3" element={<Direito3 />} />
      </Route>
    </Routes>
  );
}
