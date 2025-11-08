import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfiebEntity } from './tGFIEB.entity';

@Index('PK_TGFEXB', ['nuexb'], { unique: true })
@Index('TGFEXB_I01', ['nrodoc'], {})
@Index('TGFEXB_I02', ['nrocta'], {})
@Entity('TGFEXB', { schema: 'SANKHYA' })
export class TgfexbEntity {
  @Column('int', { primary: true, name: 'NUEXB' })
  nuexb: number;

  @Column('datetime', { name: 'DTLANC', nullable: true })
  dtlanc: Date | null;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('decimal', {
    name: 'NRODOC',
    nullable: true,
    precision: 20,
    scale: 0,
  })
  nrodoc: number | null;

  @Column('char', { name: 'CONCILIADO', length: 1, default: () => "'N'" })
  conciliado: string;

  @Column('int', { name: 'CODCATEG' })
  codcateg: number;

  @Column('varchar', { name: 'CNPJ_CPF', nullable: true, length: 14 })
  cnpjCpf: string | null;

  @Column('varchar', { name: 'HIST', nullable: true, length: 150 })
  hist: string | null;

  @Column('float', { name: 'CONVENIO', nullable: true, precision: 53 })
  convenio: number | null;

  @Column('int', { name: 'CODBCO', nullable: true })
  codbco: number | null;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('varchar', { name: 'NROCTA', nullable: true, length: 14 })
  nrocta: string | null;

  @Column('varchar', { name: 'TIPOTRANSACAO', nullable: true, length: 100 })
  tipotransacao: string | null;

  @Column('smallint', { name: 'RECDESP', nullable: true })
  recdesp: number | null;

  @Column('varchar', { name: 'FITID', nullable: true, length: 255 })
  fitid: string | null;

  @Column('int', { name: 'NUBCO', nullable: true })
  nubco: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfexbs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfiebEntity, (tgfiebEntity) => tgfiebEntity.tgfexbs)
  @JoinColumn([{ name: 'NUIMPORT', referencedColumnName: 'nuimport' }])
  nuimport: TgfiebEntity;
}
