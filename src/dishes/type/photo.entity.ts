import { Column, ChildEntity, Entity } from 'typeorm';
import { Dishes } from '../dishes.entity';

@ChildEntity()
export class Photo extends Dishes {
  @Column()
  photo: string;
}
