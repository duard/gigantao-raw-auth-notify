import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcaanoEntity } from './tCAANO.entity';
import { TcahpaEntity } from './tCAHPA.entity';
import { TgftitEntity } from './tGFTIT.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TcaserEntity } from './tCASER.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TsicusEntity } from './tSICUS.entity';

@Index('PK_TCAPAR', ['codemp', 'codano', 'codcur', 'codser', 'parcela'], {
  unique: true,
})
@Entity('TCAPAR', { schema: 'SANKHYA' })
export class TcaparEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'CODANO' })
  codano: number;

  @Column('char', { primary: true, name: 'CODCUR', length: 15 })
  codcur: string;

  @Column('char', { primary: true, name: 'CODSER', length: 2 })
  codser: string;

  @Column('char', { primary: true, name: 'PARCELA', length: 2 })
  parcela: string;

  @Column('datetime', { name: 'DTVENC', nullable: true })
  dtvenc: Date | null;

  @Column('decimal', {
    name: 'VLRDESDOB',
    nullable: true,
    precision: 15,
    scale: 4,
  })
  vlrdesdob: number | null;

  @Column('char', { name: 'TEMDESCONTO', nullable: true, length: 1 })
  temdesconto: string | null;

  @OneToMany(() => TcaanoEntity, (tcaanoEntity) => tcaanoEntity.tcapar)
  tcaanos: TcaanoEntity[];

  @OneToMany(() => TcahpaEntity, (tcahpaEntity) => tcahpaEntity.tcapar)
  tcahpas: TcahpaEntity[];

  @ManyToOne(() => TgftitEntity, (tgftitEntity) => tgftitEntity.tcapars)
  @JoinColumn([{ name: 'CODTIPTIT', referencedColumnName: 'codtiptit' }])
  codtiptit: TgftitEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tcapars)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat: TgfnatEntity;

  @ManyToOne(() => TcaserEntity, (tcaserEntity) => tcaserEntity.tcapars)
  @JoinColumn([
    { name: 'CODSER', referencedColumnName: 'codser' },
    { name: 'CODCUR', referencedColumnName: 'codcur' },
  ])
  tcaser: TcaserEntity;

  @ManyToOne(() => TcaanoEntity, (tcaanoEntity) => tcaanoEntity.tcapars)
  @JoinColumn([{ name: 'CODANO', referencedColumnName: 'codano' }])
  codano2: TcaanoEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcapars)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tcapars)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;
}
