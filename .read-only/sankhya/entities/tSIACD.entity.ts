import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIACD', ['nudsb', 'codusu', 'codgrupo'], { unique: true })
@Entity('TSIACD', { schema: 'SANKHYA' })
export class TsiacdEntity {
  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('smallint', { primary: true, name: 'CODGRUPO' })
  codgrupo: number;

  @Column('int', { primary: true, name: 'NUDSB' })
  nudsb: number;

  @Column('char', { name: 'CONS', nullable: true, length: 1 })
  cons: string | null;
}
