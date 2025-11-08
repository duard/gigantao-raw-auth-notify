import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfvenEntity } from './tGFVEN.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgftitEntity } from './tGFTIT.entity';
import { TgftopEntity } from './tGFTOP.entity';
import { TgfcttEntity } from './tGFCTT.entity';
import { TgftpvEntity } from './tGFTPV.entity';

@Index('PK_TGFAGD', ['nuagenda'], { unique: true })
@Entity('TGFAGD', { schema: 'SANKHYA' })
export class TgfagdEntity {
  @Column('int', { primary: true, name: 'NUAGENDA' })
  nuagenda: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { name: 'DTSOLICITACAO', nullable: true })
  dtsolicitacao: Date | null;

  @Column('datetime', { name: 'DTPREVISTA', nullable: true })
  dtprevista: Date | null;

  @Column('char', { name: 'STATUS', length: 1, default: () => "'A'" })
  status: string;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('datetime', { name: 'DTVENCIMENTO', nullable: true })
  dtvencimento: Date | null;

  @Column('float', { name: 'VLRUNIT', precision: 53, default: () => '(0)' })
  vlrunit: number;

  @Column('float', { name: 'VLRDESC', precision: 53, default: () => '(0)' })
  vlrdesc: number;

  @Column('datetime', { name: 'DTENTSAI', nullable: true })
  dtentsai: Date | null;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('int', { name: 'HRPREVISTA', nullable: true })
  hrprevista: number | null;

  @ManyToOne(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.tgfagds)
  @JoinColumn([{ name: 'CODVEND', referencedColumnName: 'codvend' }])
  codvend: TgfvenEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfagds)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfagds)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TgftitEntity, (tgftitEntity) => tgftitEntity.tgfagds)
  @JoinColumn([{ name: 'CODTIPTIT', referencedColumnName: 'codtiptit' }])
  codtiptit: TgftitEntity;

  @ManyToOne(() => TgftopEntity, (tgftopEntity) => tgftopEntity.tgfagds)
  @JoinColumn([
    { name: 'CODTIPOPER', referencedColumnName: 'codtipoper' },
    { name: 'DHTIPOPER', referencedColumnName: 'dhalter' },
  ])
  tgftop: TgftopEntity;

  @ManyToOne(() => TgfcttEntity, (tgfcttEntity) => tgfcttEntity.tgfagds)
  @JoinColumn([
    { name: 'CODPARC', referencedColumnName: 'codparc' },
    { name: 'CODCONTATO', referencedColumnName: 'codcontato' },
  ])
  tgfctt: TgfcttEntity;

  @ManyToOne(() => TgftpvEntity, (tgftpvEntity) => tgftpvEntity.tgfagds)
  @JoinColumn([
    { name: 'CODTIPVENDA', referencedColumnName: 'codtipvenda' },
    { name: 'DHTIPVENDA', referencedColumnName: 'dhalter' },
  ])
  tgftpv: TgftpvEntity;
}
