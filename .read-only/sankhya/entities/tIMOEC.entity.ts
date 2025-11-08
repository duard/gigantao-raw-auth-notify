import { Column, Entity, Index } from 'typeorm';

@Index('PK_TIMOEC', ['oeccodigo'], { unique: true })
@Entity('TIMOEC', { schema: 'SANKHYA' })
export class TimoecEntity {
  @Column('int', { primary: true, name: 'OECCODIGO' })
  oeccodigo: number;

  @Column('char', { name: 'OECOPCAOORIG', length: 2 })
  oecopcaoorig: string;

  @Column('char', { name: 'OECOPCAODEST', length: 2 })
  oecopcaodest: string;
}
