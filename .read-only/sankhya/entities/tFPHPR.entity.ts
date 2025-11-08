import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPHPR', ['referencia', 'codpref'], { unique: true })
@Entity('TFPHPR', { schema: 'SANKHYA' })
export class TfphprEntity {
  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'CODPREF' })
  codpref: number;

  @Column('smallint', { name: 'MESESMEDIAFER', nullable: true })
  mesesmediafer: number | null;

  @Column('char', { name: 'CALCFERPERAQUI', length: 1, default: () => "'S'" })
  calcferperaqui: string;

  @Column('char', { name: 'PROVFERMEDIAS', length: 1, default: () => "'N'" })
  provfermedias: string;

  @Column('smallint', { name: 'MESESMEDIA13S', nullable: true })
  mesesmedia13S: number | null;

  @Column('smallint', { name: 'MESESMEDIARESC', nullable: true })
  mesesmediaresc: number | null;

  @Column('char', {
    name: 'FORMACALCMEDIAS',
    nullable: true,
    length: 1,
    default: () => "'T'",
  })
  formacalcmedias: string | null;

  @Column('smallint', { name: 'MESESMEDIAFER2', nullable: true })
  mesesmediafer2: number | null;

  @Column('smallint', { name: 'MESESMEDIA13S2', nullable: true })
  mesesmedia13S2: number | null;

  @Column('smallint', { name: 'MESESMEDIARESC2', nullable: true })
  mesesmediaresc2: number | null;

  @Column('smallint', { name: 'QTDMAIORES', nullable: true })
  qtdmaiores: number | null;

  @Column('char', { name: 'TIPMOVMEDIAS', length: 1, default: () => "'N'" })
  tipmovmedias: string;

  @Column('char', { name: 'FERPROPERAQUI', nullable: true, length: 1 })
  ferproperaqui: string | null;

  @Column('char', { name: 'MEDIAARITIM13', length: 1, default: () => "'N'" })
  mediaaritim13: string;

  @Column('char', {
    name: 'MEDIAPERFERIAS',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  mediaperferias: string | null;

  @Column('smallint', { name: 'MESESMEDIARESF', nullable: true })
  mesesmediaresf: number | null;

  @Column('smallint', { name: 'MESESMEDIARESF2', nullable: true })
  mesesmediaresf2: number | null;

  @Column('smallint', { name: 'MESESMEDIARESD', nullable: true })
  mesesmediaresd: number | null;

  @Column('smallint', { name: 'MESESMEDIARESD2', nullable: true })
  mesesmediaresd2: number | null;

  @Column('char', { name: 'CALCMEDIARESF', length: 1, default: () => "'P'" })
  calcmediaresf: string;

  @Column('char', { name: 'CALCMEDIARESD', length: 1, default: () => "'A'" })
  calcmediaresd: string;

  @Column('char', { name: 'MEDIAARITFERPRO', length: 1, default: () => "'S'" })
  mediaaritferpro: string;

  @Column('char', { name: 'MEDIAARITM13RES', length: 1, default: () => "'N'" })
  mediaaritm13Res: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('smallint', { name: 'MESCARENCIA', nullable: true })
  mescarencia: number | null;

  @Column('char', { name: 'CONSIDERAMESRESC', length: 1, default: () => "'N'" })
  consideramesresc: string;

  @Column('char', {
    name: 'MEDIAPERFERDIVVAL',
    length: 1,
    default: () => "'N'",
  })
  mediaperferdivval: string;

  @Column('char', { name: 'DIVISORMEDAPI', length: 1, default: () => "'A'" })
  divisormedapi: string;

  @Column('smallint', {
    name: 'FATORARRD',
    nullable: true,
    default: () => '(0)',
  })
  fatorarrd: number | null;

  @Column('varchar', { name: 'TIPOARRD', length: 1, default: () => "'N'" })
  tipoarrd: string;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfphprs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
