import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpreqEntity } from './tFPREQ.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_AD_REQDP', ['id'], { unique: true })
@Entity('AD_REQDP', { schema: 'SANKHYA' })
export class AdReqdpEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('datetime', { name: 'DT_CREATED', nullable: true })
  dtCreated: Date | null;

  @Column('int', { name: 'CODFUNC', nullable: true })
  codfunc: number | null;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 10 })
  status: string | null;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('smallint', { name: 'USU_SOL', nullable: true })
  usuSol: number | null;

  @Column('datetime', { name: 'DT_UPDATED', nullable: true })
  dtUpdated: Date | null;

  @Column('datetime', { name: 'DT_DELETED', nullable: true })
  dtDeleted: Date | null;

  @Column('varchar', { name: 'TIPO_REQ', nullable: true, length: 10 })
  tipoReq: string | null;

  @ManyToOne(() => TfpreqEntity, (tfpreqEntity) => tfpreqEntity.adReqdps)
  @JoinColumn([{ name: 'ID_TFPREQ', referencedColumnName: 'id' }])
  idTfpreq: TfpreqEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.adReqdps)
  @JoinColumn([{ name: 'USU_UPDT', referencedColumnName: 'codusu' }])
  usuUpdt: TsiusuEntity;
}
