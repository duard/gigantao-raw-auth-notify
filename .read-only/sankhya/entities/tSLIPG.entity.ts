import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TslipxEntity } from './tSLIPX.entity';

@Index('PK__TSLIPG__4B885E8C471801F6', ['codgrupo'], { unique: true })
@Entity('TSLIPG', { schema: 'SANKHYA' })
export class TslipgEntity {
  @Column('int', { primary: true, name: 'CODGRUPO' })
  codgrupo: number;

  @Column('varchar', { name: 'NOMEGRUPO', length: 50 })
  nomegrupo: string;

  @Column('varchar', { name: 'DESCRGRUPO', nullable: true, length: 50 })
  descrgrupo: string | null;

  @OneToMany(() => TslipxEntity, (tslipxEntity) => tslipxEntity.codgrupo)
  tslipxes: TslipxEntity[];
}
