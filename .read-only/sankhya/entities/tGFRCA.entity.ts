import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TcsconEntity } from './tCSCON.entity';

@Index('PK_TGFRCA', ['nunota', 'numcontrato', 'dtreferencia'], { unique: true })
@Entity('TGFRCA', { schema: 'SANKHYA' })
export class TgfrcaEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('datetime', { primary: true, name: 'DTREFERENCIA' })
  dtreferencia: Date;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfrcas)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;

  @ManyToOne(() => TcsconEntity, (tcsconEntity) => tcsconEntity.tgfrcas)
  @JoinColumn([{ name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' }])
  numcontrato2: TcsconEntity;
}
