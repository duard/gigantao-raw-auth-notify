import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFCRA', ['codemp', 'rede'], { unique: true })
@Entity('TGFCRA', { schema: 'SANKHYA' })
export class TgfcraEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { primary: true, name: 'REDE', length: 50 })
  rede: string;

  @Column('varchar', { name: 'CHAVEREQUISICAO', nullable: true, length: 36 })
  chaverequisicao: string | null;

  @Column('varchar', { name: 'CNPJ', nullable: true, length: 14 })
  cnpj: string | null;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfcras)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
