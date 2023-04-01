import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sprockets {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  teeth: number;

  @Column()
  pitch_diameter: number;

  @Column()
  outside_diameter: number;

  @Column()
  pitch: number;
}
