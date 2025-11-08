import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TgfveiEntity } from './tGFVEI.entity';
import { TapmapEntity } from './tAPMAP.entity';

@Index('PK_TGFCVE', ['codveiculo', 'codemp', 'codfunc', 'dhsaida'], {
  unique: true,
})
@Entity('TGFCVE', { schema: 'SANKHYA' })
export class TgfcveEntity {
  @Column('int', { primary: true, name: 'CODVEICULO' })
  codveiculo: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'DHSAIDA' })
  dhsaida: Date;

  @Column('int', { name: 'KMSAIDA', nullable: true })
  kmsaida: number | null;

  @Column('datetime', { name: 'DHCHEGADA', nullable: true })
  dhchegada: Date | null;

  @Column('int', { name: 'KMCHEGADA', nullable: true })
  kmchegada: number | null;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('int', { name: 'ORDEMCARGA', default: () => '(0)' })
  ordemcarga: number;

  @Column('int', { name: 'NUMOS', nullable: true })
  numos: number | null;

  @Column('smallint', { name: 'NUMITEM', nullable: true })
  numitem: number | null;

  @Column('char', { name: 'PLACA', nullable: true, length: 10 })
  placa: string | null;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tgfcves)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tgfcves)
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo2: TgfveiEntity;

  @ManyToOne(() => TapmapEntity, (tapmapEntity) => tapmapEntity.tgfcves)
  @JoinColumn([{ name: 'NUAPONTA', referencedColumnName: 'nuaponta' }])
  nuaponta: TapmapEntity;
}
