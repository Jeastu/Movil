// src/mocks/sqlite.mock.ts
export class SQLiteMock {
  async create(config: any): Promise<any> {
    return {
      executeSql: async (query: string, params?: any[]) => ({ rows: [] }),
      transaction: async (fn: any) => fn(),
    };
  }
}
