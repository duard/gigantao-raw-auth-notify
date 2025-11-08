import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCBHID', ['codhis'], { unique: true })
@Entity('TCBHID', { schema: 'SANKHYA' })
export class TcbhidEntity {
  @Column('smallint', { primary: true, name: 'CODHIS' })
  codhis: number;

  @Column('datetime', { name: 'DTEXEC', default: () => 'getdate()' })
  dtexec: Date;

  @Column('varchar', { name: 'MSG', length: 255 })
  msg: string;

  @Column('varchar', { name: 'TIPOATUALIZACAO', nullable: true, length: 1 })
  tipoatualizacao: string | null;

  @Column('int', { name: 'TEMPOGASTO', nullable: true })
  tempogasto: number | null;
}
