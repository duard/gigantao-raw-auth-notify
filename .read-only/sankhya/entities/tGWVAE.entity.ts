import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGWVAE', ['nutarefa', 'sequencia'], { unique: true })
@Entity('TGWVAE', { schema: 'SANKHYA' })
export class TgwvaeEntity {
  @Column('int', { primary: true, name: 'NUTAREFA' })
  nutarefa: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'CODCONCATENADO', nullable: true, length: 44 })
  codconcatenado: string | null;
}
