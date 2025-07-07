import { SQLiteMock } from './sqlite.mock';

describe('SqliteMock', () => {
  it('should create an instance', () => {
    expect(new SQLiteMock()).toBeTruthy();
  });
});
