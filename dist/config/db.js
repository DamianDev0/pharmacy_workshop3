import mysql from "mysql2/promise";
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "pharmacy_database",
    port: 3306,
    password: "damian45d5",
});
async function getConnection() {
    try {
        const connection = await pool.getConnection();
        console.log("connection stablish ");
        return connection;
    }
    catch (error) {
        console.log("Dtabase connection error", error);
        throw error;
    }
}
getConnection();
export { pool };
