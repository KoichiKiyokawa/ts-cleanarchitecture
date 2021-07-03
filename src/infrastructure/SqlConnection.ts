import { config } from "https://deno.land/x/dotenv/mod.ts";
import { Client } from "https://deno.land/x/mysql/mod.ts";
import { IDbConnection } from "../interfaces/database/IDbConnection.ts";

const db = await new Client().connect(config())

// SQLとの接続部分
export class SqlConnection implements IDbConnection {
  // 与えられたSQLクエリを実行する
  async execute(query: string, args: any[]) {
    const result = db.query(query, args);
    // db.close();
    return result;
  }
}
