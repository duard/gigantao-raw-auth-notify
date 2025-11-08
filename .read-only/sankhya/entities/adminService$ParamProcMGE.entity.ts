import { Column, Entity, Index } from 'typeorm';

@Index('PK__AdminSer__9FA704D9AD041965', ['codEmp'], { unique: true })
@Entity('AdminService$ParamProcMGE', { schema: 'SANKHYA' })
export class AdminServiceParamProcMgeEntity {
  @Column('numeric', { primary: true, name: 'codEmp', precision: 19, scale: 2 })
  codEmp: number;

  @Column('varchar', { name: 'apenasCad', nullable: true, length: 255 })
  apenasCad: string | null;

  @Column('datetime', { name: 'referencia', nullable: true })
  referencia: Date | null;

  @Column('varchar', { name: 'status', nullable: true, length: 255 })
  status: string | null;

  @Column('varchar', { name: 'tipAmb', nullable: true, length: 255 })
  tipAmb: string | null;

  @Column('varchar', { name: 'tipoProc', nullable: true, length: 255 })
  tipoProc: string | null;
}
