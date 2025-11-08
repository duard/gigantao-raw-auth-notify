import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsicidEntity } from './tSICID.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index(
  'PK_TSIDIS',
  ['codparcorig', 'codparcdest', 'codcidorig', 'codciddest'],
  { unique: true },
)
@Index('TSIDIS_I01', ['codcidorig', 'codciddest'], {})
@Entity('TSIDIS', { schema: 'SANKHYA' })
export class TsidisEntity {
  @Column('int', { primary: true, name: 'CODPARCORIG', default: () => '(0)' })
  codparcorig: number;

  @Column('int', { primary: true, name: 'CODPARCDEST', default: () => '(0)' })
  codparcdest: number;

  @Column('int', { primary: true, name: 'CODCIDORIG', default: () => '(0)' })
  codcidorig: number;

  @Column('int', { primary: true, name: 'CODCIDDEST', default: () => '(0)' })
  codciddest: number;

  @Column('float', { name: 'DISTANCIA', precision: 53 })
  distancia: number;

  @Column('varchar', { name: 'OBS', nullable: true, length: 250 })
  obs: string | null;

  @Column('float', { name: 'FRETEMIN', nullable: true, precision: 53 })
  fretemin: number | null;

  @Column('float', { name: 'FRETE', nullable: true, precision: 53 })
  frete: number | null;

  @Column('float', { name: 'FRETECAM', nullable: true, precision: 53 })
  fretecam: number | null;

  @Column('float', { name: 'FRETECARRET', nullable: true, precision: 53 })
  fretecarret: number | null;

  @Column('float', { name: 'FRETEBI', nullable: true, precision: 53 })
  fretebi: number | null;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tsidis)
  @JoinColumn([{ name: 'CODCIDORIG', referencedColumnName: 'codcid' }])
  codcidorig2: TsicidEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tsidis2)
  @JoinColumn([{ name: 'CODCIDDEST', referencedColumnName: 'codcid' }])
  codciddest2: TsicidEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tsidis)
  @JoinColumn([{ name: 'CODPARCDEST', referencedColumnName: 'codparc' }])
  codparcdest2: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tsidis2)
  @JoinColumn([{ name: 'CODPARCORIG', referencedColumnName: 'codparc' }])
  codparcorig2: TgfparEntity;
}
