import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TtkprocEntity } from './tTKPROC.entity';

@Index('PK__TTKNOTAL__09668C0A1999A0CA', ['nuproc', 'chave'], { unique: true })
@Entity('TTKNOTALIG', { schema: 'SANKHYA' })
export class TtknotaligEntity {
  @Column('int', { primary: true, name: 'NUPROC' })
  nuproc: number;

  @Column('varchar', { name: 'IDARTEFATO', length: 200 })
  idartefato: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 44 })
  chave: string;

  @ManyToOne(
    () => TtkprocEntity,
    (ttkprocEntity) => ttkprocEntity.ttknotaligs,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([{ name: 'NUPROC', referencedColumnName: 'nuproc' }])
  nuproc2: TtkprocEntity;
}
