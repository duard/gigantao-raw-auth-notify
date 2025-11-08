import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfnatEntity } from './tGFNAT.entity';
import { TcsoseEntity } from './tCSOSE.entity';

@Index('PK_TCSRPN', ['numos', 'codnat'], { unique: true })
@Entity('TCSRPN', { schema: 'SANKHYA' })
export class TcsrpnEntity {
  @Column('int', { primary: true, name: 'NUMOS' })
  numos: number;

  @Column('int', { primary: true, name: 'CODNAT' })
  codnat: number;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('int', { name: 'GRIDMULT', nullable: true })
  gridmult: number | null;

  @Column('float', { name: 'VLRIMP', nullable: true, precision: 53 })
  vlrimp: number | null;

  @Column('float', { name: 'VLRLIQ', nullable: true, precision: 53 })
  vlrliq: number | null;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tcsrpns)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat2: TgfnatEntity;

  @ManyToOne(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.tcsrpns)
  @JoinColumn([{ name: 'NUMOS', referencedColumnName: 'numos' }])
  numos2: TcsoseEntity;
}
