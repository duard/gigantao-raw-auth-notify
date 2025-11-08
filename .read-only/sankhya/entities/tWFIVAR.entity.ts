import { Column, Entity, Index } from 'typeorm';

@Index('PK_TWFIVAR', ['idinstprn', 'idinsttar', 'nome'], { unique: true })
@Entity('TWFIVAR', { schema: 'SANKHYA' })
export class TwfivarEntity {
  @Column('int', { primary: true, name: 'IDINSTPRN' })
  idinstprn: number;

  @Column('int', { primary: true, name: 'IDINSTTAR' })
  idinsttar: number;

  @Column('varchar', { primary: true, name: 'NOME', length: 100 })
  nome: string;

  @Column('varchar', { name: 'TIPO', length: 1 })
  tipo: string;

  @Column('int', { name: 'NUMINT', nullable: true })
  numint: number | null;

  @Column('float', { name: 'NUMDEC', nullable: true, precision: 53 })
  numdec: number | null;

  @Column('datetime', { name: 'DTA', nullable: true })
  dta: Date | null;

  @Column('varchar', { name: 'TEXTO', nullable: true, length: 3103 })
  texto: string | null;

  @Column('text', { name: 'TEXTOLONGO', nullable: true })
  textolongo: string | null;
}
