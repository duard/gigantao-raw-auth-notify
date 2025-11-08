import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';
import { AdTsiicnEntity } from './aD_TSIICN.entity';

@Index('PK_AD_TSICND', ['codcnd'], { unique: true })
@Entity('AD_TSICND', { schema: 'SANKHYA' })
export class AdTsicndEntity {
  @Column('int', { primary: true, name: 'CODCND' })
  codcnd: number;

  @Column('datetime', { name: 'DTVENC', nullable: true })
  dtvenc: Date | null;

  @Column('text', { name: 'PROCE', nullable: true })
  proce: string | null;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.adTsicnds)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @ManyToOne(() => AdTsiicnEntity, (adTsiicnEntity) => adTsiicnEntity.adTsicnds)
  @JoinColumn([{ name: 'CODITECND', referencedColumnName: 'coditecnd' }])
  coditecnd: AdTsiicnEntity;
}
