import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcttEntity } from './tGFCTT.entity';
import { TgftitEntity } from './tGFTIT.entity';
import { TimimpEntity } from './tIMIMP.entity';
import { TimimvEntity } from './tIMIMV.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TIMIRB', ['irbcontrato', 'irbpropimovel', 'irbbeneficiario'], {
  unique: true,
})
@Entity('TIMIRB', { schema: 'SANKHYA' })
export class TimirbEntity {
  @Column('smallint', { primary: true, name: 'IRBCONTRATO' })
  irbcontrato: number;

  @Column('int', { primary: true, name: 'IRBPROPIMOVEL' })
  irbpropimovel: number;

  @Column('int', { primary: true, name: 'IRBBENEFICIARIO' })
  irbbeneficiario: number;

  @Column('float', { name: 'IRBPERCENTUAL', nullable: true, precision: 53 })
  irbpercentual: number | null;

  @Column('char', { name: 'IRBLEGADO', nullable: true, length: 1 })
  irblegado: string | null;

  @Column('float', { name: 'IRBVLRREPASSE', nullable: true, precision: 53 })
  irbvlrrepasse: number | null;

  @Column('varchar', {
    name: 'IRBTIPOREPASSE',
    nullable: true,
    length: 2,
    default: () => "'PC'",
  })
  irbtiporepasse: string | null;

  @ManyToOne(() => TgfcttEntity, (tgfcttEntity) => tgfcttEntity.timirbs)
  @JoinColumn([
    { name: 'IRBPROPIMOVEL', referencedColumnName: 'codparc' },
    { name: 'IRBBENEFICIARIO', referencedColumnName: 'codcontato' },
  ])
  tgfctt: TgfcttEntity;

  @ManyToOne(() => TgftitEntity, (tgftitEntity) => tgftitEntity.timirbs)
  @JoinColumn([{ name: 'IRBCODTIPTIT', referencedColumnName: 'codtiptit' }])
  irbcodtiptit: TgftitEntity;

  @ManyToOne(() => TimimpEntity, (timimpEntity) => timimpEntity.timirbs)
  @JoinColumn([
    { name: 'IRBCONTRATO', referencedColumnName: 'impcontrato' },
    { name: 'IRBPROPIMOVEL', referencedColumnName: 'impproprietario' },
  ])
  timimp: TimimpEntity;

  @ManyToOne(() => TimimvEntity, (timimvEntity) => timimvEntity.timirbs)
  @JoinColumn([{ name: 'IRBIMOVEL', referencedColumnName: 'imvcodigo' }])
  irbimovel: TimimvEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timirbs)
  @JoinColumn([{ name: 'IRBPROPIMOVEL', referencedColumnName: 'codparc' }])
  irbpropimovel2: TgfparEntity;
}
