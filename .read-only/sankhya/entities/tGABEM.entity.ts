import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGABEM', ['codparc', 'sequencia'], { unique: true })
@Index('TGABEM_ITIPO', ['tipobem'], {})
@Entity('TGABEM', { schema: 'SANKHYA' })
export class TgabemEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { name: 'DESCRBEM', length: 250 })
  descrbem: string;

  @Column('char', { name: 'TIPOBEM', length: 15 })
  tipobem: string;

  @Column('float', { name: 'VLRBEM', precision: 53 })
  vlrbem: number;

  @Column('datetime', { name: 'DTVENDA', nullable: true })
  dtvenda: Date | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgabems)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}
