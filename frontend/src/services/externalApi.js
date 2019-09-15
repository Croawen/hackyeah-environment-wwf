import wretch from "wretch";

const externalApi = wretch().url(
  process.env.API_URL || "http://localhost:4000"
);

export default externalApi;
