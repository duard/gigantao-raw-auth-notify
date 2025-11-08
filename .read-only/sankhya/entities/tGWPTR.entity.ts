import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGWPTR', ['nuseparacao', 'codprod', 'controle'], { unique: true })
@Entity('TGWPTR', { schema: 'SANKHYA' })
export class TgwptrEntity {
  @Column('int', { primary: true, name: 'NUSEPARACAO' })
  nuseparacao: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { primary: true, name: 'CONTROLE', length: 11 })
  controle: string;

  @Column('float', { name: 'PESO', precision: 53 })
  peso: number;
}
