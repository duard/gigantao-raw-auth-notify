import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TCSEHI', ['nufap', 'numetapa', 'dtalter'], { unique: true })
@Entity('TCSEHI', { schema: 'SANKHYA' })
export class TcsehiEntity {
  @Column('int', { primary: true, name: 'NUFAP' })
  nufap: number;

  @Column('int', { primary: true, name: 'NUMETAPA' })
  numetapa: number;

  @Column('smallint', { name: 'NUMSEQ' })
  numseq: number;

  @Column('char', { name: 'TIPVALOR', length: 1, default: () => "'N'" })
  tipvalor: string;

  @Column('char', { name: 'SUPLEMENTA', length: 1, default: () => "'S'" })
  suplementa: string;

  @Column('char', { name: 'SUPLEMENTADO', length: 1, default: () => "'N'" })
  suplementado: string;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('smallint', { name: 'VLRSUPLEMENTA' })
  vlrsuplementa: number;

  @Column('smallint', { name: 'VLRSUPLEMENTADO' })
  vlrsuplementado: number;

  @Column('datetime', { name: 'DTCEDOINIPREV' })
  dtcedoiniprev: Date;

  @Column('datetime', { name: 'DTCEDOFIMPREV' })
  dtcedofimprev: Date;

  @Column('datetime', { name: 'DTTARDEINIPREV' })
  dttardeiniprev: Date;

  @Column('datetime', { name: 'DTTARDEFIMPREV' })
  dttardefimprev: Date;

  @Column('datetime', { primary: true, name: 'DTALTER' })
  dtalter: Date;

  @Column('smallint', { name: 'VLRSUPLEMENTAREA' })
  vlrsuplementarea: number;

  @Column('smallint', { name: 'VLRSUPLEMENTADOREA' })
  vlrsuplementadorea: number;

  @Column('char', {
    name: 'CONCLUIDA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  concluida: string | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcsehis)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcsehis)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
