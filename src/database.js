import dns from "dns";
import { connect } from "mongoose";

import { MONGODB_URI } from "./config";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

console.log(
    "MONGODB_URI:",
    MONGODB_URI?.replace(/:([^:@]+)@/, ":****@")
);

(async () => {
    try {
        const db = await connect(MONGODB_URI);

        console.log("Database connected to:", db.connection.name);
        console.log("MongoDB readyState:", db.connection.readyState);

    } catch (error) {
        console.log("ERROR DE MONGODB:");
        console.log(error);
    }
})();