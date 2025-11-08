import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { TslipxEntity } from './tSLIPX.entity';

@Index('PK__TSLISC__D50C50C4272A5551', ['codexec'], { unique: true })
@Entity('TSLISC', { schema: 'SANKHYA' })
export class TsliscEntity {
  @Column('int', { primary: true, name: 'CODEXEC' })
  codexec: number;

  @OneToOne(() => TslipxEntity, (tslipxEntity) => tslipxEntity.tslisc, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODEXEC', referencedColumnName: 'codexec' }])
  tslipx: TslipxEntity;
}
