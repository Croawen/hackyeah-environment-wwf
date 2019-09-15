import wretch from "wretch";
import history from "@/redux/history";

const w = wretch()
    .content("application/json")
    .catcher("Error", err => {
        throw err;
    })
    .catcher("TypeError", err => {
        throw err;
    });

export const api = {
    noAuth: () =>
        w.catcher(401, (err, req) => {
            return history.push("/login");
        })
};
