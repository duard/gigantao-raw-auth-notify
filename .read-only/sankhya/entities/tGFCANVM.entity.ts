import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFCANVM', ['nunota'], { unique: true })
@Entity('TGFCANVM', { schema: 'SANKHYA' })
export class TgfcanvmEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('varchar', {
    name: 'CODAUTORIZACAOVENDAMAIS',
    nullable: true,
    length: 100,
  })
  codautorizacaovendamais: string | null;

  @Column('varchar', {
    name: 'CODOPERACAOVENDAMAIS',
    nullable: true,
    length: 100,
  })
  codoperacaovendamais: string | null;
}
