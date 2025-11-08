import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TmicepEntity } from './tMICEP.entity';
import { TcsoseEntity } from './tCSOSE.entity';
import { TmiungEntity } from './tMIUNG.entity';
import { TmimetEntity } from './tMIMET.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TMIPLA', ['codpla'], { unique: true })
@Entity('TMIPLA', { schema: 'SANKHYA' })
export class TmiplaEntity {
  @Column('int', { primary: true, name: 'CODPLA' })
  codpla: number;

  @Column('int', { name: 'CODEFEITO' })
  codefeito: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 500 })
  descricao: string | null;

  @Column('datetime', { name: 'DTPLA' })
  dtpla: Date;

  @Column('char', { name: 'STATUS', length: 1, default: () => "'P'" })
  status: string;

  @Column('datetime', { name: 'DTINIPREVISTO' })
  dtiniprevisto: Date;

  @Column('datetime', { name: 'DTFIMPREVISTO' })
  dtfimprevisto: Date;

  @Column('datetime', { name: 'DTINIREALIZADO' })
  dtinirealizado: Date;

  @Column('datetime', { name: 'DTFIMREALIZADO' })
  dtfimrealizado: Date;

  @Column('varchar', { name: 'OQUE', nullable: true, length: 1000 })
  oque: string | null;

  @Column('varchar', { name: 'ONDE', length: 1000 })
  onde: string;

  @Column('varchar', { name: 'PORQUE', length: 1000 })
  porque: string;

  @Column('varchar', { name: 'COMO', length: 1000 })
  como: string;

  @Column('varchar', { name: 'QUANTO', length: 1000 })
  quanto: string;

  @Column('varchar', { name: 'RETORNO', length: 1000 })
  retorno: string;

  @Column('varchar', { name: 'OBS', length: 1000 })
  obs: string;

  @Column('float', { name: 'COMPLETUDE', nullable: true, precision: 53 })
  completude: number | null;

  @Column('int', { name: 'CODEXE', nullable: true })
  codexe: number | null;

  @Column('smallint', { name: 'CODUSUALTER', nullable: true })
  codusualter: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @OneToMany(() => TmicepEntity, (tmicepEntity) => tmicepEntity.codpla2)
  tmiceps: TmicepEntity[];

  @ManyToOne(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.tmiplas)
  @JoinColumn([{ name: 'NUMOS', referencedColumnName: 'numos' }])
  numos: TcsoseEntity;

  @ManyToOne(() => TmiungEntity, (tmiungEntity) => tmiungEntity.tmiplas)
  @JoinColumn([{ name: 'CODUNG', referencedColumnName: 'codung' }])
  codung: TmiungEntity;

  @ManyToOne(() => TmimetEntity, (tmimetEntity) => tmimetEntity.tmiplas)
  @JoinColumn([{ name: 'NUMET', referencedColumnName: 'numet' }])
  numet: TmimetEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tmiplas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tmiplas2)
  @JoinColumn([{ name: 'CODUSUEXEC', referencedColumnName: 'codusu' }])
  codusuexec: TsiusuEntity;
}
