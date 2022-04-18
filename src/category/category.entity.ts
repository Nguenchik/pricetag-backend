import { JoinColumn, Column, Entity, OneToOne, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Menu } from '../menu/menu.entity';
import { Place } from '../place/entities/place.entity';
import { Dishes } from '../dishes/dishes.entity';
import { Subcategory } from '../subcategory/subcategory.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  name: string;

  // @OneToOne(() => Menu, (menu) => menu.category, {
  //   nullable: false,
  //   onDelete: 'CASCADE',
  //   eager: true,
  // })
  // @JoinColumn()
  // menu: Menu;
  //
  // @Column({ nullable: true })
  // menuId: number;

  @ManyToOne(() => Place, (place) => place.category, {
    nullable: false,
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn()
  place: Place;

  @Column({ nullable: true })
  placeId: number;

  @ManyToOne(() => Dishes, (dishes) => dishes.category, {
    nullable: false,
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn()
  dishes: Dishes;
  @Column({ nullable: true })
  dishesId: number;

  @OneToMany(() => Subcategory, (subcategory) => subcategory.category)
  subcategory: Subcategory[];
}
