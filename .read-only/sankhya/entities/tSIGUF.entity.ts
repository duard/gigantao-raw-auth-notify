import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TsiufsEntity } from './tSIUFS.entity';

@Index('PK_TSIGUF', ['codguf'], { unique: true })
@Entity('TSIGUF', { schema: 'SANKHYA' })
export class TsigufEntity {
  @Column('smallint', { primary: true, name: 'CODGUF' })
  codguf: number;

  @Column('varchar', { name: 'CODSTGNRE', nullable: true, length: 10 })
  codstgnre: string | null;

  @Column('int', { name: 'CODDETGNRE', nullable: true })
  coddetgnre: number | null;

  @Column('int', { name: 'CODPRODGNRE', nullable: true })
  codprodgnre: number | null;

  @Column('varchar', { name: 'PROTOCOLOCONVENIO', nullable: true, length: 30 })
  protocoloconvenio: string | null;

  @Column('int', { name: 'CODCAMPOEXTRAGNRE', nullable: true })
  codcampoextragnre: number | null;

  @Column('varchar', { name: 'VALORCAMPOEXTRA', nullable: true, length: 1 })
  valorcampoextra: string | null;

  @Column('varchar', { name: 'VERSAOGNRE', nullable: true, length: 3 })
  versaognre: string | null;

  @Column('varchar', { name: 'GERINFCAMPADICGNRE', nullable: true, length: 1 })
  gerinfcampadicgnre: string | null;

  @Column('int', { name: 'CODFCPSTGNRE', nullable: true })
  codfcpstgnre: number | null;

  @Column('smallint', { name: 'TIPODOC', nullable: true })
  tipodoc: number | null;

  @Column('char', { name: 'TIPOINFO', nullable: true, length: 1 })
  tipoinfo: string | null;

  @Column('int', { name: 'CODCAMPOEXTRAGNRE2', nullable: true })
  codcampoextragnre2: number | null;

  @Column('varchar', { name: 'CODRECDIME', nullable: true, length: 20 })
  codrecdime: string | null;

  @Column('varchar', { name: 'CODCLSVENCDIME', nullable: true, length: 20 })
  codclsvencdime: string | null;

  @Column('varchar', { name: 'CODRECDIMEFCPST', nullable: true, length: 20 })
  codrecdimefcpst: string | null;

  @Column('varchar', {
    name: 'CODCLSVENCDIMEFCPST',
    nullable: true,
    length: 20,
  })
  codclsvencdimefcpst: string | null;

  @Column('text', { name: 'VLRPERSGNRE', nullable: true })
  vlrpersgnre: string | null;

  @Column('char', { name: 'TIPAPURACAO', nullable: true, length: 1 })
  tipapuracao: string | null;

  @Column('smallint', { name: 'CODOBR', nullable: true })
  codobr: number | null;

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.codguf)
  tgfcabs: TgfcabEntity[];

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tsigufs)
  @JoinColumn([{ name: 'CODUF', referencedColumnName: 'coduf' }])
  coduf: TsiufsEntity;
}
