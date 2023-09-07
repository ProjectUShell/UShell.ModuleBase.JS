import { SchemaRoot } from "fusefx-modeldescription"
import { IDataSource } from "./iDataSource"

export interface IDataStore {
  getSchemaRoot(): SchemaRoot   
  tryGetDataSource(enityName: string): IDataSource | null  
}

// FuseStore implementiert IStore und IDataSourceManager

// export class DataStoreDescription {
//   key: string = ''
//   providerClass: 'localstore' | 'fuse' = 'fuse'
//   providerArguments?: any
// }