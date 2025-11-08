import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFSEQMA', ['codprod', 'referencia'], { unique: true })
@Entity('TGFSEQMA', { schema: 'SANKHYA' })
export class TgfseqmaEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('int', { name: 'SEQUENCIA', default: () => '(0)' })
  sequencia: number;
}
