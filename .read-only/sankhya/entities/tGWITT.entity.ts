import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TgwtarEntity } from './tGWTAR.entity';
import { TgwarsEntity } from './tGWARS.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgwrplEntity } from './tGWRPL.entity';
import { TgwareEntity } from './tGWARE.entity';
import { TgwendEntity } from './tGWEND.entity';
import { TgweqpEntity } from './tGWEQP.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgflocEntity } from './tGFLOC.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgwivrserEntity } from './tGWIVRSER.entity';
import { TgwlboEntity } from './tGWLBO.entity';
import { TgwtdpEntity } from './tGWTDP.entity';
import { TgwtecEntity } from './tGWTEC.entity';
import { TgwtranEntity } from './tGWTRAN.entity';

@Index('PK_TGWITT', ['nutarefa', 'sequencia'], { unique: true })
@Index('TGWITT_I01', ['codendorigem'], {})
@Index('TGWITT_I04', ['codprod', 'tiptarefa', 'situacao'], {})
@Index('TGWITT_I05', ['codusuexec', 'situacao'], {})
@Index('TGWITT_I06', ['idmapa'], {})
@Entity('TGWITT', { schema: 'SANKHYA' })
export class TgwittEntity {
  @Column('int', { primary: true, name: 'NUTAREFA' })
  nutarefa: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('int', { name: 'CODENDORIGEM' })
  codendorigem: number;

  @Column('float', { name: 'QTDORIG', nullable: true, precision: 53 })
  qtdorig: number | null;

  @Column('float', { name: 'QTDDEST', nullable: true, precision: 53 })
  qtddest: number | null;

  @Column('char', {
    name: 'SITUACAO',
    nullable: true,
    length: 1,
    default: () => "'A'",
  })
  situacao: string | null;

  @Column('smallint', { name: 'CODUSUEXEC', nullable: true })
  codusuexec: number | null;

  @Column('datetime', { name: 'DHINICIALEXEC', nullable: true })
  dhinicialexec: Date | null;

  @Column('datetime', { name: 'DHFINALEXEC', nullable: true })
  dhfinalexec: Date | null;

  @Column('char', { name: 'CONTROLE', length: 11, default: () => "' '" })
  controle: string;

  @Column('char', { name: 'TIPTAREFA', length: 1, default: () => "'A'" })
  tiptarefa: string;

  @Column('int', { name: 'NUREL', nullable: true })
  nurel: number | null;

  @Column('float', { name: 'QTDVOLCOMPRA', nullable: true, precision: 53 })
  qtdvolcompra: number | null;

  @Column('char', { name: 'CODVOLCOMPRA', nullable: true, length: 2 })
  codvolcompra: string | null;

  @Column('varchar', { name: 'CODBARRAVOLCOMPRA', nullable: true, length: 25 })
  codbarravolcompra: string | null;

  @Column('smallint', { name: 'FASETAREFA', default: () => '(1)' })
  fasetarefa: number;

  @Column('float', { name: 'QTDVOLPAD', nullable: true, precision: 53 })
  qtdvolpad: number | null;

  @Column('int', { name: 'PRIORIDADE', nullable: true })
  prioridade: number | null;

  @Column('char', { name: 'OCORRENCIA', length: 1, default: () => "'N'" })
  ocorrencia: string;

  @Column('float', { name: 'PESOBRUTO', nullable: true, precision: 53 })
  pesobruto: number | null;

  @Column('char', { name: 'TRIADO', nullable: true, length: 1 })
  triado: string | null;

  @Column('int', { name: 'IDMAPA', nullable: true })
  idmapa: number | null;

  @Column('datetime', { name: 'DHIMPMAPA', nullable: true })
  dhimpmapa: Date | null;

  @Column('datetime', { name: 'DHINICIOMAPA', nullable: true })
  dhiniciomapa: Date | null;

  @Column('datetime', { name: 'DHFIMMAPA', nullable: true })
  dhfimmapa: Date | null;

  @ManyToOne(() => TgwtarEntity, (tgwtarEntity) => tgwtarEntity.tgwitts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUTAREFA', referencedColumnName: 'nutarefa' }])
  nutarefa2: TgwtarEntity;

  @ManyToOne(() => TgwarsEntity, (tgwarsEntity) => tgwarsEntity.tgwitts)
  @JoinColumn([{ name: 'CODAREASEP', referencedColumnName: 'codareasep' }])
  codareasep: TgwarsEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgwitts)
  @JoinColumn([{ name: 'CODVOLDEST', referencedColumnName: 'codvol' }])
  codvoldest: TgfvolEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgwitts)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgwrplEntity, (tgwrplEntity) => tgwrplEntity.tgwitts)
  @JoinColumn([{ name: 'IDPALETE', referencedColumnName: 'idpalete' }])
  idpalete: TgwrplEntity;

  @ManyToOne(() => TgwareEntity, (tgwareEntity) => tgwareEntity.tgwitts)
  @JoinColumn([
    { name: 'CODARMAZENAGEM', referencedColumnName: 'codarmazenagem' },
  ])
  codarmazenagem: TgwareEntity;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgwitts)
  @JoinColumn([{ name: 'CODENDDESTINO', referencedColumnName: 'codend' }])
  codenddestino: TgwendEntity;

  @ManyToOne(() => TgweqpEntity, (tgweqpEntity) => tgweqpEntity.tgwitts)
  @JoinColumn([{ name: 'CODEQUIP', referencedColumnName: 'codequip' }])
  codequip: TgweqpEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgwitts)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgwitts2)
  @JoinColumn([{ name: 'CODVOLORIG', referencedColumnName: 'codvol' }])
  codvolorig: TgfvolEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgwitts)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal: TgflocEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwitts)
  @JoinColumn([{ name: 'CODUSUEXEC', referencedColumnName: 'codusu' }])
  codusuexec2: TsiusuEntity;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgwitts2)
  @JoinColumn([{ name: 'CODENDORIGEM', referencedColumnName: 'codend' }])
  codendorigem2: TgwendEntity;

  @OneToMany(() => TgwivrserEntity, (tgwivrserEntity) => tgwivrserEntity.tgwitt)
  tgwivrsers: TgwivrserEntity[];

  @OneToOne(() => TgwlboEntity, (tgwlboEntity) => tgwlboEntity.tgwitt)
  tgwlbo: TgwlboEntity;

  @OneToMany(() => TgwtarEntity, (tgwtarEntity) => tgwtarEntity.tgwitt)
  tgwtars: TgwtarEntity[];

  @OneToMany(() => TgwtdpEntity, (tgwtdpEntity) => tgwtdpEntity.tgwitt)
  tgwtdps: TgwtdpEntity[];

  @OneToMany(() => TgwtecEntity, (tgwtecEntity) => tgwtecEntity.tgwitt)
  tgwtecs: TgwtecEntity[];

  @OneToOne(() => TgwtranEntity, (tgwtranEntity) => tgwtranEntity.tgwitt)
  tgwtran: TgwtranEntity;
}
