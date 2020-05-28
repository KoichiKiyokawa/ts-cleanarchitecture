import { open, save } from "https://deno.land/x/sqlite/mod.ts";
import { AbstractDBConnection } from "../interfaces/database/abstract_db_connection.ts";

const db = await open("test.db");

// SQLとの接続部分
export class SqlConnection extends AbstractDBConnection {
  // 与えられたSQLクエリを実行する
  async execute(query: string, args: any[]) {
    return db.query(query, args);
  }
}
