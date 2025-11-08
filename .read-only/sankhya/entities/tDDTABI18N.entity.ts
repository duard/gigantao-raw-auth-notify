import { Column, Entity, Index } from 'typeorm';

@Index('PK_TDDTABI18N', ['nometab', 'locale'], { unique: true })
@Entity('TDDTABI18N', { schema: 'SANKHYA' })
export class Tddtabi18NEntity {
  @Column('varchar', { primary: true, name: 'NOMETAB', length: 32 })
  nometab: string;

  @Column('varchar', { primary: true, name: 'LOCALE', length: 8 })
  locale: string;

  @Column('varchar', { name: 'TEXTO', length: 255 })
  texto: string;

  @Column('char', { name: 'CONTROLE', nullable: true, length: 1 })
  controle: string | null;

  @Column('varchar', { name: 'DOMAIN', nullable: true, length: 250 })
  domain: string | null;
}
