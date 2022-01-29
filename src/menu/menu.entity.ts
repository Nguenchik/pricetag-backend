import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Place } from '../place/entities/place.entity';

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ unique: true, nullable: false })
  price: number;

  // @Field(() => Place)
  // @ManyToOne(() => Place, (place) => place.menu, {
  //   onDelete: 'CASCADE',
  //   nullable: false,
  // })
  @ManyToOne(() => Place, (place) => place.menu, {
    nullable: false,
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn()
  place: Place;

  @Column({ nullable: true })
  placeId: number;
}
