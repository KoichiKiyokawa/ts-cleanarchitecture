export type DBConnection = {
  execute: (query: string, args?: any[]) => Promise<{ id: number }>;
};
