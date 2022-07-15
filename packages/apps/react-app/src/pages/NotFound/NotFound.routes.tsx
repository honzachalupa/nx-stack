import { ERoutePaths } from "@nx-stack/types";
import { Route } from "react-router-dom";
import { Page_NotFound } from "./NotFound";

export default [
    <Route path={ERoutePaths.NOT_FOUND} element={<Page_NotFound />} />,
    <Route element={<Page_NotFound />} />,
];
