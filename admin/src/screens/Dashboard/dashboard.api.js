import { api, unauthorizedCatcher } from "@common/api";

export const getDashboardData = async () =>
    await api
        .withAuth()
        .url("api/admin/dashboard")
        .catcher(401, async (err, originalRequest) =>
            (await unauthorizedCatcher(err, originalRequest)).get().json()
        )
        .get()
        .json();
