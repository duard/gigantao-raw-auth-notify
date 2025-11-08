import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TtkprocEntity } from './tTKPROC.entity';

@Index('PK__TTKDIT__A8DB7EA58A0321E1', ['tipo', 'nuproc'], { unique: true })
@Entity('TTKDIT', { schema: 'SANKHYA' })
export class TtkditEntity {
  @Column('int', { primary: true, name: 'NUPROC' })
  nuproc: number;

  @Column('date', { name: 'DHCONS' })
  dhcons: Date;

  @Column('date', { name: 'DHRESP' })
  dhresp: Date;

  @Column('varchar', { primary: true, name: 'TIPO', length: 2 })
  tipo: string;

  @Column('text', { name: 'RESPONSE' })
  response: string;

  @ManyToOne(() => TtkprocEntity, (ttkprocEntity) => ttkprocEntity.ttkdits, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUPROC', referencedColumnName: 'nuproc' }])
  nuproc2: TtkprocEntity;
}
