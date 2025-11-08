import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIAPRN', ['codigo', 'tipo', 'nusvp', 'nuprinter'], { unique: true })
@Entity('TSIAPRN', { schema: 'SANKHYA' })
export class TsiaprnEntity {
  @Column('smallint', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('char', { primary: true, name: 'TIPO', length: 1 })
  tipo: string;

  @Column('smallint', { primary: true, name: 'NUSVP' })
  nusvp: number;

  @Column('smallint', {
    primary: true,
    name: 'NUPRINTER',
    default: () => '(0)',
  })
  nuprinter: number;
}
