import { Column, Entity, Index } from 'typeorm';

@Index('PK_TRDSCP', ['nome', 'tipo'], { unique: true })
@Entity('TRDSCP', { schema: 'SANKHYA' })
export class TrdscpEntity {
  @Column('varchar', { primary: true, name: 'NOME', length: 50 })
  nome: string;

  @Column('varchar', { primary: true, name: 'TIPO', length: 2 })
  tipo: string;

  @Column('text', { name: 'CONTEUDO', nullable: true })
  conteudo: string | null;

  @Column('char', { name: 'CONTROLE', nullable: true, length: 1 })
  controle: string | null;

  @Column('varchar', { name: 'DOMAIN', nullable: true, length: 250 })
  domain: string | null;
}
