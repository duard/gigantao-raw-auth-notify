import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfvolEntity } from './tGFVOL.entity';

@Index('PK_TGFCAC', ['nunota', 'seqcac'], { unique: true })
@Entity('TGFCAC', { schema: 'SANKHYA' })
export class TgfcacEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'SEQCAC' })
  seqcac: number;

  @Column('int', { name: 'CODLOCAL', nullable: true })
  codlocal: number | null;

  @Column('float', { name: 'QTDPRODUTO', nullable: true, precision: 53 })
  qtdproduto: number | null;

  @Column('float', { name: 'PRECOUSADO', nullable: true, precision: 53 })
  precousado: number | null;

  @Column('float', { name: 'PRECOTOTAL', nullable: true, precision: 53 })
  precototal: number | null;

  @Column('varchar', { name: 'CONTROLE', nullable: true, length: 11 })
  controle: string | null;

  @Column('text', { name: 'OUTRASCOLUNAS', nullable: true })
  outrascolunas: string | null;

  @Column('float', { name: 'PRECOBASE', nullable: true, precision: 53 })
  precobase: number | null;

  @Column('float', { name: 'VLRACRESCDESC', nullable: true, precision: 53 })
  vlracrescdesc: number | null;

  @Column('float', { name: 'VLRCUS', nullable: true, precision: 53 })
  vlrcus: number | null;

  @Column('float', { name: 'VLRRETENCAO', nullable: true, precision: 53 })
  vlrretencao: number | null;

  @Column('float', { name: 'PRECOBASEQTD', nullable: true, precision: 53 })
  precobaseqtd: number | null;

  @Column('float', { name: 'DESCTOTAL', nullable: true, precision: 53 })
  desctotal: number | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfcacs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgfcacs)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;
}
