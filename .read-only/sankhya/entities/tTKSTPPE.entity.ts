import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TtkprocEntity } from './tTKPROC.entity';

@Index('PK__TTKSTPPE__0E84A6467FD0D39E', ['nuproc', 'codemp'], { unique: true })
@Entity('TTKSTPPE', { schema: 'SANKHYA' })
export class TtkstppeEntity {
  @Column('int', { primary: true, name: 'NUPROC' })
  nuproc: number;

  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { name: 'CNPJ', nullable: true, length: 14 })
  cnpj: string | null;

  @Column('varchar', { name: 'RAZAOSOCIAL', nullable: true, length: 40 })
  razaosocial: string | null;

  @Column('date', { name: 'DHCONFIG' })
  dhconfig: Date;

  @ManyToOne(() => TtkprocEntity, (ttkprocEntity) => ttkprocEntity.ttkstppes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUPROC', referencedColumnName: 'nuproc' }])
  nuproc2: TtkprocEntity;
}
