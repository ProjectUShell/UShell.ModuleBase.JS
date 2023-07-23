import { EntitySchema } from 'fusefx-modeldescription';
import { PagingParams } from './PagingParams';
import { PaginatedList } from './PaginatedList';

export interface IDataSource {

    //TODO: transformation to a state of max compatibility to UDAS-standard

    dataSourceUid: string;
    entitySchema?: EntitySchema;

    //if null, the action is not supported!
    readonly  entityFactoryMethod: ()=>object;
    readonly  entityUpdateMethod: (entity: object)=>Promise<boolean>;
    readonly  entityInsertMethod: (entity: object)=>Promise<boolean>;
    readonly  entityDeleteMethod: (entity: object)=>Promise<boolean>;

    //getRecordCount(): Observable<number>;

    extractIdentityFrom(entity: object): object;
    containsIdentityOf(entity: object): Promise<boolean>;

    getRecords(pagingParams?: PagingParams): Promise<PaginatedList>;
    getRecord(identityFields: object): Promise<object>;

}
