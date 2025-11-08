import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgaartEntity } from './tGAART.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgadigEntity } from './tGADIG.entity';

@Index('PK_TGAARTS', ['nuart', 'seqart', 'nunota', 'sequencia', 'tipo'], {
  unique: true,
})
@Index('TGAARTS_INOTA', ['nunota', 'sequencia'], { unique: true })
@Entity('TGAARTS', { schema: 'SANKHYA' })
export class TgaartsEntity {
  @Column('int', { primary: true, name: 'NUART' })
  nuart: number;

  @Column('smallint', { primary: true, name: 'SEQART' })
  seqart: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { primary: true, name: 'TIPO', length: 1 })
  tipo: string;

  @Column('float', { name: 'AREATRATADA', nullable: true, precision: 53 })
  areatratada: number | null;

  @Column('float', { name: 'DOSAGEM', nullable: true, precision: 53 })
  dosagem: number | null;

  @Column('float', { name: 'DOSAGEMPOR', nullable: true, precision: 53 })
  dosagempor: number | null;

  @Column('float', { name: 'APLICACAO', nullable: true, precision: 53 })
  aplicacao: number | null;

  @Column('float', { name: 'INTERVALO', nullable: true, precision: 53 })
  intervalo: number | null;

  @Column('float', { name: 'CARENCIA', nullable: true, precision: 53 })
  carencia: number | null;

  @Column('varchar', { name: 'ARTCREA', nullable: true, length: 20 })
  artcrea: string | null;

  @Column('datetime', { name: 'DTVINC', nullable: true })
  dtvinc: Date | null;

  @Column('float', { name: 'QTDADQUIRIR', nullable: true, precision: 53 })
  qtdadquirir: number | null;

  @Column('datetime', { name: 'DTEMISSAO', nullable: true })
  dtemissao: Date | null;

  @Column('char', { name: 'PRIMEIRO', length: 1, default: () => "'S'" })
  primeiro: string;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgaarts)
  @JoinColumn([{ name: 'CODCULTURA', referencedColumnName: 'codprod' }])
  codcultura: TgfproEntity;

  @ManyToOne(() => TgaartEntity, (tgaartEntity) => tgaartEntity.tgaarts)
  @JoinColumn([{ name: 'NUART', referencedColumnName: 'nuart' }])
  nuart2: TgaartEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgaarts)
  @JoinColumn([{ name: 'VOLDOSAGEM', referencedColumnName: 'codvol' }])
  voldosagem: TgfvolEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgaarts2)
  @JoinColumn([{ name: 'VOLQTDADQUIRIR', referencedColumnName: 'codvol' }])
  volqtdadquirir: TgfvolEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgaarts3)
  @JoinColumn([{ name: 'VOLDOSAGEMPOR', referencedColumnName: 'codvol' }])
  voldosagempor: TgfvolEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgaarts4)
  @JoinColumn([{ name: 'VOLAREATRATADA', referencedColumnName: 'codvol' }])
  volareatratada: TgfvolEntity;

  @ManyToOne(() => TgadigEntity, (tgadigEntity) => tgadigEntity.tgaarts)
  @JoinColumn([
    { name: 'NUDIG', referencedColumnName: 'nudig' },
    { name: 'TIPO', referencedColumnName: 'tipo' },
  ])
  tgadig: TgadigEntity;
}
