import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMSORDCTES', ['codemp', 'ordemcarga', 'chavecte'], { unique: true })
@Entity('TMSORDCTES', { schema: 'SANKHYA' })
export class TmsordctesEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'ORDEMCARGA' })
  ordemcarga: number;

  @Column('varchar', { primary: true, name: 'CHAVECTE', length: 100 })
  chavecte: string;
}
