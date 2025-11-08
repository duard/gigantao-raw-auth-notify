import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TrsreqEntity } from './tRSREQ.entity';
import { TrspfvEntity } from './tRSPFV.entity';
import { TrsselEntity } from './tRSSEL.entity';

@Index('PK_TRSANU', ['codanuncio'], { unique: true })
@Entity('TRSANU', { schema: 'SANKHYA' })
export class TrsanuEntity {
  @Column('int', { primary: true, name: 'CODANUNCIO' })
  codanuncio: number;

  @Column('char', { name: 'DESCRVAGA', length: 60 })
  descrvaga: string;

  @Column('datetime', { name: 'DTENTRADA', nullable: true })
  dtentrada: Date | null;

  @Column('datetime', { name: 'DTTERMINO', nullable: true })
  dttermino: Date | null;

  @Column('int', { name: 'NUVAGAS', nullable: true })
  nuvagas: number | null;

  @Column('text', { name: 'RESUMO' })
  resumo: string;

  @Column('char', { name: 'FORMAEXP', length: 1, default: () => "'C'" })
  formaexp: string;

  @Column('money', { name: 'FAIXASALARIALINICIAL', nullable: true })
  faixasalarialinicial: number | null;

  @Column('money', { name: 'FAIXASALARIALFINAL', nullable: true })
  faixasalarialfinal: number | null;

  @Column('smallint', { name: 'GRAUINSTR', nullable: true })
  grauinstr: number | null;

  @Column('char', { name: 'STATUS', length: 1, default: () => "'A'" })
  status: string;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'M'" })
  tipo: string;

  @Column('varchar', { name: 'MOTCANCEL', nullable: true, length: 250 })
  motcancel: string | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.trsanus)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TrsreqEntity, (trsreqEntity) => trsreqEntity.trsanus)
  @JoinColumn([{ name: 'NUREQUISICAO', referencedColumnName: 'nurequisicao' }])
  nurequisicao: TrsreqEntity;

  @OneToMany(() => TrspfvEntity, (trspfvEntity) => trspfvEntity.codanuncio2)
  trspfvs: TrspfvEntity[];

  @OneToMany(() => TrsselEntity, (trsselEntity) => trsselEntity.codanuncio)
  trssels: TrsselEntity[];
}
