import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfpplEntity } from './tGFPPL.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFPPM', ['nuplan', 'sequencia'], { unique: true })
@Entity('TGFPPM', { schema: 'SANKHYA' })
export class TgfppmEntity {
  @Column('int', { primary: true, name: 'NUPLAN' })
  nuplan: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', {
    name: 'CONTROLE',
    nullable: true,
    length: 11,
    default: () => "''",
  })
  controle: string | null;

  @Column('int', { name: 'CODLOCAL', nullable: true })
  codlocal: number | null;

  @Column('float', { name: 'QTD', nullable: true, precision: 53 })
  qtd: number | null;

  @Column('float', { name: 'ESTOQUE', nullable: true, precision: 53 })
  estoque: number | null;

  @Column('float', { name: 'ENTRADA', nullable: true, precision: 53 })
  entrada: number | null;

  @Column('char', {
    name: 'PROBLEMA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  problema: string | null;

  @Column('char', {
    name: 'MAQUINA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  maquina: string | null;

  @Column('smallint', { name: 'NUPPL', nullable: true })
  nuppl: number | null;

  @Column('float', { name: 'ESTFUTURO', nullable: true, precision: 53 })
  estfuturo: number | null;

  @Column('int', { name: 'NUNOTACOMPRA', nullable: true })
  nunotacompra: number | null;

  @Column('float', { name: 'MULTPA', nullable: true, precision: 53 })
  multpa: number | null;

  @Column('int', { name: 'LEADTIME', nullable: true })
  leadtime: number | null;

  @Column('smallint', { name: 'NIVEL', nullable: true })
  nivel: number | null;

  @Column('float', { name: 'QTDMESTRE', nullable: true, precision: 53 })
  qtdmestre: number | null;

  @Column('char', {
    name: 'FIXO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  fixo: string | null;

  @ManyToOne(() => TgfpplEntity, (tgfpplEntity) => tgfpplEntity.tgfppms)
  @JoinColumn([{ name: 'NUPLAMESTRE', referencedColumnName: 'nuplan' }])
  nuplamestre: TgfpplEntity;

  @ManyToOne(() => TgfpplEntity, (tgfpplEntity) => tgfpplEntity.tgfppms2, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUPLAN', referencedColumnName: 'nuplan' }])
  nuplan2: TgfpplEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfppms)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;
}
