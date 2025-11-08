import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfveiEntity } from './tGFVEI.entity';
import { TsiempEntity } from './tSIEMP.entity';

@Index('PK_TMSFVM', ['codfvm'], { unique: true })
@Entity('TMSFVM', { schema: 'SANKHYA' })
export class TmsfvmEntity {
  @Column('int', { primary: true, name: 'CODFVM' })
  codfvm: number;

  @Column('int', { name: 'ORDEMCARGA' })
  ordemcarga: number;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 10 })
  status: string | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 3103 })
  observacao: string | null;

  @Column('int', { name: 'CODAFT', nullable: true })
  codaft: number | null;

  @Column('varchar', { name: 'NUCIOT', nullable: true, length: 100 })
  nuciot: string | null;

  @Column('int', { name: 'CODPARCPROPANTT', nullable: true })
  codparcpropantt: number | null;

  @Column('int', { name: 'NURENEG', nullable: true })
  nureneg: number | null;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tmsfvms)
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo: TgfveiEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tmsfvms)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tmsfvms2)
  @JoinColumn([{ name: 'CODEMPNEGOC', referencedColumnName: 'codemp' }])
  codempnegoc: TsiempEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tmsfvms)
  @JoinColumn([{ name: 'CODMOTORISTA', referencedColumnName: 'codparc' }])
  codmotorista: TgfparEntity;
}
