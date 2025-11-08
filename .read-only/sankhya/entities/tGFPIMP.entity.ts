import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFPIMP', ['nuimp', 'nroped'], { unique: true })
@Entity('TGFPIMP', { schema: 'SANKHYA' })
export class TgfpimpEntity {
  @Column('int', { primary: true, name: 'NUIMP' })
  nuimp: number;

  @Column('int', { primary: true, name: 'NROPED' })
  nroped: number;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('char', { name: 'STATUS', length: 1, default: () => "'N'" })
  status: string;

  @Column('text', { name: 'MSG' })
  msg: string;
}
