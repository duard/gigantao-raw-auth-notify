import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMSTABFRETEROTA', ['codtabela', 'seqrota'], { unique: true })
@Entity('TMSTABFRETEROTA', { schema: 'SANKHYA' })
export class TmstabfreterotaEntity {
  @Column('int', { primary: true, name: 'CODTABELA' })
  codtabela: number;

  @Column('int', { primary: true, name: 'SEQROTA' })
  seqrota: number;

  @Column('varchar', { name: 'NOME', length: 100 })
  nome: string;

  @Column('int', { name: 'CODPARCORIG', nullable: true })
  codparcorig: number | null;

  @Column('int', { name: 'CODPARCDEST', nullable: true })
  codparcdest: number | null;

  @Column('int', { name: 'CODCIDORIG', nullable: true })
  codcidorig: number | null;

  @Column('int', { name: 'CODCIDDEST', nullable: true })
  codciddest: number | null;

  @Column('int', { name: 'CODREGORIG', nullable: true })
  codregorig: number | null;

  @Column('int', { name: 'CODREGDEST', nullable: true })
  codregdest: number | null;

  @Column('int', { name: 'CODUFORIG', nullable: true })
  coduforig: number | null;

  @Column('int', { name: 'CODUFDEST', nullable: true })
  codufdest: number | null;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 10 })
  tipo: string | null;

  @Column('float', { name: 'VLRFRETEMIN', nullable: true, precision: 53 })
  vlrfretemin: number | null;

  @Column('float', { name: 'PERCVLRNOTA', nullable: true, precision: 53 })
  percvlrnota: number | null;
}
