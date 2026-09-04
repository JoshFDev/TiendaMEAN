import {connect } from "mongoose";

(async () => {
    try{
        const db = await connect("mongodb://localhost:27017/tiendaweb-mongo");
        console.log("Database conected to", db.connection.name);
    }catch(error){
        console.log(error);
    }
})();

