import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tgfcoi2Entity } from './tGFCOI2.entity';

@Index('PK_TGFSLT', ['nuconf', 'seqconf', 'identificador'], { unique: true })
@Entity('TGFSLT', { schema: 'SANKHYA' })
export class TgfsltEntity {
  @Column('int', { primary: true, name: 'NUCONF' })
  nuconf: number;

  @Column('smallint', { primary: true, name: 'SEQCONF' })
  seqconf: number;

  @Column('varchar', { primary: true, name: 'IDENTIFICADOR', length: 50 })
  identificador: string;

  @Column('varchar', { name: 'CODBARRA', nullable: true, length: 200 })
  codbarra: string | null;

  @ManyToOne(() => Tgfcoi2Entity, (tgfcoi2Entity) => tgfcoi2Entity.tgfslts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUCONF', referencedColumnName: 'nuconf' },
    { name: 'SEQCONF', referencedColumnName: 'seqconf' },
  ])
  tgfcoi: Tgfcoi2Entity;
}
