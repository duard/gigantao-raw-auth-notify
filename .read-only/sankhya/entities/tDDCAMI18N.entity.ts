import { Column, Entity, Index } from 'typeorm';

@Index('PK_TDDCAMI18N', ['nometab', 'nomecampo', 'locale'], { unique: true })
@Entity('TDDCAMI18N', { schema: 'SANKHYA' })
export class Tddcami18NEntity {
  @Column('varchar', { primary: true, name: 'NOMETAB', length: 32 })
  nometab: string;

  @Column('varchar', { primary: true, name: 'NOMECAMPO', length: 32 })
  nomecampo: string;

  @Column('varchar', { primary: true, name: 'LOCALE', length: 8 })
  locale: string;

  @Column('varchar', { name: 'TEXTO', length: 255 })
  texto: string;

  @Column('char', { name: 'CONTROLE', nullable: true, length: 1 })
  controle: string | null;

  @Column('varchar', { name: 'DOMAIN', nullable: true, length: 250 })
  domain: string | null;
}
