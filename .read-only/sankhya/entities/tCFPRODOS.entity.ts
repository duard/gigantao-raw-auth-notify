import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfgruEntity } from './tGFGRU.entity';
import { TcfoscabEntity } from './tCFOSCAB.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TCFPRODOS', ['nuos', 'sequencia'], { unique: true })
@Entity('TCFPRODOS', { schema: 'SANKHYA' })
export class TcfprodosEntity {
  @Column('int', { primary: true, name: 'NUOS' })
  nuos: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('varchar', { name: 'CODVOL', nullable: true, length: 100 })
  codvol: string | null;

  @Column('int', { name: 'CODLOCAL', nullable: true })
  codlocal: number | null;

  @Column('varchar', { name: 'CONTROLE', nullable: true, length: 100 })
  controle: string | null;

  @Column('float', { name: 'QTDNEG', nullable: true, precision: 53 })
  qtdneg: number | null;

  @Column('float', { name: 'VLRUNIT', nullable: true, precision: 53 })
  vlrunit: number | null;

  @Column('float', { name: 'VLRTOT', nullable: true, precision: 53 })
  vlrtot: number | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 1000 })
  observacao: string | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('int', { name: 'SEQNOTA', nullable: true })
  seqnota: number | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('int', { name: 'AD_NUNOTASOL', nullable: true })
  adNunotasol: number | null;

  @Column('int', { name: 'AD_NUNOTAREQ', nullable: true })
  adNunotareq: number | null;

  @Column('datetime', { name: 'AD_DTENVIO', nullable: true })
  adDtenvio: Date | null;

  @Column('datetime', { name: 'AD_DTIFIMGARANT', nullable: true })
  adDtifimgarant: Date | null;

  @Column('datetime', { name: 'AD_DTINICIOGARANT', nullable: true })
  adDtiniciogarant: Date | null;

  @Column('datetime', { name: 'AD_DTRETORNO', nullable: true })
  adDtretorno: Date | null;

  @ManyToOne(() => TgfgruEntity, (tgfgruEntity) => tgfgruEntity.tcfprodos)
  @JoinColumn([
    { name: 'AD_CODGRUPOPROD', referencedColumnName: 'codgrupoprod' },
  ])
  adCodgrupoprod: TgfgruEntity;

  @ManyToOne(() => TcfoscabEntity, (tcfoscabEntity) => tcfoscabEntity.tcfprodos)
  @JoinColumn([{ name: 'NUOS', referencedColumnName: 'nuos' }])
  nuos2: TcfoscabEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcfprodos)
  @JoinColumn([{ name: 'AD_CODUSU', referencedColumnName: 'codusu' }])
  adCodusu: TsiusuEntity;
}
