import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcscxtEntity } from './tCSCXT.entity';
import { TgfccoEntity } from './tGFCCO.entity';
import { TgfconfcredEntity } from './tGFCONFCRED.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfmonEntity } from './tGFMON.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgwarsEntity } from './tGWARS.entity';
import { TsiarfEntity } from './tSIARF.entity';
import { TsictaEntity } from './tSICTA.entity';
import { TsirfaEntity } from './tSIRFA.entity';
import { TssitpEntity } from './tSSITP.entity';

@Index('PK_TSIRFE', ['nurfe'], { unique: true })
@Index('TSIRFE_I01', ['nurfedependente'], {})
@Entity('TSIRFE', { schema: 'SANKHYA' })
export class TsirfeEntity {
  @Column('smallint', { primary: true, name: 'NURFE' })
  nurfe: number;

  @Column('varchar', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('numeric', {
    name: 'NUINSTANCIA',
    nullable: true,
    precision: 10,
    scale: 0,
  })
  nuinstancia: number | null;

  @Column('char', { name: 'TIPO', nullable: true, length: 2 })
  tipo: string | null;

  @Column('text', { name: 'CONFIG', nullable: true })
  config: string | null;

  @Column('varchar', { name: 'FORMATO', nullable: true, length: 1 })
  formato: string | null;

  @Column('smallint', { name: 'NURFEDEPENDENTE', nullable: true })
  nurfedependente: number | null;

  @Column('varchar', {
    name: 'EXPFILTROINSTANCIA',
    nullable: true,
    length: 3000,
  })
  expfiltroinstancia: string | null;

  @Column('varchar', { name: 'IDTELA', nullable: true, length: 500 })
  idtela: string | null;

  @Column('varchar', { name: 'CATEGORIA', nullable: true, length: 50 })
  categoria: string | null;

  @Column('varchar', { name: 'DSNAME', nullable: true, length: 200 })
  dsname: string | null;

  @Column('varchar', { name: 'PREFIXOANEXO', nullable: true, length: 30 })
  prefixoanexo: string | null;

  @Column('text', { name: 'NOMEIMPRESSORA', nullable: true })
  nomeimpressora: string | null;

  @OneToMany(() => TcscxtEntity, (tcscxtEntity) => tcscxtEntity.nurfe)
  tcscxts: TcscxtEntity[];

  @OneToMany(() => TcscxtEntity, (tcscxtEntity) => tcscxtEntity.nurfefr)
  tcscxts2: TcscxtEntity[];

  @OneToMany(() => TgfccoEntity, (tgfccoEntity) => tgfccoEntity.nurfeetiq)
  tgfccos: TgfccoEntity[];

  @OneToMany(
    () => TgfconfcredEntity,
    (tgfconfcredEntity) => tgfconfcredEntity.modeloImp,
  )
  tgfconfcreds: TgfconfcredEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.nurfecartacorr)
  tgfemps: TgfempEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.nurfe)
  tgfemps2: TgfempEntity[];

  @OneToMany(
    () => TgfempEntity,
    (tgfempEntity) => tgfempEntity.nurfecartacorrcte,
  )
  tgfemps3: TgfempEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.modetqvol)
  tgfemps4: TgfempEntity[];

  @OneToMany(() => TgfmonEntity, (tgfmonEntity) => tgfmonEntity.nurfe)
  tgfmons: TgfmonEntity[];

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.modetiqsepwms)
  tgfpros: TgfproEntity[];

  @OneToMany(() => TgwarsEntity, (tgwarsEntity) => tgwarsEntity.modetqvol)
  tgwars: TgwarsEntity[];

  @OneToMany(() => TsiarfEntity, (tsiarfEntity) => tsiarfEntity.nurfe2)
  tsiarves: TsiarfEntity[];

  @OneToMany(() => TsictaEntity, (tsictaEntity) => tsictaEntity.nurfemodcheqg)
  tsictas: TsictaEntity[];

  @OneToMany(() => TsictaEntity, (tsictaEntity) => tsictaEntity.nurfemodboleto)
  tsictas2: TsictaEntity[];

  @OneToMany(() => TsirfaEntity, (tsirfaEntity) => tsirfaEntity.nurfe2)
  tsirfas: TsirfaEntity[];

  @ManyToOne(() => TsirfeEntity, (tsirfeEntity) => tsirfeEntity.tsirfes)
  @JoinColumn([{ name: 'NURFEDEPENDENTE', referencedColumnName: 'nurfe' }])
  nurfedependente2: TsirfeEntity;

  @OneToMany(
    () => TsirfeEntity,
    (tsirfeEntity) => tsirfeEntity.nurfedependente2,
  )
  tsirfes: TsirfeEntity[];

  @OneToMany(() => TssitpEntity, (tssitpEntity) => tssitpEntity.nurfe)
  tssitps: TssitpEntity[];
}
