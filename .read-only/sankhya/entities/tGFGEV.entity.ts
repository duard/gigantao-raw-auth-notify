import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfgvpEntity } from './tGFGVP.entity';

@Index('PK_TGFGEV', ['nuverba', 'nurevis'], { unique: true })
@Entity('TGFGEV', { schema: 'SANKHYA' })
export class TgfgevEntity {
  @Column('int', { primary: true, name: 'NUVERBA' })
  nuverba: number;

  @Column('smallint', { primary: true, name: 'NUREVIS' })
  nurevis: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('smallint', {
    name: 'CODUSUULTALT',
    nullable: true,
    default: () => '(0)',
  })
  codusuultalt: number | null;

  @Column('smallint', { name: 'TIPOOPER', nullable: true })
  tipooper: number | null;

  @Column('smallint', { name: 'OPERAC', nullable: true })
  operac: number | null;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('smallint', { name: 'CODRESP', nullable: true })
  codresp: number | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('int', { name: 'CODCONT', nullable: true })
  codcont: number | null;

  @Column('datetime', { name: 'DTACORD', nullable: true })
  dtacord: Date | null;

  @Column('datetime', { name: 'DTLIMIT', nullable: true })
  dtlimit: Date | null;

  @Column('float', {
    name: 'VLRVERBA',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrverba: number | null;

  @Column('smallint', { name: 'FORMPAGREC', nullable: true })
  formpagrec: number | null;

  @Column('int', { name: 'CODNAT', nullable: true })
  codnat: number | null;

  @Column('varchar', { name: 'OBSERV', nullable: true, length: 200 })
  observ: string | null;

  @Column('smallint', { name: 'CODMODVERB', nullable: true })
  codmodverb: number | null;

  @Column('int', { name: 'CODMODEMAIL', nullable: true })
  codmodemail: number | null;

  @Column('int', { name: 'CODPROJETO', nullable: true })
  codprojeto: number | null;

  @Column('int', { name: 'CODCENCUS', nullable: true })
  codcencus: number | null;

  @Column('char', {
    name: 'STATUS',
    nullable: true,
    length: 1,
    default: () => "'A'",
  })
  status: string | null;

  @OneToMany(() => TgfgvpEntity, (tgfgvpEntity) => tgfgvpEntity.tgfgev)
  tgfgvps: TgfgvpEntity[];
}
