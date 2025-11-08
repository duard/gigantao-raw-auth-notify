import { Column, Entity, Index, OneToMany } from 'typeorm';
import { AdTsicndEntity } from './aD_TSICND.entity';

@Index('PK_AD_TSIICN', ['coditecnd'], { unique: true })
@Entity('AD_TSIICN', { schema: 'SANKHYA' })
export class AdTsiicnEntity {
  @Column('int', { primary: true, name: 'CODITECND' })
  coditecnd: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;

  @OneToMany(() => AdTsicndEntity, (adTsicndEntity) => adTsicndEntity.coditecnd)
  adTsicnds: AdTsicndEntity[];
}
