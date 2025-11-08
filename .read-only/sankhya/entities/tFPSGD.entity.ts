import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPSGD', ['codsituacaogeradora'], { unique: true })
@Entity('TFPSGD', { schema: 'SANKHYA' })
export class TfpsgdEntity {
  @Column('int', { primary: true, name: 'CODSITUACAOGERADORA' })
  codsituacaogeradora: number;

  @Column('varchar', { name: 'DESCRSITUACAOGERADORA', length: 250 })
  descrsituacaogeradora: string;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;
}
