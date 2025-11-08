import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFCUL', ['codcul'], { unique: true })
@Entity('TGFCUL', { schema: 'SANKHYA' })
export class TgfculEntity {
  @Column('int', { primary: true, name: 'CODCUL' })
  codcul: number;

  @Column('varchar', { name: 'NOME', length: 50 })
  nome: string;

  @Column('varchar', { name: 'NOMECIENTIFICO', nullable: true, length: 50 })
  nomecientifico: string | null;

  @Column('char', { name: 'ATIVO', nullable: true, length: 1 })
  ativo: string | null;
}
