import { Column, Entity, OneToMany, PrimaryGeneratedColumn, TableInheritance, JoinColumn, ManyToOne } from 'typeorm';
import { Category } from '../category/category.entity';
import { Place } from '../place/entities/place.entity';
import { Subcategory } from '../subcategory/subcategory.entity';

@TableInheritance({ column: { type: 'varchar', name: 'type' } })
@Entity()
export abstract class Dishes {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ unique: true, nullable: false })
  price: number;

  @ManyToOne(() => Subcategory, (subcategory) => subcategory.dishes, {
    nullable: true,
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn()
  subcategory: Subcategory;
  @Column({ nullable: true })
  subcategoryId: number;
  // @OneToMany(() => Category, (category) => category.dishes)
  // category: Category[];
  @ManyToOne(() => Place, (place) => place.dishes, {
    nullable: false,
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn()
  place: Place;

  @Column({ nullable: true })
  placeId: number;
}
