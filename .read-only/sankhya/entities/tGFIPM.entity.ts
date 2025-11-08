import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiterEntity } from './tSITER.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFIPM', ['codprod', 'codterminal'], { unique: true })
@Entity('TGFIPM', { schema: 'SANKHYA' })
export class TgfipmEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODTERMINAL' })
  codterminal: number;

  @Column('varchar', { name: 'IMPNOTA', length: 255 })
  impnota: string;

  @Column('smallint', { name: 'CODMODNF' })
  codmodnf: number;

  @Column('int', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiterEntity, (tsiterEntity) => tsiterEntity.tgfipms, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODTERMINAL', referencedColumnName: 'codterminal' }])
  codterminal2: TsiterEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfipms, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
