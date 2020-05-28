export abstract class AbstractDBConnection {
  abstract async execute(query: string, args?: any[]): Promise<any>;
}
