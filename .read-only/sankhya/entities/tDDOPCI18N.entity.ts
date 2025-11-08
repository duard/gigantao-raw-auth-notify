import { Column, Entity, Index } from 'typeorm';

@Index('PK_TDDOPCI18N', ['nometab', 'nomecampo', 'valor', 'locale'], {
  unique: true,
})
@Entity('TDDOPCI18N', { schema: 'SANKHYA' })
export class Tddopci18NEntity {
  @Column('varchar', { primary: true, name: 'NOMETAB', length: 32 })
  nometab: string;

  @Column('varchar', { primary: true, name: 'NOMECAMPO', length: 32 })
  nomecampo: string;

  @Column('varchar', { primary: true, name: 'VALOR', length: 15 })
  valor: string;

  @Column('varchar', { primary: true, name: 'LOCALE', length: 8 })
  locale: string;

  @Column('varchar', { name: 'TEXTO', length: 255 })
  texto: string;

  @Column('char', { name: 'CONTROLE', nullable: true, length: 1 })
  controle: string | null;

  @Column('varchar', { name: 'DOMAIN', nullable: true, length: 250 })
  domain: string | null;
}
