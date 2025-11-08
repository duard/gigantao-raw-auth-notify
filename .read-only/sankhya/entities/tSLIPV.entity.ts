import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { TslipxEntity } from './tSLIPX.entity';

@Index('PK__TSLIPV__D50C50C42BEF0A6E', ['codexec'], { unique: true })
@Entity('TSLIPV', { schema: 'SANKHYA' })
export class TslipvEntity {
  @Column('int', { primary: true, name: 'CODEXEC' })
  codexec: number;

  @Column('float', { name: 'VENDAS', nullable: true, precision: 53 })
  vendas: number | null;

  @Column('float', { name: 'MARGEM', nullable: true, precision: 53 })
  margem: number | null;

  @OneToOne(() => TslipxEntity, (tslipxEntity) => tslipxEntity.tslipv, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODEXEC', referencedColumnName: 'codexec' }])
  codexec2: TslipxEntity;
}
