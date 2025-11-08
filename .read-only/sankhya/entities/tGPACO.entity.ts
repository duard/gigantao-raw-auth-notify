import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgpregEntity } from './tGPREG.entity';
import { TcsiteEntity } from './tCSITE.entity';
import { TgfetaEntity } from './tGFETA.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfiteEntity } from './tGFITE.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfiprEntity } from './tGFIPR.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TcsoseEntity } from './tCSOSE.entity';

@Index('PK_TGPACO', ['nureg', 'seqreg'], { unique: true })
@Index('TGPACO_I01', ['nunota'], {})
@Index('TGPACO_I02', ['nunota', 'sequencia'], {})
@Index('TGPACO_I03', ['nufin'], {})
@Index('TGPACO_I04', ['numos'], {})
@Index('TGPACO_I05', ['numos', 'numitem'], {})
@Index('TGPACO_I06', ['codbarra'], {})
@Entity('TGPACO', { schema: 'SANKHYA' })
export class TgpacoEntity {
  @Column('int', { primary: true, name: 'NUREG' })
  nureg: number;

  @Column('int', { primary: true, name: 'SEQREG' })
  seqreg: number;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('datetime', { name: 'DHINICIO' })
  dhinicio: Date;

  @Column('datetime', { name: 'DHFIM', nullable: true })
  dhfim: Date | null;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('smallint', { name: 'SEQUENCIA', nullable: true })
  sequencia: number | null;

  @Column('int', { name: 'NUFIN', nullable: true })
  nufin: number | null;

  @Column('int', { name: 'NUMOS', nullable: true })
  numos: number | null;

  @Column('smallint', { name: 'NUMITEM', nullable: true })
  numitem: number | null;

  @Column('varchar', { name: 'CODBARRA', nullable: true, length: 80 })
  codbarra: string | null;

  @ManyToOne(() => TgpregEntity, (tgpregEntity) => tgpregEntity.tgpacos, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUREG', referencedColumnName: 'nureg' }])
  nureg2: TgpregEntity;

  @ManyToOne(() => TcsiteEntity, (tcsiteEntity) => tcsiteEntity.tgpacos)
  @JoinColumn([
    { name: 'NUMOS', referencedColumnName: 'numos' },
    { name: 'NUMITEM', referencedColumnName: 'numitem' },
  ])
  tcsite: TcsiteEntity;

  @ManyToOne(() => TgfetaEntity, (tgfetaEntity) => tgfetaEntity.tgpacos)
  @JoinColumn([{ name: 'CODETAPA', referencedColumnName: 'codetapa' }])
  codetapa: TgfetaEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgpacos)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgpacos2)
  @JoinColumn([{ name: 'CODUSUFIM', referencedColumnName: 'codusu' }])
  codusufim: TsiusuEntity;

  @ManyToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgpacos)
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgpacos)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;

  @ManyToOne(() => TgfiprEntity, (tgfiprEntity) => tgfiprEntity.tgpacos)
  @JoinColumn([{ name: 'CODBARRA', referencedColumnName: 'codbarra' }])
  codbarra2: TgfiprEntity;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgpacos)
  @JoinColumn([{ name: 'NUFIN', referencedColumnName: 'nufin' }])
  nufin2: TgffinEntity;

  @ManyToOne(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.tgpacos)
  @JoinColumn([{ name: 'NUMOS', referencedColumnName: 'numos' }])
  numos2: TcsoseEntity;
}
