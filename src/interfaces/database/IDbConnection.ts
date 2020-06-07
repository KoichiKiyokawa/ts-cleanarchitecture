export interface IDbConnection {
  execute(query: string, args?: (string | number)[]): Promise<any>;
}
