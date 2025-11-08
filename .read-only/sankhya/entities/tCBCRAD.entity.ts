import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbcraEntity } from './tCBCRA.entity';

@Index('PK_TCBCRAD', ['codrazaux', 'sequencia'], { unique: true })
@Entity('TCBCRAD', { schema: 'SANKHYA' })
export class TcbcradEntity {
  @Column('smallint', { primary: true, name: 'CODRAZAUX' })
  codrazaux: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'NOMECAMPO', length: 16 })
  nomecampo: string;

  @Column('varchar', { name: 'DESCRCAMPO', length: 50 })
  descrcampo: string;

  @Column('varchar', { name: 'TIPOCAMPO', length: 1, default: () => "'N'" })
  tipocampo: string;

  @Column('varchar', { name: 'TAMCAMPO', length: 3 })
  tamcampo: string;

  @Column('smallint', { name: 'QTDCASADEC', nullable: true })
  qtdcasadec: number | null;

  @Column('smallint', { name: 'LARGCAMPO' })
  largcampo: number;

  @Column('varchar', { name: 'TOTALIZACAO', length: 1, default: () => "'F'" })
  totalizacao: string;

  @Column('varchar', { name: 'TEXTOFIXO', nullable: true, length: 40 })
  textofixo: string | null;

  @Column('varchar', { name: 'PARTQUEBRA', length: 1, default: () => "'N'" })
  partquebra: string;

  @ManyToOne(() => TcbcraEntity, (tcbcraEntity) => tcbcraEntity.tcbcrads)
  @JoinColumn([{ name: 'CODRAZAUX', referencedColumnName: 'codrazaux' }])
  codrazaux2: TcbcraEntity;
}
