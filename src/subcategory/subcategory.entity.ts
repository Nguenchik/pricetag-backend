import {
  JoinColumn,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Category } from '../category/category.entity'
import { Dishes } from '../dishes/dishes.entity';
@Entity()
export class Subcategory {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  name: string;

  @ManyToOne(() => Category, (category) => category.subcategory, {
    nullable: false,
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn()
  category: Category;
  @Column({ nullable: true })
  categoryId: number;

  @OneToMany(() => Dishes, (dishes) => dishes.subcategory)
  dishes: Dishes[];
}
