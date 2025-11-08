import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TmsordaftEntity } from './tMSORDAFT.entity';
import { TmstipcobaftEntity } from './tMSTIPCOBAFT.entity';

@Index('PK_TMSORDAFTITE', ['codemp', 'ordemcarga', 'codaft', 'sequencia'], {
  unique: true,
})
@Entity('TMSORDAFTITE', { schema: 'SANKHYA' })
export class TmsordaftiteEntity {
  @Column('int', { primary: true, name: 'CODAFT' })
  codaft: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'ORDEMCARGA' })
  ordemcarga: number;

  @Column('varchar', { name: 'TIPOPER', nullable: true, length: 10 })
  tipoper: string | null;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('varchar', { name: 'TIPOVALOR', nullable: true, length: 10 })
  tipovalor: string | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('int', { name: 'NUFIN', nullable: true })
  nufin: number | null;

  @Column('int', { name: 'NUCHAVELIBCQ', nullable: true })
  nuchavelibcq: number | null;

  @ManyToOne(
    () => TmsordaftEntity,
    (tmsordaftEntity) => tmsordaftEntity.tmsordaftites,
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'ORDEMCARGA', referencedColumnName: 'ordemcarga' },
    { name: 'CODAFT', referencedColumnName: 'codaft' },
  ])
  tmsordaft: TmsordaftEntity;

  @ManyToOne(
    () => TmstipcobaftEntity,
    (tmstipcobaftEntity) => tmstipcobaftEntity.tmsordaftites,
  )
  @JoinColumn([{ name: 'CODTIPCOB', referencedColumnName: 'codtipcob' }])
  codtipcob: TmstipcobaftEntity;
}
