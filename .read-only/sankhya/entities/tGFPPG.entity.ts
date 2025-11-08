import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsictaEntity } from './tSICTA.entity';
import { TgftitEntity } from './tGFTIT.entity';
import { TsibcoEntity } from './tSIBCO.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TcsprjEntity } from './tCSPRJ.entity';

@Index('PK_TGFPPG', ['codtipvenda', 'sequencia'], { unique: true })
@Entity('TGFPPG', { schema: 'SANKHYA' })
export class TgfppgEntity {
  @Column('smallint', { primary: true, name: 'CODTIPVENDA' })
  codtipvenda: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'PRAZO' })
  prazo: number;

  @Column('float', { name: 'PERCENTUAL', precision: 53 })
  percentual: number;

  @Column('char', { name: 'DIGVENDA', length: 1, default: () => "'0'" })
  digvenda: string;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('char', { name: 'TIPOEMP', length: 1, default: () => "'C'" })
  tipoemp: string;

  @Column('char', { name: 'TIPOPAR', length: 1, default: () => "'C'" })
  tipopar: string;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('text', { name: 'FORMULA', nullable: true })
  formula: string | null;

  @Column('char', { name: 'BAIXA', length: 1, default: () => "'N'" })
  baixa: string;

  @Column('char', { name: 'TIPRECDESP', length: 1, default: () => "'I'" })
  tiprecdesp: string;

  @Column('char', { name: 'TEXTOCENTRAL', nullable: true, length: 15 })
  textocentral: string | null;

  @Column('char', { name: 'COR', nullable: true, length: 20 })
  cor: string | null;

  @Column('datetime', { name: 'DTFIX', nullable: true })
  dtfix: Date | null;

  @Column('smallint', { name: 'BASEPRAZO', default: () => '(-1)' })
  baseprazo: number;

  @Column('smallint', { name: 'VENCNAOUTIL', default: () => '(0)' })
  vencnaoutil: number;

  @Column('char', { name: 'SOMAPRAZOCLIENTE', length: 1, default: () => "'N'" })
  somaprazocliente: string;

  @Column('char', { name: 'PARCEXCLUSIVAFCPST', nullable: true, length: 1 })
  parcexclusivafcpst: string | null;

  @Column('varchar', { name: 'TIPOFIN', nullable: true, length: 1 })
  tipofin: string | null;

  @Column('char', { name: 'USARDTENTSAIGNRE', nullable: true, length: 1 })
  usardtentsaignre: string | null;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tgfppgs)
  @JoinColumn([{ name: 'CODCTABCOINT', referencedColumnName: 'codctabcoint' }])
  codctabcoint: TsictaEntity;

  @ManyToOne(() => TgftitEntity, (tgftitEntity) => tgftitEntity.tgfppgs)
  @JoinColumn([{ name: 'CODTIPTITPAD', referencedColumnName: 'codtiptit' }])
  codtiptitpad: TgftitEntity;

  @ManyToOne(() => TsibcoEntity, (tsibcoEntity) => tsibcoEntity.tgfppgs)
  @JoinColumn([{ name: 'CODBCOPAD', referencedColumnName: 'codbco' }])
  codbcopad: TsibcoEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tgfppgs)
  @JoinColumn([{ name: 'CODNATPAD', referencedColumnName: 'codnat' }])
  codnatpad: TgfnatEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tgfppgs)
  @JoinColumn([{ name: 'CODCENCUSPAD', referencedColumnName: 'codcencus' }])
  codcencuspad: TsicusEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tgfppgs)
  @JoinColumn([{ name: 'CODPROJPAD', referencedColumnName: 'codproj' }])
  codprojpad: TcsprjEntity;
}
