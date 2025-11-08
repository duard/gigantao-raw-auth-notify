import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsirfeEntity } from './tSIRFE.entity';

@Index('PK_TSIRFA', ['nurfe', 'sequencia'], { unique: true })
@Entity('TSIRFA', { schema: 'SANKHYA' })
export class TsirfaEntity {
  @Column('smallint', { primary: true, name: 'NURFE' })
  nurfe: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'NOME', nullable: true, length: 40 })
  nome: string | null;

  @Column('text', { name: 'ARQUIVO', nullable: true })
  arquivo: string | null;

  @Column('image', { name: 'ARQUIVOBIN', nullable: true })
  arquivobin: Buffer | null;

  @ManyToOne(() => TsirfeEntity, (tsirfeEntity) => tsirfeEntity.tsirfas)
  @JoinColumn([{ name: 'NURFE', referencedColumnName: 'nurfe' }])
  nurfe2: TsirfeEntity;
}
