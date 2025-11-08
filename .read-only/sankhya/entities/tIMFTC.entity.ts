import { Column, Entity, Index } from 'typeorm';

@Index('PK_TIMFTC', ['ftccodigo'], { unique: true })
@Entity('TIMFTC', { schema: 'SANKHYA' })
export class TimftcEntity {
  @Column('int', { primary: true, name: 'FTCCODIGO' })
  ftccodigo: number;

  @Column('float', { name: 'FTCVALOR', nullable: true, precision: 53 })
  ftcvalor: number | null;

  @Column('float', { name: 'FTCTAXA', nullable: true, precision: 53 })
  ftctaxa: number | null;

  @Column('float', { name: 'FTCFIXO', nullable: true, precision: 53 })
  ftcfixo: number | null;
}
