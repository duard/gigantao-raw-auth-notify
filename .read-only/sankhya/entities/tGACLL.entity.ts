import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TapamoEntity } from './tAPAMO.entity';
import { TgacltEntity } from './tGACLT.entity';
import { TgaclpEntity } from './tGACLP.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgframEntity } from './tGFRAM.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TgaclrEntity } from './tGACLR.entity';
import { TprlccqEntity } from './tPRLCCQ.entity';

@Index('PK_TGACLL', ['nucll'], { unique: true })
@Index('TGACLL_I01', ['codprod', 'nunota', 'nucll'], {})
@Index('TGACLL_I02', ['nuram'], {})
@Entity('TGACLL', { schema: 'SANKHYA' })
export class TgacllEntity {
  @Column('int', { primary: true, name: 'NUCLL' })
  nucll: number;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('datetime', { name: 'DHANALISE', nullable: true })
  dhanalise: Date | null;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('float', { name: 'PESOBRUTO', nullable: true, precision: 53 })
  pesobruto: number | null;

  @Column('float', { name: 'TARA', nullable: true, precision: 53 })
  tara: number | null;

  @Column('int', { name: 'NOTAROMANEIO', nullable: true })
  notaromaneio: number | null;

  @Column('char', { name: 'STATUS', length: 1, default: () => "'A'" })
  status: string;

  @Column('char', { name: 'APROVADO', length: 1, default: () => "'N'" })
  aprovado: string;

  @Column('smallint', { name: 'SEQUENCIA', default: () => '(1)' })
  sequencia: number;

  @Column('char', { name: 'IDAMOSTRA', nullable: true, length: 50 })
  idamostra: string | null;

  @Column('int', { name: 'NUAMOSTRA', nullable: true })
  nuamostra: number | null;

  @Column('datetime', { name: 'DHRECAMOSTRA', nullable: true })
  dhrecamostra: Date | null;

  @Column('datetime', { name: 'DHCONCTESTE', nullable: true })
  dhconcteste: Date | null;

  @Column('float', { name: 'DURACAOTESTE', nullable: true, precision: 53 })
  duracaoteste: number | null;

  @Column('char', { name: 'BENEFICIADO', length: 1, default: () => "'N'" })
  beneficiado: string;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', { name: 'TIPO', length: 2, default: () => "'L'" })
  tipo: string;

  @Column('int', { name: 'NURAM', nullable: true })
  nuram: number | null;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('varchar', { name: 'TRANSGENIA', nullable: true, length: 1 })
  transgenia: string | null;

  @Column('int', { name: 'NUMPESAGEM', nullable: true })
  numpesagem: number | null;

  @Column('int', { name: 'NUMCONTRATO', nullable: true })
  numcontrato: number | null;

  @Column('int', { name: 'CODPORT', nullable: true })
  codport: number | null;

  @Column('varchar', { name: 'MODULO', nullable: true, length: 1 })
  modulo: string | null;

  @Column('varchar', { name: 'MOTIVOREPROV', nullable: true, length: 100 })
  motivoreprov: string | null;

  @Column('int', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'NUMNOTATRANS', nullable: true })
  numnotatrans: number | null;

  @Column('int', { name: 'CODVEIC', nullable: true })
  codveic: number | null;

  @OneToMany(() => TapamoEntity, (tapamoEntity) => tapamoEntity.nucll)
  tapamos: TapamoEntity[];

  @ManyToOne(() => TgacltEntity, (tgacltEntity) => tgacltEntity.tgaclls)
  @JoinColumn([{ name: 'CODCLT', referencedColumnName: 'codclt' }])
  codclt: TgacltEntity;

  @ManyToOne(() => TgaclpEntity, (tgaclpEntity) => tgaclpEntity.tgaclls)
  @JoinColumn([{ name: 'NULAUDOPAI', referencedColumnName: 'nulaudopai' }])
  nulaudopai: TgaclpEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgaclls)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgframEntity, (tgframEntity) => tgframEntity.tgaclls)
  @JoinColumn([{ name: 'NURAM', referencedColumnName: 'nuram' }])
  nuram2: TgframEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tgaclls)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj: TcsprjEntity;

  @OneToMany(() => TgaclrEntity, (tgaclrEntity) => tgaclrEntity.nucll2)
  tgaclrs: TgaclrEntity[];

  @OneToMany(() => TprlccqEntity, (tprlccqEntity) => tprlccqEntity.nucll2)
  tprlccqs: TprlccqEntity[];
}
