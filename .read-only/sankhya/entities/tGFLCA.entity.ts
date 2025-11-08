import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFLCA', ['codlca'], { unique: true })
@Entity('TGFLCA', { schema: 'SANKHYA' })
export class TgflcaEntity {
  @Column('int', { primary: true, name: 'CODLCA' })
  codlca: number;

  @Column('varchar', { name: 'DESCRICAO', length: 40 })
  descricao: string;

  @Column('varchar', { name: 'TITULO', length: 10 })
  titulo: string;

  @Column('varchar', { name: 'LISTA', length: 3103 })
  lista: string;
}
