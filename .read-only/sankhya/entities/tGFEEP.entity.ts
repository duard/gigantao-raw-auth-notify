import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEEP', ['codest', 'codetp'], { unique: true })
@Entity('TGFEEP', { schema: 'SANKHYA' })
export class TgfeepEntity {
  @Column('int', { primary: true, name: 'CODEST' })
  codest: number;

  @Column('int', { primary: true, name: 'CODETP' })
  codetp: number;

  @Column('varchar', { name: 'DESCRICAO', length: 40 })
  descricao: string;

  @Column('varchar', { name: 'ABREVIACAO', length: 10 })
  abreviacao: string;

  @Column('int', { name: 'LEADTIME' })
  leadtime: number;

  @Column('char', { name: 'GERAPRODUCAO', length: 1, default: () => "'N'" })
  geraproducao: string;

  @Column('char', { name: 'CQL', length: 1, default: () => "'N'" })
  cql: string;

  @Column('smallint', { name: 'TOPPROD' })
  topprod: number;

  @Column('int', { name: 'LEADTIMECQL', nullable: true })
  leadtimecql: number | null;

  @Column('char', { name: 'COMPART', length: 1, default: () => "'S'" })
  compart: string;
}
