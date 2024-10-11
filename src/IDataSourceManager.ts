import { IDataSource } from './iDataSource';
import { SchemaRoot } from 'fusefx-modeldescription';

export interface IDataSourceManagerBase extends IDataSourceManagerWidget {
  init(): Promise<void>;
}

export interface IDataSourceManager extends IDataSourceManagerBase {
  tryGetDataSourceByUid(uid: string): Promise<IDataSource | null>;
}

export interface IDataSourceManagerWidget {
  tryGetDataSource(entityName: string, storeName?: string): IDataSource | null;
  getSchemaRoot(): SchemaRoot;
}
