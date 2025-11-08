import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCBPLR', ['tipo', 'codctaref'], { unique: true })
@Entity('TCBPLR', { schema: 'SANKHYA' })
export class TcbplrEntity {
  @Column('smallint', { primary: true, name: 'TIPO' })
  tipo: number;

  @Column('varchar', { primary: true, name: 'CODCTAREF', length: 30 })
  codctaref: string;

  @Column('varchar', { name: 'DESCRCTAREF', length: 200 })
  descrctaref: string;

  @Column('smallint', { name: 'GRAU' })
  grau: number;

  @Column('varchar', { name: 'ANALITICA', length: 1 })
  analitica: string;

  @Column('varchar', { name: 'CTCCTBPAI', length: 30 })
  ctcctbpai: string;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('varchar', { name: 'NATUREZA', nullable: true, length: 2 })
  natureza: string | null;

  @Column('varchar', { name: 'TABELA', nullable: true, length: 6 })
  tabela: string | null;
}
