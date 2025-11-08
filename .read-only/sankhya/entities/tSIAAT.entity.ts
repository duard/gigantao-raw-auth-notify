import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIAAT', ['id'], { unique: true })
@Entity('TSIAAT', { schema: 'SANKHYA' })
export class TsiaatEntity {
  @Column('smallint', { primary: true, name: 'ID' })
  id: number;

  @Column('text', { name: 'CONTEUDO', nullable: true })
  conteudo: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('varchar', { name: 'SVID', length: 64 })
  svid: string;
}
