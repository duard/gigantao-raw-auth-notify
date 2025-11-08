import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TmiexeEntity } from './tMIEXE.entity';
import { TmimetEntity } from './tMIMET.entity';

@Index('PK_TMIRME', ['numet', 'codexe', 'perini'], { unique: true })
@Entity('TMIRME', { schema: 'SANKHYA' })
export class TmirmeEntity {
  @Column('int', { primary: true, name: 'NUMET' })
  numet: number;

  @Column('int', { primary: true, name: 'CODEXE' })
  codexe: number;

  @Column('datetime', { primary: true, name: 'PERINI' })
  perini: Date;

  @Column('datetime', { name: 'PERFIN' })
  perfin: Date;

  @Column('varchar', { name: 'DESCRPERIODO', length: 200 })
  descrperiodo: string;

  @Column('float', { name: 'VLRREAL', precision: 53 })
  vlrreal: number;

  @Column('float', { name: 'VLRREALACUM', precision: 53 })
  vlrrealacum: number;

  @Column('float', { name: 'VLRPREV', precision: 53 })
  vlrprev: number;

  @Column('float', { name: 'VLRPREVACUM', precision: 53 })
  vlrprevacum: number;

  @Column('smallint', { name: 'FAROL' })
  farol: number;

  @Column('smallint', { name: 'FAROLACUM' })
  farolacum: number;

  @Column('datetime', { name: 'DHALTERREAL' })
  dhalterreal: Date;

  @Column('datetime', { name: 'DHALTERPREV' })
  dhalterprev: Date;

  @Column('char', { name: 'FECHADO', length: 1, default: () => "'N'" })
  fechado: string;

  @Column('char', { name: 'MANUAL', length: 1, default: () => "'N'" })
  manual: string;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @ManyToOne(() => TmiexeEntity, (tmiexeEntity) => tmiexeEntity.tmirmes)
  @JoinColumn([{ name: 'CODEXE', referencedColumnName: 'codexe' }])
  codexe2: TmiexeEntity;

  @ManyToOne(() => TmimetEntity, (tmimetEntity) => tmimetEntity.tmirmes)
  @JoinColumn([{ name: 'NUMET', referencedColumnName: 'numet' }])
  numet2: TmimetEntity;
}
