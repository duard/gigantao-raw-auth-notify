import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCCPRO', ['codcc', 'numprotocolo'], { unique: true })
@Entity('TCCPRO', { schema: 'SANKHYA' })
export class TccproEntity {
  @Column('int', { primary: true, name: 'CODCC' })
  codcc: number;

  @Column('datetime', { name: 'DTRECEBI', nullable: true })
  dtrecebi: Date | null;

  @Column('varchar', { name: 'DOCUMENTO', nullable: true, length: 20 })
  documento: string | null;

  @Column('varchar', { name: 'PESSOA', nullable: true, length: 80 })
  pessoa: string | null;

  @Column('varchar', { name: 'IDENTIDADE', nullable: true, length: 15 })
  identidade: string | null;

  @Column('int', { primary: true, name: 'NUMPROTOCOLO' })
  numprotocolo: number;

  @Column('varchar', { name: 'ENTREGUE', nullable: true, length: 1 })
  entregue: string | null;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 50 })
  tipo: string | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 3103 })
  observacao: string | null;
}
