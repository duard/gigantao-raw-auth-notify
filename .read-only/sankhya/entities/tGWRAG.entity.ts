import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgwendEntity } from './tGWEND.entity';

@Index('PK_TGWRAG', ['codemp', 'codprod', 'codvol', 'controle', 'codend'], {
  unique: true,
})
@Entity('TGWRAG', { schema: 'SANKHYA' })
export class TgwragEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { primary: true, name: 'CODVOL', length: 2 })
  codvol: string;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLE',
    length: 30,
    default: () => "' '",
  })
  controle: string;

  @Column('int', { primary: true, name: 'CODEND' })
  codend: number;

  @Column('datetime', { name: 'DHINC', default: () => 'getdate()' })
  dhinc: Date;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tgwrags)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgwrags)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol2: TgfvolEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgwrags)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgwrags)
  @JoinColumn([{ name: 'CODEND', referencedColumnName: 'codend' }])
  codend2: TgwendEntity;
}
