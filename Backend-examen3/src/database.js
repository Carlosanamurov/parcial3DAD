
import { Pool } from 'pg'

export const pool = new Pool(
{
host:'ec2-52-202-152-4.compute-1.amazonaws.com',
user:'xflgxbwgzqvlfd',
password:'da50e9577bb8edb5fa76ef97e7229024630f05facaf830fd082326627dff46ce',
database:'dbra31of2a3n6n',
port:5432,
ssl: { rejectUnauthorized: false}

}
);