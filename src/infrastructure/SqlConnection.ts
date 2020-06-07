import { DB } from "https://deno.land/x/sqlite@v2.1.0/mod.ts";
import { IDbConnection } from "../interfaces/database/IDbConnection.ts";

const db = new DB("test.db");

// SQLとの接続部分
export class SqlConnection implements IDbConnection {
  // 与えられたSQLクエリを実行する
  async execute(query: string, args: any[]) {
    const result = db.query(query, args);
    // db.close();
    return result;
  }
}
