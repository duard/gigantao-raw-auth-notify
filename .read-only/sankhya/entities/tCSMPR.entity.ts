import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsmodEntity } from './tCSMOD.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgflocEntity } from './tGFLOC.entity';

@Index('PK_TCSMPR', ['codmetod', 'nummodelo', 'sequencia'], { unique: true })
@Entity('TCSMPR', { schema: 'SANKHYA' })
export class TcsmprEntity {
  @Column('smallint', { primary: true, name: 'CODMETOD' })
  codmetod: number;

  @Column('int', { primary: true, name: 'NUMMODELO' })
  nummodelo: number;

  @Column('float', { name: 'QTDNEG', precision: 53, default: () => '(0)' })
  qtdneg: number;

  @Column('varchar', { name: 'CONTROLE', length: 11, default: () => "' '" })
  controle: string;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(1)',
  })
  sequencia: number;

  @ManyToOne(() => TcsmodEntity, (tcsmodEntity) => tcsmodEntity.tcsmprs)
  @JoinColumn([
    { name: 'CODMETOD', referencedColumnName: 'codmetod' },
    { name: 'NUMMODELO', referencedColumnName: 'nummodelo' },
  ])
  tcsmod: TcsmodEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcsmprs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tcsmprs)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tcsmprs)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal: TgflocEntity;
}
