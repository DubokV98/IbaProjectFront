import {Structure} from './Structure';

export class Table {
  tableName: string;
  structureList: Structure[];

  constructor(tableName: string, structure: Structure[]) {
    this.tableName = tableName;
    this.structureList = structure;
  }


}
