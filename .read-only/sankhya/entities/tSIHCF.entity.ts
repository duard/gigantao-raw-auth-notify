import { Column, Entity, Index, ManyToMany, OneToMany } from 'typeorm';
import { TddperbkEntity } from './tDDPERBK.entity';
import { TgfrepbkEntity } from './tGFREPBK.entity';
import { TsiacibkEntity } from './tSIACIBK.entity';
import { TsicfgbkEntity } from './tSICFGBK.entity';
import { TsiconfbkEntity } from './tSICONFBK.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsiusubkEntity } from './tSIUSUBK.entity';

@Index('PK_TSIHCF', ['nunico'], { unique: true })
@Entity('TSIHCF', { schema: 'SANKHYA' })
export class TsihcfEntity {
  @Column('int', { primary: true, name: 'NUNICO' })
  nunico: number;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('varchar', { name: 'ABASEG', nullable: true, length: 1 })
  abaseg: string | null;

  @Column('varchar', { name: 'REMOVEANT', nullable: true, length: 1 })
  removeant: string | null;

  @Column('varchar', { name: 'CHAVE', nullable: true, length: 100 })
  chave: string | null;

  @Column('char', { name: 'SELECAOTELAS', length: 1, default: () => "'N'" })
  selecaotelas: string;

  @Column('char', { name: 'CONFTOP', length: 1, default: () => "'N'" })
  conftop: string;

  @OneToMany(() => TddperbkEntity, (tddperbkEntity) => tddperbkEntity.nunico2)
  tddperbks: TddperbkEntity[];

  @OneToMany(() => TgfrepbkEntity, (tgfrepbkEntity) => tgfrepbkEntity.nunico2)
  tgfrepbks: TgfrepbkEntity[];

  @OneToMany(() => TsiacibkEntity, (tsiacibkEntity) => tsiacibkEntity.nunico2)
  tsiacibks: TsiacibkEntity[];

  @OneToMany(() => TsicfgbkEntity, (tsicfgbkEntity) => tsicfgbkEntity.nunico2)
  tsicfgbks: TsicfgbkEntity[];

  @OneToMany(
    () => TsiconfbkEntity,
    (tsiconfbkEntity) => tsiconfbkEntity.nunico2,
  )
  tsiconfbks: TsiconfbkEntity[];

  @ManyToMany(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsihcfs)
  tsiusus: TsiusuEntity[];

  @OneToMany(() => TsiusubkEntity, (tsiusubkEntity) => tsiusubkEntity.nunico2)
  tsiusubks: TsiusubkEntity[];
}
