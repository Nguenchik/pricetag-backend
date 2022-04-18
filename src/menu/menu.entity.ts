import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Place } from '../place/entities/place.entity';
import { Category } from '../category/category.entity';

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ unique: true, nullable: false })
  price: number;
  @ManyToOne(() => Place, (place) => place.menu, {
    nullable: false,
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn()
  place: Place;

  @Column({ nullable: true })
  placeId: number;

  // @OneToOne(() => Category, (category) => category.menu)
  // category: Category;
}
