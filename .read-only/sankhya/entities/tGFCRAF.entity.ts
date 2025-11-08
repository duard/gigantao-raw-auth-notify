import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { TsictaEntity } from './tSICTA.entity';

@Index('INDEX_CODCTABCOINT', ['codctabcoint'], { unique: true })
@Index('PK_TGFCRAF', ['nucraf'], { unique: true })
@Entity('TGFCRAF', { schema: 'SANKHYA' })
export class TgfcrafEntity {
  @Column('int', { primary: true, name: 'NUCRAF' })
  nucraf: number;

  @Column('smallint', { name: 'CODCTABCOINT' })
  codctabcoint: number;

  @Column('varchar', { name: 'OCORRENCIA_ENTRADA', nullable: true, length: 15 })
  ocorrenciaEntrada: string | null;

  @Column('char', { name: 'ATIVO', nullable: true, length: 1 })
  ativo: string | null;

  @Column('varchar', { name: 'OCORRENCIA_BAIXA', nullable: true, length: 15 })
  ocorrenciaBaixa: string | null;

  @Column('varchar', {
    name: 'OCORRENCIA_EXCLUSAO',
    nullable: true,
    length: 15,
  })
  ocorrenciaExclusao: string | null;

  @OneToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tgfcraf)
  @JoinColumn([{ name: 'CODCTABCOINT', referencedColumnName: 'codctabcoint' }])
  codctabcoint2: TsictaEntity;
}
