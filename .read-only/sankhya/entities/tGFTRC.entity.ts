import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TsictaEntity } from './tSICTA.entity';
import { TgftitEntity } from './tGFTIT.entity';

@Index('PK_TGFTRC', ['nufin', 'numtransf'], { unique: true })
@Index('TGFTRC_I01', ['nubcoorig'], {})
@Index('TGFTRC_I02', ['nubcodest'], {})
@Entity('TGFTRC', { schema: 'SANKHYA' })
export class TgftrcEntity {
  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('int', { primary: true, name: 'NUMTRANSF' })
  numtransf: number;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('int', { name: 'NUBCOORIG', nullable: true })
  nubcoorig: number | null;

  @Column('int', { name: 'NUBCODEST', nullable: true })
  nubcodest: number | null;

  @Column('varchar', { name: 'TIPOTRANSF', nullable: true, length: 1 })
  tipotransf: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgftrcs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgftrcs)
  @JoinColumn([{ name: 'CODEMPBAIXAORIG', referencedColumnName: 'codemp' }])
  codempbaixaorig: TgfempEntity;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tgftrcs)
  @JoinColumn([
    { name: 'CODCTABCOINTDEST', referencedColumnName: 'codctabcoint' },
  ])
  codctabcointdest: TsictaEntity;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tgftrcs2)
  @JoinColumn([
    { name: 'CODCTABCOINTORIG', referencedColumnName: 'codctabcoint' },
  ])
  codctabcointorig: TsictaEntity;

  @ManyToOne(() => TgftitEntity, (tgftitEntity) => tgftitEntity.tgftrcs)
  @JoinColumn([{ name: 'CODTIPTITORIG', referencedColumnName: 'codtiptit' }])
  codtiptitorig: TgftitEntity;
}
