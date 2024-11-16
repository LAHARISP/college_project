import sql from 'mssql';

// Configuration for Windows Authentication
const config = {
    server: process.env.LAHARISP88\SQLEXPRESS, // Server name or IP address
    database: process.env.Course_Reg, // Database name
    port: parseInt(process.env.DB_PORT || '1433', 10), // Default MSSQL port
    options: {
        encrypt: true, // Use encryption (mandatory for Azure)
        trustServerCertificate: true, // Use in local development
    },
    authentication: {
        type: 'ntlm', // Use NTLM for Windows Authentication
        options: {
            domain: process.env.DB_DOMAIN, // Your Windows domain (or omit if standalone)
            userName: process.env.DB_USER, // Optional: Use the running Windows user's credentials
            password: process.env.DB_PASSWORD, // Optional: Leave blank if not needed
        },
    },
};

// Singleton connection pool
let pool: sql.ConnectionPool | null = null;

export async function getDbConnection() {
    if (!pool) {
        pool = await sql.connect(config);
    }
    return pool;
}
