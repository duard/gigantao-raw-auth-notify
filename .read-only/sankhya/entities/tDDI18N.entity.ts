import { Column, Entity, Index } from 'typeorm';

@Index('PK_TDDI18N', ['chave', 'locale'], { unique: true })
@Entity('TDDI18N', { schema: 'SANKHYA' })
export class Tddi18NEntity {
  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { primary: true, name: 'LOCALE', length: 8 })
  locale: string;

  @Column('varchar', { name: 'TEXTO', length: 255 })
  texto: string;

  @Column('char', { name: 'CONTROLE', nullable: true, length: 1 })
  controle: string | null;

  @Column('varchar', { name: 'DOMAIN', nullable: true, length: 250 })
  domain: string | null;
}
