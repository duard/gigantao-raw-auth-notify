import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK__TGFTXECO__3214EC27F76D2C86', ['id'], { unique: true })
@Entity('TGFTXECONTROLST', { schema: 'SANKHYA' })
export class TgftxecontrolstEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('int', { name: 'CODREGUA' })
  codregua: number;

  @Column('int', { name: 'SEQEXEC' })
  seqexec: number;

  @Column('int', { name: 'NUFIN' })
  nufin: number;

  @Column('datetime', { name: 'DHINC', default: () => 'getdate()' })
  dhinc: Date;

  @Column('datetime', {
    name: 'DHALTER',
    nullable: true,
    default: () => 'getdate()',
  })
  dhalter: Date | null;

  @Column('int', { name: 'STATUSAPI', nullable: true })
  statusapi: number | null;

  @Column('int', { name: 'IDAPI', nullable: true })
  idapi: number | null;

  @Column('varchar', { name: 'MENSAGEM', nullable: true, length: 255 })
  mensagem: string | null;

  @Column('varchar', { name: 'DESTINATARIO', nullable: true, length: 255 })
  destinatario: string | null;

  @Column('int', { name: 'CODEVENTO', nullable: true })
  codevento: number | null;
}
