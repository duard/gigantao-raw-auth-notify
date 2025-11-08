import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCBVCA', ['codemp'], { unique: true })
@Entity('TCBVCA', { schema: 'SANKHYA' })
export class TcbvcaEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('varchar', { name: 'DESCRVINCULO', length: 40 })
  descrvinculo: string;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;
}
