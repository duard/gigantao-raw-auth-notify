import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFXFPU', ['codperfil', 'codusuario', 'idfuncao', 'nometela'], {
  unique: true,
})
@Entity('TFXFPU', { schema: 'SANKHYA' })
export class TfxfpuEntity {
  @Column('int', { primary: true, name: 'CODPERFIL' })
  codperfil: number;

  @Column('int', { primary: true, name: 'CODUSUARIO' })
  codusuario: number;

  @Column('varchar', { primary: true, name: 'IDFUNCAO', length: 100 })
  idfuncao: string;

  @Column('varchar', { name: 'ATALHO', nullable: true, length: 20 })
  atalho: string | null;

  @Column('varchar', { name: 'ATALHOTEXT', nullable: true, length: 20 })
  atalhotext: string | null;

  @Column('varchar', { primary: true, name: 'NOMETELA', length: 80 })
  nometela: string;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;

  @Column('char', { name: 'ATUNUVERSAO', nullable: true, length: 1 })
  atunuversao: string | null;
}
