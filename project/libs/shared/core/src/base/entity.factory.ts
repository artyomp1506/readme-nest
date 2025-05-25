import { StorableEntity } from './storable_entity.interface';

export interface EntityFactory<T extends StorableEntity<ReturnType<T['toPOJO']>>> {
  create(entityPlainData: ReturnType<T['toPOJO']>): T;
}
