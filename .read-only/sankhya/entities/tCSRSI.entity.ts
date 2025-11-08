import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsrslEntity } from './tCSRSL.entity';

@Index('PK_TCSRSI', ['nusla', 'numreg', 'numos', 'numitem'], { unique: true })
@Index('TCSRSI_I01', ['numos', 'numitem'], {})
@Entity('TCSRSI', { schema: 'SANKHYA' })
export class TcsrsiEntity {
  @Column('int', { primary: true, name: 'NUSLA' })
  nusla: number;

  @Column('smallint', { primary: true, name: 'NUMREG' })
  numreg: number;

  @Column('int', { primary: true, name: 'NUMOS' })
  numos: number;

  @Column('smallint', { primary: true, name: 'NUMITEM' })
  numitem: number;

  @ManyToOne(() => TcsrslEntity, (tcsrslEntity) => tcsrslEntity.tcsrsis)
  @JoinColumn([
    { name: 'NUSLA', referencedColumnName: 'nusla' },
    { name: 'NUMREG', referencedColumnName: 'numreg' },
  ])
  tcsrsl: TcsrslEntity;
}
