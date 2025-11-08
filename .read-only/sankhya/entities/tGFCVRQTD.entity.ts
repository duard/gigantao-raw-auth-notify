import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFCVRQTD', ['nunotacvr'], { unique: true })
@Entity('TGFCVRQTD', { schema: 'SANKHYA' })
export class TgfcvrqtdEntity {
  @Column('int', { primary: true, name: 'NUNOTACVR' })
  nunotacvr: number;

  @Column('int', { name: 'NUNOTA' })
  nunota: number;

  @Column('datetime', { name: 'DTNEG' })
  dtneg: Date;
}
