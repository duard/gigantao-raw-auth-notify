import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFXPAF', ['codempresa', 'codperfil', 'codusuario', 'chave'], {
  unique: true,
})
@Entity('TFXPAF', { schema: 'SANKHYA' })
export class TfxpafEntity {
  @Column('int', { primary: true, name: 'CODEMPRESA', default: () => '(0)' })
  codempresa: number;

  @Column('int', { primary: true, name: 'CODPERFIL', default: () => '(0)' })
  codperfil: number;

  @Column('int', { primary: true, name: 'CODUSUARIO', default: () => '(0)' })
  codusuario: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 50 })
  chave: string;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;

  @Column('varchar', { name: 'GRUPO', nullable: true, length: 50 })
  grupo: string | null;

  @Column('char', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('char', { name: 'LOGICO', nullable: true, length: 1 })
  logico: string | null;

  @Column('int', { name: 'INTEIRO', nullable: true })
  inteiro: number | null;

  @Column('float', { name: 'NUMERICO', nullable: true, precision: 53 })
  numerico: number | null;

  @Column('datetime', { name: 'DT', nullable: true })
  dt: Date | null;

  @Column('varchar', { name: 'TEXTO', nullable: true, length: 3103 })
  texto: string | null;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;
}
