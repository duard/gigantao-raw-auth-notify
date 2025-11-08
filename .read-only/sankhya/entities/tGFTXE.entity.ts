import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFTXE', ['codregua', 'seqexec', 'nufin'], { unique: true })
@Entity('TGFTXE', { schema: 'SANKHYA' })
export class TgftxeEntity {
  @Column('int', { primary: true, name: 'CODREGUA' })
  codregua: number;

  @Column('int', { primary: true, name: 'SEQEXEC' })
  seqexec: number;

  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('char', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('varchar', { name: 'MENSAGEM', nullable: true, length: 3103 })
  mensagem: string | null;
}
