import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcslbpEntity } from './tCSLBP.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TCSLBE', ['nufap', 'seqlibase', 'numetapa'], { unique: true })
@Entity('TCSLBE', { schema: 'SANKHYA' })
export class TcslbeEntity {
  @Column('int', { primary: true, name: 'NUFAP' })
  nufap: number;

  @Column('int', { primary: true, name: 'NUMETAPA' })
  numetapa: number;

  @Column('smallint', { primary: true, name: 'SEQLIBASE' })
  seqlibase: number;

  @Column('smallint', { name: 'NUMSEQ', nullable: true })
  numseq: number | null;

  @Column('char', { name: 'TIPVALOR', length: 1 })
  tipvalor: string;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('datetime', { name: 'DTCEDOINIPREV', nullable: true })
  dtcedoiniprev: Date | null;

  @Column('datetime', { name: 'DTCEDOFIMPREV', nullable: true })
  dtcedofimprev: Date | null;

  @Column('datetime', { name: 'DTTARDEINIPREV', nullable: true })
  dttardeiniprev: Date | null;

  @Column('datetime', { name: 'DTTARDEFIMPREV', nullable: true })
  dttardefimprev: Date | null;

  @Column('int', { name: 'NUMETAPAPAI', default: () => '(99999)' })
  numetapapai: number;

  @ManyToOne(() => TcslbpEntity, (tcslbpEntity) => tcslbpEntity.tcslbes)
  @JoinColumn([
    { name: 'NUFAP', referencedColumnName: 'nufap' },
    { name: 'SEQLIBASE', referencedColumnName: 'sequencia' },
  ])
  tcslbp: TcslbpEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcslbes)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;
}
