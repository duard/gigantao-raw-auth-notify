import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgasafEntity } from './tGASAF.entity';

@Index('PK_TGARI', ['codsaf', 'codprod', 'codparc'], { unique: true })
@Index('TGARI_I01', ['codsaf', 'codprod'], {})
@Index('TGARI_I02', ['nunota', 'sequencia'], {})
@Entity('TGARI', { schema: 'SANKHYA' })
export class TgariEntity {
  @Column('int', { primary: true, name: 'CODSAF' })
  codsaf: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('smallint', { name: 'CODTIPVENDA' })
  codtipvenda: number;

  @Column('float', { name: 'QTDNEG', precision: 53 })
  qtdneg: number;

  @Column('float', { name: 'VLRUNIT', precision: 53 })
  vlrunit: number;

  @Column('float', { name: 'VLRTOT', precision: 53 })
  vlrtot: number;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('smallint', { name: 'SEQUENCIA', nullable: true })
  sequencia: number | null;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('text', { name: 'OBS', nullable: true })
  obs: string | null;

  @Column('varchar', {
    name: 'MULTPARC',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  multparc: string | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgaris)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgaris)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgaris)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgaris)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgaris)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgasafEntity, (tgasafEntity) => tgasafEntity.tgaris)
  @JoinColumn([{ name: 'CODSAF', referencedColumnName: 'codsaf' }])
  codsaf2: TgasafEntity;
}
