import { Column, Entity, Index } from 'typeorm';

@Index('TGFCLE_I01', ['codctabcoint', 'codigoedi'], { unique: true })
@Index('TGFCLE_PK', ['codctabcoint', 'sequencia'], { unique: true })
@Entity('TGFCLE', { schema: 'SANKHYA' })
export class TgfcleEntity {
  @Column('int', { primary: true, name: 'CODCTABCOINT' })
  codctabcoint: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'DESCRICAO', length: 100 })
  descricao: string;

  @Column('int', { name: 'CODIGOEDI' })
  codigoedi: number;

  @Column('smallint', { name: 'TIPOLANC' })
  tipolanc: number;
}
