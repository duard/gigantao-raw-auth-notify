import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TpriatvEntity } from './tPRIATV.entity';

@Index('PK_TPRSTE', ['idexecwflow'], { unique: true })
@Entity('TPRSTE', { schema: 'SANKHYA' })
export class TprsteEntity {
  @Column('varchar', { primary: true, name: 'IDEXECWFLOW', length: 100 })
  idexecwflow: string;

  @Column('varchar', { name: 'STATUSEXEC', length: 1, default: () => "'N'" })
  statusexec: string;

  @ManyToOne(() => TpriatvEntity, (tpriatvEntity) => tpriatvEntity.tprstes)
  @JoinColumn([{ name: 'IDATVSTATUSNORMAL', referencedColumnName: 'idiatv' }])
  idatvstatusnormal: TpriatvEntity;
}
