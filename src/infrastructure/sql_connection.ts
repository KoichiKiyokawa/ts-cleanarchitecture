import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { AbstractDBConnection } from "../interfaces/database/abstract_db_connection.ts";

const db = new DB("test.db");

// SQLとの接続部分
export class SqlConnection extends AbstractDBConnection {
  // 与えられたSQLクエリを実行する
  async execute(query: string, args: any[]) {
    const result = db.query(query, args);
    // db.close();
    return result;
  }
}
