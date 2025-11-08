import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfobsEntity } from './tGFOBS.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgflivEntity } from './tGFLIV.entity';

@Index(
  'PK_TGFAJD',
  ['nunota', 'origem', 'sequencia', 'codemp', 'codobspadrao', 'codajuste'],
  {
    unique: true,
  },
)
@Entity('TGFAJD', { schema: 'SANKHYA' })
export class TgfajdEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('char', {
    primary: true,
    name: 'ORIGEM',
    length: 1,
    default: () => "'E'",
  })
  origem: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', {
    primary: true,
    name: 'CODOBSPADRAO',
    default: () => '(0)',
  })
  codobspadrao: number;

  @Column('varchar', { primary: true, name: 'CODAJUSTE', length: 8 })
  codajuste: string;

  @Column('text', { name: 'COMPOBSPADRAO', nullable: true })
  compobspadrao: string | null;

  @Column('text', { name: 'COMPAJUSTE', nullable: true })
  compajuste: string | null;

  @Column('float', { name: 'BASEICMS', precision: 53, default: () => '(0)' })
  baseicms: number;

  @Column('float', { name: 'ALIQICMS', precision: 53, default: () => '(0)' })
  aliqicms: number;

  @Column('float', { name: 'VLRICMS', precision: 53, default: () => '(0)' })
  vlricms: number;

  @Column('float', { name: 'VLROUTROS', precision: 53, default: () => '(0)' })
  vlroutros: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('char', { name: 'AGRUPAR', length: 1, default: () => "'N'" })
  agrupar: string;

  @Column('float', { name: 'BCICMSSTANT', nullable: true, precision: 53 })
  bcicmsstant: number | null;

  @Column('smallint', { name: 'CODCFG', nullable: true })
  codcfg: number | null;

  @Column('char', { name: 'INDSUBAPURACAOAJ', nullable: true, length: 1 })
  indsubapuracaoaj: string | null;

  @Column('char', {
    name: 'SUBAPURACAOAJ',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  subapuracaoaj: string | null;

  @ManyToOne(() => TgfobsEntity, (tgfobsEntity) => tgfobsEntity.tgfajds)
  @JoinColumn([{ name: 'CODOBSPADRAO', referencedColumnName: 'codobspadrao' }])
  codobspadrao2: TgfobsEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfajds)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfajds)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgflivEntity, (tgflivEntity) => tgflivEntity.tgfajds, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'ORIGEM', referencedColumnName: 'origem' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CODEMP', referencedColumnName: 'codemp' },
  ])
  tgfliv: TgflivEntity;
}
