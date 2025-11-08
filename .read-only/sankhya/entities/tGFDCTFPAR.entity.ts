import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfdctfEntity } from './tGFDCTF.entity';

@Index('PK_TGFDCTFPAR', ['codemp', 'dtref', 'codparc'], { unique: true })
@Entity('TGFDCTFPAR', { schema: 'SANKHYA' })
export class TgfdctfparEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfdctfpars)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgfdctfEntity, (tgfdctfEntity) => tgfdctfEntity.tgfdctfpars)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
  ])
  tgfdctf: TgfdctfEntity;
}
