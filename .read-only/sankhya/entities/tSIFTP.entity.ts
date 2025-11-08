import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIFTP', ['arquivo', 'direcao'], { unique: true })
@Entity('TSIFTP', { schema: 'SANKHYA' })
export class TsiftpEntity {
  @Column('char', { primary: true, name: 'ARQUIVO', length: 50 })
  arquivo: string;

  @Column('char', { primary: true, name: 'DIRECAO', length: 1 })
  direcao: string;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;
}
