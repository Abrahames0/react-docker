import { createPool } from 'mysql2/promise'

export const pool = createPool({
    host: 'mysql-db',
    port: 3306,
    user: 'admin',
    password: 'admin',
    database: 'tasksdb'
})


