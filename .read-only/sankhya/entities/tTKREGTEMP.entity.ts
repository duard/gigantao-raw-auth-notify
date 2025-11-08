import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TtkprocEntity } from './tTKPROC.entity';

@Index('PK__TTKREGTE__6C2F9339CE0D2712', ['sequencia'], { unique: true })
@Entity('TTKREGTEMP', { schema: 'SANKHYA' })
export class TtkregtempEntity {
  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('nvarchar', { name: 'REGISTRO', nullable: true })
  registro: string | null;

  @ManyToOne(
    () => TtkprocEntity,
    (ttkprocEntity) => ttkprocEntity.ttkregtemps,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([{ name: 'NUPROC', referencedColumnName: 'nuproc' }])
  nuproc: TtkprocEntity;
}
