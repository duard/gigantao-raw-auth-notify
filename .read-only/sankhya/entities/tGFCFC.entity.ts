import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcfrcEntity } from './tGFCFRC.entity';
import { TsicidEntity } from './tSICID.entity';
import { TgfcfrEntity } from './tGFCFR.entity';

@Index('PK_TGFCFC', ['nucfr', 'codcid', 'codreg'], { unique: true })
@Entity('TGFCFC', { schema: 'SANKHYA' })
export class TgfcfcEntity {
  @Column('int', { primary: true, name: 'NUCFR' })
  nucfr: number;

  @Column('int', { primary: true, name: 'CODCID' })
  codcid: number;

  @Column('int', { primary: true, name: 'CODREG' })
  codreg: number;

  @ManyToOne(() => TgfcfrcEntity, (tgfcfrcEntity) => tgfcfrcEntity.tgfcfcs)
  @JoinColumn([
    { name: 'NUCFR', referencedColumnName: 'nucfr' },
    { name: 'CODREG', referencedColumnName: 'codreg' },
  ])
  tgfcfrc: TgfcfrcEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tgfcfcs)
  @JoinColumn([{ name: 'CODCID', referencedColumnName: 'codcid' }])
  codc: TsicidEntity;

  @ManyToOne(() => TgfcfrEntity, (tgfcfrEntity) => tgfcfrEntity.tgfcfcs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUCFR', referencedColumnName: 'nucfr' }])
  nucfr2: TgfcfrEntity;
}
