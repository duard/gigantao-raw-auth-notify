import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpfunEntity } from './tFPFUN.entity';

@Index('PK_AD_GIGPONTOS', ['id'], { unique: true })
@Entity('AD_GIGPONTOS', { schema: 'SANKHYA' })
export class AdGigpontosEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('varchar', { name: 'ENVIAWPP', nullable: true, length: 10 })
  enviawpp: string | null;

  @Column('varchar', { name: 'SHOW', nullable: true, length: 10 })
  show: string | null;

  @Column('datetime', { name: 'DT_REG', nullable: true })
  dtReg: Date | null;

  @Column('text', { name: 'REGISTRO_ORIGINAL', nullable: true })
  registroOriginal: string | null;

  @Column('varchar', { name: 'IP', nullable: true, length: 100 })
  ip: string | null;

  @Column('datetime', { name: 'DT_CREATED', nullable: true })
  dtCreated: Date | null;

  @Column('datetime', { name: 'DT_UPDATED', nullable: true })
  dtUpdated: Date | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.adGigpontos)
  @JoinColumn([{ name: 'USU_CHANGE', referencedColumnName: 'codusu' }])
  usuChange: TsiusuEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.adGigpontos)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;
}
