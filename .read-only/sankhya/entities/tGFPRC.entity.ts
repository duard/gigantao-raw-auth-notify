import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TtkprocEntity } from './tTKPROC.entity';

@Index('PK_TGFPRC', ['nrounico'], { unique: true })
@Entity('TGFPRC', { schema: 'SANKHYA' })
export class TgfprcEntity {
  @Column('int', { primary: true, name: 'NROUNICO' })
  nrounico: number;

  @Column('varchar', { name: 'IDPROC', length: 50 })
  idproc: string;

  @Column('varchar', { name: 'TIPO', length: 50 })
  tipo: string;

  @Column('datetime', { name: 'DHINI', nullable: true })
  dhini: Date | null;

  @Column('datetime', { name: 'DHFIM', nullable: true })
  dhfim: Date | null;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('text', { name: 'MSGRESULT', nullable: true })
  msgresult: string | null;

  @Column('char', { name: 'STATUS', length: 1, default: () => "'X'" })
  status: string;

  @Column('text', { name: 'XMLRESULT', nullable: true })
  xmlresult: string | null;

  @Column('varchar', { name: 'PARAMS', nullable: true, length: 3103 })
  params: string | null;

  @OneToMany(() => TtkprocEntity, (ttkprocEntity) => ttkprocEntity.nrounicoproc)
  ttkprocs: TtkprocEntity[];
}
