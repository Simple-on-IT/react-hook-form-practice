import { RouteObject } from "react-router-dom";
import { MainPage } from "../../pages/MainPage/ui/MainPage";
import ErrorBoundary from "@/app/providers/ErrorBoundary";

export enum AppRoutes {
    MAIN = 'main',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteObject & { title: string }> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <ErrorBoundary><MainPage /></ErrorBoundary>,
        title: 'Основная страница',
    },

    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <div></div>,
        title: 'Не найдена',
    },
};
