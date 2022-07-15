import { ERoutePaths } from "@nx-stack/types";
import { Route } from "react-router-dom";
import { Page_Home } from "./Home";

export default [<Route path={ERoutePaths.INDEX} element={<Page_Home />} />];
