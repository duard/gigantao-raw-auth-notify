import { Column, Entity, Index } from 'typeorm';

@Index('PK__TGFBOLBA__DB064CB7298699D1', ['nufin'], { unique: true })
@Entity('TGFBOLBAIXA', { schema: 'SANKHYA' })
export class TgfbolbaixaEntity {
  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('text', { name: 'RESPONSEBODY', nullable: true })
  responsebody: string | null;

  @Column('datetime', { name: 'DHPROCESS', nullable: true })
  dhprocess: Date | null;

  @Column('datetime', { name: 'DHINC', default: () => 'getdate()' })
  dhinc: Date;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('int', { name: 'IDAPIBANCO', nullable: true })
  idapibanco: number | null;
}
