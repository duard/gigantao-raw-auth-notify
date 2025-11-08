import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGAPCA', ['nunota', 'sequencia'], { unique: true })
@Index('TGAPCA_I01', ['nunotadest'], {})
@Entity('TGAPCA', { schema: 'SANKHYA' })
export class TgapcaEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('float', { name: 'PESOBRUTO', nullable: true, precision: 53 })
  pesobruto: number | null;

  @Column('datetime', { name: 'DHPESOBRUTO', nullable: true })
  dhpesobruto: Date | null;

  @Column('smallint', { name: 'BALANCAPB', nullable: true })
  balancapb: number | null;

  @Column('float', { name: 'TARA', nullable: true, precision: 53 })
  tara: number | null;

  @Column('datetime', { name: 'DHTARA', nullable: true })
  dhtara: Date | null;

  @Column('smallint', { name: 'BALANCATARA', nullable: true })
  balancatara: number | null;

  @Column('float', { name: 'PESOLIQ', nullable: true, precision: 53 })
  pesoliq: number | null;

  @Column('char', { name: 'NFTRANSP', length: 1, default: () => "'N'" })
  nftransp: string;

  @Column('int', { name: 'NUNOTADEST' })
  nunotadest: number;

  @Column('int', { name: 'NUPESAGEM', default: () => '(0)' })
  nupesagem: number;

  @Column('int', { name: 'CODVEICULO', default: () => '(0)' })
  codveiculo: number;

  @Column('char', { name: 'VARIASNOTAS', length: 1, default: () => "'N'" })
  variasnotas: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { name: 'PESAGEMMANUAL', nullable: true, length: 1 })
  pesagemmanual: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgapcas)
  @JoinColumn([{ name: 'CODUSUPB', referencedColumnName: 'codusu' }])
  codusupb: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgapcas2)
  @JoinColumn([{ name: 'CODUSUTARA', referencedColumnName: 'codusu' }])
  codusutara: TsiusuEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgapcas)
  @JoinColumn([{ name: 'CODPARCTRANSP', referencedColumnName: 'codparc' }])
  codparctransp: TgfparEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgapcas)
  @JoinColumn([{ name: 'NUNOTADEST', referencedColumnName: 'nunota' }])
  nunotadest2: TgfcabEntity;
}
