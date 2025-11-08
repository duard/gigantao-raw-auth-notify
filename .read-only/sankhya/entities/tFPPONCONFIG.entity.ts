import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPPONCONFIG', ['chave'], { unique: true })
@Entity('TFPPONCONFIG', { schema: 'SANKHYA' })
export class TfpponconfigEntity {
  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'JSON', nullable: true, length: 3103 })
  json: string | null;

  @Column('datetime', {
    name: 'DHALTER',
    nullable: true,
    default: () => 'getdate()',
  })
  dhalter: Date | null;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 1000 })
  descricao: string | null;
}
