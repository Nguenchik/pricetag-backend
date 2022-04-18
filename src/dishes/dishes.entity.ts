import { Column, Entity, OneToMany, PrimaryGeneratedColumn, TableInheritance } from 'typeorm';
import { Category } from '../category/category.entity';
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
@Entity()
export abstract class Dishes {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ unique: true, nullable: false })
  price: number;
  // @ManyToOne(() => Place, (place) => place.dishes, {
  //   nullable: false,
  //   onDelete: 'CASCADE',
  //   eager: true,
  // })
  // @JoinColumn()
  // place: Place;

  @OneToMany(() => Category, (category) => category.dishes)
  category: Category[];
}
