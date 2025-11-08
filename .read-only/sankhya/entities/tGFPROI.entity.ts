import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfpromEntity } from './tGFPROM.entity';

@Index('PK_TGFPROI', ['codpromo', 'codprod'], { unique: true })
@Entity('TGFPROI', { schema: 'SANKHYA' })
export class TgfproiEntity {
  @Column('int', { primary: true, name: 'CODPROMO' })
  codpromo: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { name: 'LISEMPRESA', length: 250 })
  lisempresa: string;

  @Column('varchar', { name: 'LISLOCAL', length: 250 })
  lislocal: string;

  @Column('varchar', { name: 'LISTIPNEG', length: 250 })
  listipneg: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('float', { name: 'PERCENTUAL', precision: 53, default: () => '(0)' })
  percentual: number;

  @Column('float', { name: 'VLRDESC', precision: 53, default: () => '(0)' })
  vlrdesc: number;

  @Column('float', { name: 'PRECOPROM', precision: 53, default: () => '(0)' })
  precoprom: number;

  @Column('varchar', { name: 'TIPO', length: 1, default: () => "'P'" })
  tipo: string;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfprois)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfprois)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfpromEntity, (tgfpromEntity) => tgfpromEntity.tgfprois, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPROMO', referencedColumnName: 'codpromo' }])
  codpromo2: TgfpromEntity;
}
