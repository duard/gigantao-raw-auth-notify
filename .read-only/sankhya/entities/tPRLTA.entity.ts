import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprtacEntity } from './tPRTAC.entity';
import { TgacltEntity } from './tGACLT.entity';

@Index('PK_TPRLTA', ['idccq', 'seqtac', 'codclt'], { unique: true })
@Entity('TPRLTA', { schema: 'SANKHYA' })
export class TprltaEntity {
  @Column('int', { primary: true, name: 'IDCCQ' })
  idccq: number;

  @Column('smallint', { primary: true, name: 'SEQTAC' })
  seqtac: number;

  @Column('int', { primary: true, name: 'CODCLT' })
  codclt: number;

  @Column('char', { name: 'OBRIGATORIO', length: 1, default: () => "'S'" })
  obrigatorio: string;

  @ManyToOne(() => TprtacEntity, (tprtacEntity) => tprtacEntity.tprltas)
  @JoinColumn([
    { name: 'IDCCQ', referencedColumnName: 'idccq' },
    { name: 'SEQTAC', referencedColumnName: 'seqtac' },
  ])
  tprtac: TprtacEntity;

  @ManyToOne(() => TgacltEntity, (tgacltEntity) => tgacltEntity.tprltas)
  @JoinColumn([{ name: 'CODCLT', referencedColumnName: 'codclt' }])
  codclt2: TgacltEntity;
}
