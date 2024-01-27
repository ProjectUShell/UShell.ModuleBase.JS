import { IDataSource } from './iDataSource';
import { SchemaRoot } from 'fusefx-modeldescription';

export interface IDataSourceManagerBase {
  init(): Promise<void>;
  tryGetDataSource(entityName: string, storeName?: string): IDataSource | null;
  getSchemaRoot(): SchemaRoot;
}
export interface IDataSourceManager extends IDataSourceManagerBase {
  tryGetDataSourceByUid(uid: string): Promise<IDataSource | null>;
}
