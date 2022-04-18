import {
  Column,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Portfolio {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  title: string;

  @Column()
  description: string;

  @Column()
  position: string;

  @Column()
  img: string;
}
