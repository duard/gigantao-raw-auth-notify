import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiterEntity } from './tSITER.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TSITDA', ['codterminal', 'tecla'], { unique: true })
@Entity('TSITDA', { schema: 'SANKHYA' })
export class TsitdaEntity {
  @Column('int', { primary: true, name: 'CODTERMINAL' })
  codterminal: number;

  @Column('varchar', { primary: true, name: 'TECLA', length: 1 })
  tecla: string;

  @Column('int', { name: 'ROTINA' })
  rotina: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiterEntity, (tsiterEntity) => tsiterEntity.tsitdas)
  @JoinColumn([{ name: 'CODTERMINAL', referencedColumnName: 'codterminal' }])
  codterminal2: TsiterEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsitdas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tsitdas)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;
}
