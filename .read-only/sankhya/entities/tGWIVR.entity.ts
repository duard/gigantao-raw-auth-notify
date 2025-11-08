import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwendEntity } from './tGWEND.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgflocEntity } from './tGFLOC.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgwivtEntity } from './tGWIVT.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgwrplEntity } from './tGWRPL.entity';

@Index('PK_TGWIVR', ['nuivt', 'sequencia'], { unique: true })
@Entity('TGWIVR', { schema: 'SANKHYA' })
export class TgwivrEntity {
  @Column('varchar', { name: 'CONTROLE', length: 11, default: () => "' '" })
  controle: string;

  @Column('datetime', { name: 'DHCONTAGEM' })
  dhcontagem: Date;

  @Column('float', { name: 'QTDESTCONTADA', precision: 53 })
  qtdestcontada: number;

  @Column('float', { name: 'QTDESTLOGICA', precision: 53 })
  qtdestlogica: number;

  @Column('int', { name: 'NUAJUSTE', nullable: true })
  nuajuste: number | null;

  @Column('varchar', { name: 'ATIVA', length: 1, default: () => "'S'" })
  ativa: string;

  @Column('int', { primary: true, name: 'NUIVT' })
  nuivt: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('decimal', {
    name: 'QTDESTCONTADAPAD',
    precision: 13,
    scale: 4,
    default: () => '(0)',
  })
  qtdestcontadapad: number;

  @Column('decimal', {
    name: 'QTDESTLOGICAPAD',
    precision: 13,
    scale: 4,
    default: () => '(0)',
  })
  qtdestlogicapad: number;

  @Column('datetime', { name: 'DTVAL', nullable: true })
  dtval: Date | null;

  @Column('datetime', { name: 'DTREC', nullable: true })
  dtrec: Date | null;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgwivrs)
  @JoinColumn([{ name: 'CODEND', referencedColumnName: 'codend' }])
  codend: TgwendEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwivrs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgwivrs)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal: TgflocEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgwivrs)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgwivrs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgwivrs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(() => TgwivtEntity, (tgwivtEntity) => tgwivtEntity.tgwivrs)
  @JoinColumn([{ name: 'NUIVT', referencedColumnName: 'nuivt' }])
  nuivt2: TgwivtEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgwivrs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TgwrplEntity, (tgwrplEntity) => tgwrplEntity.tgwivrs)
  @JoinColumn([{ name: 'IDPALETE', referencedColumnName: 'idpalete' }])
  idpalete: TgwrplEntity;
}
