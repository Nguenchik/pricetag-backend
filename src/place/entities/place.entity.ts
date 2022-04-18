import {
  Column,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Menu } from '../../menu/menu.entity';
import { Category } from '../../category/category.entity';
import { Dishes } from '../../dishes/dishes.entity';

@Entity()
export class Place {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  address: string;

  @Column({ unique: true })
  link: string;

  // @OneToMany(() => Menu, (menu) => menu.place)
  @OneToMany(() => Menu, (menu) => menu.place, {
    // nullable: false,
  })
  // @JoinColumn({ name: 'menuId' })
  menu: Menu[];

  // @OneToMany(() => Dishes, (dishes) => dishes.place)
  // dishes: Dishes[];

  @OneToMany(() => Category, (category) => category.place, {
    // nullable: false,
  })
  // @JoinColumn({ name: 'menuId' })
  category: Category[];
}
