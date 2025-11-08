import { Column, Entity, Index } from 'typeorm';

@Index('PK_TDDINSI18N', ['nomeinstancia', 'locale'], { unique: true })
@Entity('TDDINSI18N', { schema: 'SANKHYA' })
export class Tddinsi18NEntity {
  @Column('varchar', { primary: true, name: 'NOMEINSTANCIA', length: 30 })
  nomeinstancia: string;

  @Column('varchar', { primary: true, name: 'LOCALE', length: 8 })
  locale: string;

  @Column('varchar', { name: 'TEXTO', length: 255 })
  texto: string;

  @Column('char', { name: 'CONTROLE', nullable: true, length: 1 })
  controle: string | null;

  @Column('varchar', { name: 'DOMAIN', nullable: true, length: 250 })
  domain: string | null;
}
