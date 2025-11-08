import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGWHAJ', ['codaju'], { unique: true })
@Entity('TGWHAJ', { schema: 'SANKHYA' })
export class TgwhajEntity {
  @Column('int', { primary: true, name: 'CODAJU' })
  codaju: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { name: 'CODLOCAL' })
  codlocal: number;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { name: 'CONTROLE', length: 11, default: () => "' '" })
  controle: string;

  @Column('int', { name: 'CODEND' })
  codend: number;

  @Column('varchar', { name: 'CODVOL', length: 2 })
  codvol: string;

  @Column('int', { name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @Column('datetime', { name: 'DTVAL', nullable: true })
  dtval: Date | null;

  @Column('datetime', { name: 'DTVALATU', nullable: true })
  dtvalatu: Date | null;

  @Column('datetime', { name: 'DTAJUSTE', nullable: true })
  dtajuste: Date | null;

  @Column('float', {
    name: 'QTDLOGIC',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  qtdlogic: number | null;

  @Column('float', {
    name: 'QTDAJUST',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  qtdajust: number | null;

  @Column('varchar', { name: 'TIPAJUSTE', length: 120 })
  tipajuste: string;

  @Column('varchar', { name: 'ERRO', nullable: true, length: 244 })
  erro: string | null;

  @Column('int', { name: 'CODUSU' })
  codusu: number;
}
