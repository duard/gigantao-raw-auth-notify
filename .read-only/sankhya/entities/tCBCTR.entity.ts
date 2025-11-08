import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCBCTR', ['codctactb', 'tipo'], { unique: true })
@Entity('TCBCTR', { schema: 'SANKHYA' })
export class TcbctrEntity {
  @Column('int', { primary: true, name: 'CODCTACTB' })
  codctactb: number;

  @Column('smallint', { primary: true, name: 'TIPO' })
  tipo: number;

  @Column('varchar', { name: 'CODCTAREF', length: 30 })
  codctaref: string;
}
