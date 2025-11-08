import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSICOL', ['nutabsis', 'nucol'], { unique: true })
@Entity('TSICOL', { schema: 'SANKHYA' })
export class TsicolEntity {
  @Column('smallint', { primary: true, name: 'NUTABSIS' })
  nutabsis: number;

  @Column('smallint', { primary: true, name: 'NUCOL' })
  nucol: number;

  @Column('char', { name: 'CODCOLUNA', length: 15 })
  codcoluna: string;

  @Column('char', { name: 'NOMECOLUNA', nullable: true, length: 30 })
  nomecoluna: string | null;

  @Column('text', { name: 'DESCRCOLUNA', nullable: true })
  descrcoluna: string | null;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'C'" })
  tipo: string;

  @Column('smallint', { name: 'TAMCAMPO', nullable: true })
  tamcampo: number | null;

  @Column('char', { name: 'OBRIGATORIO', length: 1, default: () => "'N'" })
  obrigatorio: string;

  @Column('smallint', { name: 'ALINHAMENTO' })
  alinhamento: number;

  @Column('char', { name: 'VALIDACAO', nullable: true, length: 40 })
  validacao: string | null;

  @Column('char', { name: 'FK', nullable: true, length: 40 })
  fk: string | null;

  @Column('char', { name: 'VLRPADRAO', nullable: true, length: 40 })
  vlrpadrao: string | null;

  @Column('char', { name: 'COLUSUARIO', length: 1, default: () => "'N'" })
  colusuario: string;

  @Column('text', { name: 'OPCOESCOMBO', nullable: true })
  opcoescombo: string | null;

  @Column('char', { name: 'MASCARA', nullable: true, length: 60 })
  mascara: string | null;

  @Column('char', {
    name: 'GRUPO',
    nullable: true,
    length: 32,
    default: () => "''",
  })
  grupo: string | null;

  @Column('smallint', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
