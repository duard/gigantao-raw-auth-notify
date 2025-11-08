import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFOCE', ['nunota', 'seqoco'], { unique: true })
@Entity('TGFOCE', { schema: 'SANKHYA' })
export class TgfoceEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'SEQOCO' })
  seqoco: number;

  @Column('int', { name: 'CODPARCTRANSP' })
  codparctransp: number;

  @Column('smallint', { name: 'CODOCO' })
  codoco: number;

  @Column('datetime', { name: 'DHOCOR' })
  dhocor: Date;

  @Column('smallint', { name: 'CODOBSOCOR' })
  codobsocor: number;

  @Column('varchar', { name: 'TEXTOLIVRE', length: 70 })
  textolivre: string;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;
}
