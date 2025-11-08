import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsoseEntity } from './tCSOSE.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfvenEntity } from './tGFVEN.entity';

@Index('PK_TCSCNV', ['numos', 'nucomissao'], { unique: true })
@Entity('TCSCNV', { schema: 'SANKHYA' })
export class TcscnvEntity {
  @Column('int', { primary: true, name: 'NUMOS' })
  numos: number;

  @Column('int', { primary: true, name: 'NUCOMISSAO' })
  nucomissao: number;

  @Column('float', { name: 'COMISSAO', precision: 53 })
  comissao: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @ManyToOne(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.tcscnvs)
  @JoinColumn([{ name: 'NUMOS', referencedColumnName: 'numos' }])
  numos2: TcsoseEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tcscnvs)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat: TgfnatEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcscnvs)
  @JoinColumn([{ name: 'CODUSUALTER', referencedColumnName: 'codusu' }])
  codusualter: TsiusuEntity;

  @ManyToOne(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.tcscnvs)
  @JoinColumn([{ name: 'CODVEND', referencedColumnName: 'codvend' }])
  codvend: TgfvenEntity;
}
