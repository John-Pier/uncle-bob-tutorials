const Pool = require('pg').Pool
const pool = new Pool({
    user: 'my_user',
    host: 'localhost',
    database: 'my_database',
    password: 'root',
    port: 5432,
});

// const connectionString = process.env.DATABASE_URL || "postgres://localhost:5432/*";
// const client = new pool.Client(connectionString);
// client.connect();
// const query = client.query("CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)");
// query.on('end', function() { client.end(); });
