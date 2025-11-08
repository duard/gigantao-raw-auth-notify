import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfiffpEntity } from './tGFIFFP.entity';

@Index('PK_TGFIFF', ['nudecreto'], { unique: true })
@Entity('TGFIFF', { schema: 'SANKHYA' })
export class TgfiffEntity {
  @Column('int', { primary: true, name: 'NUDECRETO' })
  nudecreto: number;

  @Column('int', { name: 'NUMERODECRETO' })
  numerodecreto: number;

  @Column('datetime', { name: 'DTINIVALIDADE' })
  dtinivalidade: Date;

  @Column('datetime', { name: 'DTFIMVALIDADE', nullable: true })
  dtfimvalidade: Date | null;

  @Column('smallint', { name: 'INDENQUAD', nullable: true })
  indenquad: number | null;

  @Column('smallint', { name: 'INDNATUREZA', nullable: true })
  indnatureza: number | null;

  @Column('smallint', { name: 'INDCOBRICMSMIN', nullable: true })
  indcobricmsmin: number | null;

  @Column('float', { name: 'PERCINCITEM', nullable: true, precision: 53 })
  percincitem: number | null;

  @Column('smallint', { name: 'PRAZOFRUICAOANOS', nullable: true })
  prazofruicaoanos: number | null;

  @Column('float', { name: 'PERCCREDPRES', nullable: true, precision: 53 })
  perccredpres: number | null;

  @Column('smallint', { name: 'INDSUBAPUR', nullable: true })
  indsubapur: number | null;

  @Column('varchar', { name: 'CODPRODSEMINC', nullable: true, length: 8 })
  codprodseminc: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('char', { name: 'CONSCFOPPROD', nullable: true, length: 1 })
  conscfopprod: string | null;

  @Column('float', { name: 'INDRECCENDIST', nullable: true, precision: 53 })
  indreccendist: number | null;

  @Column('char', {
    name: 'CONVLCFOPRO1960',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  convlcfopro1960: string | null;

  @Column('smallint', { name: 'CUSIMPORTACAOBASE', nullable: true })
  cusimportacaobase: number | null;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfiffs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfiffs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TgfiffpEntity, (tgfiffpEntity) => tgfiffpEntity.nudecreto2)
  tgfiffps: TgfiffpEntity[];
}
