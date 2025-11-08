import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGFSEG', ['nunota', 'seqseg'], { unique: true })
@Entity('TGFSEG', { schema: 'SANKHYA' })
export class TgfsegEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQSEG' })
  seqseg: number;

  @Column('char', { name: 'RESPSEG', length: 1 })
  respseg: string;

  @Column('varchar', { name: 'NOMESEG', length: 30 })
  nomeseg: string;

  @Column('varchar', { name: 'NUMAPO', length: 20 })
  numapo: string;

  @Column('varchar', { name: 'NUMAVE', nullable: true, length: 100 })
  numave: string | null;

  @Column('float', { name: 'VLRCARGA', precision: 53 })
  vlrcarga: number;

  @Column('datetime', { name: 'DHAVE', nullable: true })
  dhave: Date | null;

  @Column('int', { name: 'CODPARCSEG', nullable: true })
  codparcseg: number | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfsegs)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;
}
