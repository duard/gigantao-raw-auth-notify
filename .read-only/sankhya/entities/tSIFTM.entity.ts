import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TsiftdEntity } from './tSIFTD.entity';

@Index('PK_TSIFTM', ['codigo', 'modulo'], { unique: true })
@Entity('TSIFTM', { schema: 'SANKHYA' })
export class TsiftmEntity {
  @Column('smallint', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('char', {
    primary: true,
    name: 'MODULO',
    length: 1,
    default: () => "'G'",
  })
  modulo: string;

  @Column('char', { name: 'TITULO', nullable: true, length: 40 })
  titulo: string | null;

  @Column('smallint', { name: 'TAMREGISTRO', nullable: true })
  tamregistro: number | null;

  @Column('char', { name: 'PROGRAMA', nullable: true, length: 20 })
  programa: string | null;

  @Column('smallint', { name: 'CODBCO', nullable: true })
  codbco: number | null;

  @Column('smallint', { name: 'GRAU', nullable: true })
  grau: number | null;

  @Column('char', { name: 'UTILIZASEQALT', length: 1, default: () => "'N'" })
  utilizaseqalt: string;

  @Column('char', { name: 'UTILIZASEQINFO', length: 1, default: () => "'N'" })
  utilizaseqinfo: string;

  @Column('int', { name: 'SEQINFO', nullable: true })
  seqinfo: number | null;

  @OneToMany(() => TsiftdEntity, (tsiftdEntity) => tsiftdEntity.tsiftm)
  tsiftds: TsiftdEntity[];
}
