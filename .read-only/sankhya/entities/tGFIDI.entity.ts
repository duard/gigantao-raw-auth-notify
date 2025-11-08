import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfiadEntity } from './tGFIAD.entity';
import { TgfiiiEntity } from './tGFIII.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsiufsEntity } from './tSIUFS.entity';

@Index('PK_TGFIDI', ['nunota', 'sequencia', 'seqdi'], { unique: true })
@Entity('TGFIDI', { schema: 'SANKHYA' })
export class TgfidiEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'SEQDI' })
  seqdi: number;

  @Column('varchar', { name: 'NRODOCUMENTO', nullable: true, length: 15 })
  nrodocumento: string | null;

  @Column('datetime', { name: 'DTREGISTRO' })
  dtregistro: Date;

  @Column('varchar', { name: 'LOCDESEMBARACO', length: 60 })
  locdesembaraco: string;

  @Column('datetime', { name: 'DTDESEMBARACO' })
  dtdesembaraco: Date;

  @Column('varchar', { name: 'CODEXPORTADOR', length: 60 })
  codexportador: string;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('smallint', { name: 'DOCIMP', default: () => '(0)' })
  docimp: number;

  @Column('float', { name: 'VLRPISIMP', nullable: true, precision: 53 })
  vlrpisimp: number | null;

  @Column('float', { name: 'VLRCOFINSIMP', nullable: true, precision: 53 })
  vlrcofinsimp: number | null;

  @Column('varchar', { name: 'NUMACDRAW', nullable: true, length: 11 })
  numacdraw: string | null;

  @Column('datetime', { name: 'DTPAGPIS', nullable: true })
  dtpagpis: Date | null;

  @Column('datetime', { name: 'DTPAGCOFINS', nullable: true })
  dtpagcofins: Date | null;

  @Column('char', { name: 'VIATRANSP', nullable: true, length: 2 })
  viatransp: string | null;

  @Column('char', { name: 'TIPPROCIMP', nullable: true, length: 1 })
  tipprocimp: string | null;

  @Column('varchar', { name: 'CNPJADQUIRENTE', nullable: true, length: 14 })
  cnpjadquirente: string | null;

  @Column('varchar', { name: 'UFADQUIRENTE', nullable: true, length: 2 })
  ufadquirente: string | null;

  @Column('float', { name: 'VLRAFRMM', nullable: true, precision: 53 })
  vlrafrmm: number | null;

  @OneToMany(() => TgfiadEntity, (tgfiadEntity) => tgfiadEntity.tgfidi)
  tgfiads: TgfiadEntity[];

  @ManyToOne(() => TgfiiiEntity, (tgfiiiEntity) => tgfiiiEntity.tgfidis, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfiii: TgfiiiEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfidis)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tgfidis)
  @JoinColumn([{ name: 'CODUFDESEMB', referencedColumnName: 'coduf' }])
  codufdesemb: TsiufsEntity;
}
