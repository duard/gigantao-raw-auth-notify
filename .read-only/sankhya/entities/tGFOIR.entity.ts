import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFOIR', ['codemp', 'dtref', 'tipapuracao', 'sequencia'], {
  unique: true,
})
@Entity('TGFOIR', { schema: 'SANKHYA' })
export class TgfoirEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { primary: true, name: 'TIPAPURACAO', length: 1 })
  tipapuracao: string;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODOBR' })
  codobr: number;

  @Column('float', { name: 'VALOR', precision: 53 })
  valor: number;

  @Column('datetime', { name: 'DTVCTO', nullable: true })
  dtvcto: Date | null;

  @Column('char', { name: 'CODREC', nullable: true, length: 30 })
  codrec: string | null;

  @Column('varchar', { name: 'NUMPROCESSO', nullable: true, length: 60 })
  numprocesso: string | null;

  @Column('smallint', { name: 'ORIGPROCESSO', nullable: true })
  origprocesso: number | null;

  @Column('char', { name: 'DESCRPROCESSO', nullable: true, length: 255 })
  descrprocesso: string | null;

  @Column('char', { name: 'DESCRCOMPL', nullable: true, length: 255 })
  descrcompl: string | null;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('smallint', { name: 'CODUF', default: () => '(0)' })
  coduf: number;

  @Column('char', { name: 'SUBAPURACAO', length: 1, default: () => "'N'" })
  subapuracao: string;

  @Column('char', { name: 'INDSUBAPURACAO', nullable: true, length: 1 })
  indsubapuracao: string | null;

  @Column('varchar', { name: 'CODOBRSEFPE', nullable: true, length: 3 })
  codobrsefpe: string | null;

  @Column('varchar', { name: 'CODOBRSEFII', nullable: true, length: 3 })
  codobrsefii: string | null;

  @Column('varchar', { name: 'CODRECDIME', nullable: true, length: 20 })
  codrecdime: string | null;

  @Column('varchar', { name: 'CODCLSVENCDIME', nullable: true, length: 20 })
  codclsvencdime: string | null;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfoirs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfoirs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
