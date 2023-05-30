import { TraditionalTvRoutes, TraditionalTvRoutesConfig } from "./routes-config";
import { TraditionalTvRoutesNames } from "./routes-names";

export const getRoutePath = (routeName: TraditionalTvRoutesNames) => {
    const route: TraditionalTvRoutesConfig = TraditionalTvRoutes[routeName];
    return route.path;
};