import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgffopEntity } from './tGFFOP.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfcfoEntity } from './tGFCFO.entity';
import { TsiufsEntity } from './tSIUFS.entity';

@Index('PK_TGFCRESTCOMST', ['sequencia'], { unique: true })
@Entity('TGFCRESTCOMST', { schema: 'SANKHYA' })
export class TgfcrestcomstEntity {
  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('varchar', { name: 'CODAJUSTE', length: 5 })
  codajuste: string;

  @Column('varchar', { name: 'DESCAJUSTE', nullable: true, length: 500 })
  descajuste: string | null;

  @Column('smallint', { name: 'CODTIPOPER', nullable: true })
  codtipoper: number | null;

  @Column('int', { name: 'CLASSICMS', nullable: true })
  classicms: number | null;

  @Column('text', { name: 'FILPERSONALIZADO', nullable: true })
  filpersonalizado: string | null;

  @Column('char', { name: 'CONSIDR1255', nullable: true, length: 1 })
  considr1255: string | null;

  @ManyToOne(() => TgffopEntity, (tgffopEntity) => tgffopEntity.tgfcrestcomsts)
  @JoinColumn([{ name: 'NUFOP', referencedColumnName: 'nufop' }])
  nufop: TgffopEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfcrestcomsts)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(() => TgfcfoEntity, (tgfcfoEntity) => tgfcfoEntity.tgfcrestcomsts)
  @JoinColumn([{ name: 'CODCFO', referencedColumnName: 'codcfo' }])
  codcfo: TgfcfoEntity;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tgfcrestcomsts)
  @JoinColumn([{ name: 'CODUF', referencedColumnName: 'coduf' }])
  coduf: TsiufsEntity;
}
