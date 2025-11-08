import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFXPFC', ['codperfil', 'idfuncao', 'nometela'], { unique: true })
@Entity('TFXPFC', { schema: 'SANKHYA' })
export class TfxpfcEntity {
  @Column('int', { primary: true, name: 'CODPERFIL' })
  codperfil: number;

  @Column('varchar', { primary: true, name: 'IDFUNCAO', length: 100 })
  idfuncao: string;

  @Column('varchar', { primary: true, name: 'NOMETELA', length: 80 })
  nometela: string;

  @Column('varchar', {
    name: 'ATIVO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  ativo: string | null;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;
}
