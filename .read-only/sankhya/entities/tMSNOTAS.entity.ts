import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TmsnotasiteEntity } from './tMSNOTASITE.entity';

@Index('PK_TMSNOTAS', ['nrounico'], { unique: true })
@Entity('TMSNOTAS', { schema: 'SANKHYA' })
export class TmsnotasEntity {
  @Column('int', { primary: true, name: 'NROUNICO' })
  nrounico: number;

  @Column('varchar', { name: 'SERIE', nullable: true, length: 100 })
  serie: string | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('int', { name: 'CODMOD', nullable: true })
  codmod: number | null;

  @Column('int', { name: 'NUMNOTA', nullable: true })
  numnota: number | null;

  @Column('datetime', { name: 'DHEMIS', nullable: true })
  dhemis: Date | null;

  @Column('float', { name: 'VLRNOTA', nullable: true, precision: 53 })
  vlrnota: number | null;

  @Column('float', { name: 'BASEICMS', nullable: true, precision: 53 })
  baseicms: number | null;

  @Column('float', { name: 'VLRICMS', nullable: true, precision: 53 })
  vlricms: number | null;

  @Column('float', { name: 'BASEST', nullable: true, precision: 53 })
  basest: number | null;

  @Column('float', { name: 'VLRST', nullable: true, precision: 53 })
  vlrst: number | null;

  @Column('float', { name: 'VLRTOTPROD', nullable: true, precision: 53 })
  vlrtotprod: number | null;

  @Column('int', { name: 'CFOP', nullable: true })
  cfop: number | null;

  @Column('float', { name: 'PESOLIQ', nullable: true, precision: 53 })
  pesoliq: number | null;

  @Column('float', { name: 'PESOTOT', nullable: true, precision: 53 })
  pesotot: number | null;

  @Column('varchar', { name: 'CHAVENFE', nullable: true, length: 100 })
  chavenfe: string | null;

  @Column('varchar', { name: 'PAGADORFRETE', nullable: true, length: 10 })
  pagadorfrete: string | null;

  @Column('int', { name: 'QTDVOL', nullable: true })
  qtdvol: number | null;

  @Column('int', { name: 'NUORDEM', nullable: true })
  nuordem: number | null;

  @Column('varchar', { name: 'ORIGEM', nullable: true, length: 10 })
  origem: string | null;

  @Column('int', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'ORDEMCARGA', nullable: true })
  ordemcarga: number | null;

  @Column('int', { name: 'NUPED', nullable: true })
  nuped: number | null;

  @Column('int', { name: 'SEQROTEIRO', nullable: true })
  seqroteiro: number | null;

  @Column('int', { name: 'NUNOTACTE', nullable: true })
  nunotacte: number | null;

  @Column('float', { name: 'QTDM3', nullable: true, precision: 53 })
  qtdm3: number | null;

  @Column('int', { name: 'NROCARGA', nullable: true })
  nrocarga: number | null;

  @Column('datetime', { name: 'DTPREVENT', nullable: true })
  dtprevent: Date | null;

  @Column('int', { name: 'SEQENTREGA', nullable: true })
  seqentrega: number | null;

  @Column('int', { name: 'CODPARCENT', nullable: true })
  codparcent: number | null;

  @Column('int', { name: 'CODPARCCOL', nullable: true })
  codparccol: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tmsnotas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tmsnotas)
  @JoinColumn([{ name: 'CODPARCCONSIG', referencedColumnName: 'codparc' }])
  codparcconsig: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tmsnotas2)
  @JoinColumn([{ name: 'CODPARCREM', referencedColumnName: 'codparc' }])
  codparcrem: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tmsnotas3)
  @JoinColumn([{ name: 'CODPARCDEST', referencedColumnName: 'codparc' }])
  codparcdest: TgfparEntity;

  @OneToMany(
    () => TmsnotasiteEntity,
    (tmsnotasiteEntity) => tmsnotasiteEntity.nrounico2,
  )
  tmsnotasites: TmsnotasiteEntity[];
}
