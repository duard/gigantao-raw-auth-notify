import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfnatEntity } from './tGFNAT.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfvenEntity } from './tGFVEN.entity';
import { TjciapEntity } from './tJCIAP.entity';

@Index('PK_TJCAPJ', ['numap'], { unique: true })
@Entity('TJCAPJ', { schema: 'SANKHYA' })
export class TjcapjEntity {
  @Column('int', { primary: true, name: 'NUMAP' })
  numap: number;

  @Column('int', { name: 'CODCONTATO', nullable: true })
  codcontato: number | null;

  @Column('char', {
    name: 'FATURAR',
    nullable: true,
    length: 1,
    default: () => "'C'",
  })
  faturar: string | null;

  @Column('char', {
    name: 'MATERIAL',
    nullable: true,
    length: 1,
    default: () => "'A'",
  })
  material: string | null;

  @Column('char', {
    name: 'ESPMAT',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  espmat: string | null;

  @Column('money', { name: 'PRECOTABELA', nullable: true })
  precotabela: number | null;

  @Column('money', { name: 'ACRESCIMOCOR', nullable: true })
  acrescimocor: number | null;

  @Column('money', { name: 'VLRDESC', nullable: true })
  vlrdesc: number | null;

  @Column('char', { name: 'CONDPAG', nullable: true, length: 20 })
  condpag: string | null;

  @Column('smallint', { name: 'INSPAGAS', nullable: true })
  inspagas: number | null;

  @Column('smallint', { name: 'INSBONIF', nullable: true })
  insbonif: number | null;

  @Column('money', { name: 'VLRCOMAGENCIA', nullable: true })
  vlrcomagencia: number | null;

  @Column('datetime', { name: 'DTVENDA', nullable: true })
  dtvenda: Date | null;

  @Column('char', { name: 'PENDENTE', length: 1, default: () => "'N'" })
  pendente: string;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tjcapjs)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat: TgfnatEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tjcapjs)
  @JoinColumn([{ name: 'AUTORDESC', referencedColumnName: 'codusu' }])
  autordesc: TsiusuEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tjcapjs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tjcapjs2)
  @JoinColumn([{ name: 'CODAGENCIA', referencedColumnName: 'codparc' }])
  codagencia: TgfparEntity;

  @ManyToOne(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.tjcapjs)
  @JoinColumn([{ name: 'CODVEND', referencedColumnName: 'codvend' }])
  codvend: TgfvenEntity;

  @OneToMany(() => TjciapEntity, (tjciapEntity) => tjciapEntity.numap2)
  tjciaps: TjciapEntity[];
}
