import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TddinsEntity } from './tDDINS.entity';
import { TgfmonEntity } from './tGFMON.entity';
import { TsidsbEntity } from './tSIDSB.entity';
import { TsiremEntity } from './tSIREM.entity';
import { TsiretEntity } from './tSIRET.entity';
import { TsirfeEntity } from './tSIRFE.entity';
import { TsspacEntity } from './tSSPAC.entity';

@Index('PK_TSSITP', ['nupac', 'sequencia'], { unique: true })
@Entity('TSSITP', { schema: 'SANKHYA' })
export class TssitpEntity {
  @Column('int', { primary: true, name: 'NUPAC' })
  nupac: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'D'" })
  tipo: string;

  @Column('numeric', {
    name: 'NUINSTANCIA',
    nullable: true,
    precision: 18,
    scale: 0,
  })
  nuinstancia: number | null;

  @Column('text', { name: 'CADASTROPADRAO', nullable: true })
  cadastropadrao: string | null;

  @Column('datetime', { name: 'DTALTERACAO', nullable: true })
  dtalteracao: Date | null;

  @Column('varchar', { name: 'NOMEITEM', nullable: true, length: 100 })
  nomeitem: string | null;

  @Column('varchar', { name: 'NOMEARQUIVO', nullable: true, length: 1 })
  nomearquivo: string | null;

  @Column('image', { name: 'ARQUIVO', nullable: true })
  arquivo: Buffer | null;

  @Column('varchar', { name: 'ORDEMPK', nullable: true, length: 3103 })
  ordempk: string | null;

  @Column('text', { name: 'SCRIPT_BD', nullable: true })
  scriptBd: string | null;

  @Column('smallint', { name: 'SEQITP', nullable: true })
  seqitp: number | null;

  @Column('char', { name: 'STOPONERROR', length: 1, default: () => "'S'" })
  stoponerror: string;

  @Column('char', { name: 'TIPO_BD', length: 1, default: () => "'A'" })
  tipoBd: string;

  @Column('numeric', { name: 'CODLIC', nullable: true, precision: 9, scale: 0 })
  codlic: number | null;

  @ManyToOne(() => TsiremEntity, (tsiremEntity) => tsiremEntity.tssitps)
  @JoinColumn([
    { name: 'MODULO', referencedColumnName: 'modulo' },
    { name: 'CODIGO', referencedColumnName: 'codigo' },
  ])
  tsirem: TsiremEntity;

  @ManyToOne(() => TsiretEntity, (tsiretEntity) => tsiretEntity.tssitps)
  @JoinColumn([{ name: 'CODRET', referencedColumnName: 'codigo' }])
  codret: TsiretEntity;

  @ManyToOne(() => TsirfeEntity, (tsirfeEntity) => tsirfeEntity.tssitps)
  @JoinColumn([{ name: 'NURFE', referencedColumnName: 'nurfe' }])
  nurfe: TsirfeEntity;

  @ManyToOne(() => TgfmonEntity, (tgfmonEntity) => tgfmonEntity.tssitps)
  @JoinColumn([{ name: 'CODMODNF', referencedColumnName: 'codmodnf' }])
  codmodnf: TgfmonEntity;

  @ManyToOne(() => TddinsEntity, (tddinsEntity) => tddinsEntity.tssitps)
  @JoinColumn([{ name: 'NUINSTANCIACAD', referencedColumnName: 'nuinstancia' }])
  nuinstanciacad: TddinsEntity;

  @ManyToOne(() => TsspacEntity, (tsspacEntity) => tsspacEntity.tssitps)
  @JoinColumn([{ name: 'NUPAC', referencedColumnName: 'nupac' }])
  nupac2: TsspacEntity;

  @ManyToOne(() => TsidsbEntity, (tsidsbEntity) => tsidsbEntity.tssitps)
  @JoinColumn([{ name: 'NUDSB', referencedColumnName: 'nudsb' }])
  nudsb: TsidsbEntity;
}
