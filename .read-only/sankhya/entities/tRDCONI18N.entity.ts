import { Column, Entity, Index } from 'typeorm';

@Index('PK_TDDCONSI18N', ['nomecontrole', 'locale'], { unique: true })
@Entity('TRDCONI18N', { schema: 'SANKHYA' })
export class Trdconi18NEntity {
  @Column('varchar', { primary: true, name: 'NOMECONTROLE', length: 50 })
  nomecontrole: string;

  @Column('varchar', { primary: true, name: 'LOCALE', length: 8 })
  locale: string;

  @Column('varchar', { name: 'TEXTO', length: 255 })
  texto: string;

  @Column('char', { name: 'CONTROLE', nullable: true, length: 1 })
  controle: string | null;

  @Column('varchar', { name: 'DOMAIN', nullable: true, length: 250 })
  domain: string | null;
}
