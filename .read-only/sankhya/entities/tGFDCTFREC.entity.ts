import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfdctfEntity } from './tGFDCTF.entity';
import { TgfrdarfEntity } from './tGFRDARF.entity';

@Index('PK_TGFDCTFREC', ['codemp', 'dtref', 'codreceita'], { unique: true })
@Entity('TGFDCTFREC', { schema: 'SANKHYA' })
export class TgfdctfrecEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', { primary: true, name: 'CODRECEITA', length: 10 })
  codreceita: string;

  @ManyToOne(() => TgfdctfEntity, (tgfdctfEntity) => tgfdctfEntity.tgfdctfrecs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
  ])
  tgfdctf: TgfdctfEntity;

  @ManyToOne(
    () => TgfrdarfEntity,
    (tgfrdarfEntity) => tgfrdarfEntity.tgfdctfrecs,
  )
  @JoinColumn([{ name: 'CODRECEITA', referencedColumnName: 'codreceita' }])
  codreceita2: TgfrdarfEntity;
}
