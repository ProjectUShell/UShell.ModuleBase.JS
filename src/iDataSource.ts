import { EntitySchema } from 'fusefx-modeldescription';
import { PagingParams } from './PagingParams';
import { PaginatedList } from './PaginatedList';
import { LogicalExpression } from './LogicalExpression';
import { SortingField } from './SortingField';

export interface IDataSource {
  // TODO: transformation to a state of max compatibility to UDAS-standard

  dataSourceUid: string;
  entitySchema?: EntitySchema;

  // if null, the action is not supported!
  readonly entityFactoryMethod: () => object;
  readonly entityUpdateMethod: (entity: object) => Promise<boolean>;
  readonly entityInsertMethod: (entity: object) => Promise<boolean>;
  readonly entityDeleteMethod: (entity: object) => Promise<boolean>;

  // getRecordCount(): Observable<number>;

  extractIdentityFrom(entity: object): object;
  containsIdentityOf(entity: object): Promise<boolean>;

  getRecords(
    filter?: LogicalExpression,
    pagingParams?: PagingParams,
    sortingParams?: SortingField[],
  ): Promise<PaginatedList>;
  getRecord(identityFields: object): Promise<object>;
}
