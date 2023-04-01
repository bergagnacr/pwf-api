import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Factory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => FactoryChartData, (factoryChart) => factoryChart.id)
  chart_data: FactoryChartData[];
}

@Entity()
export class FactoryChartData {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  sprocket_production_actual: number;

  @Column()
  sprocket_production_goal: number;

  @Column()
  time: number;

  @ManyToOne(() => Factory, (factory) => factory.id)
  factory: Factory;
}
