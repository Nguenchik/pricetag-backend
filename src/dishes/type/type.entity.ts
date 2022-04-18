import { Column, ChildEntity, Entity } from 'typeorm';
import { Dishes } from '../dishes.entity';

@ChildEntity()
export class Type extends Dishes {
  @Column()
  type: string;
}
