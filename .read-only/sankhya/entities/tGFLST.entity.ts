import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfdinEntity } from './tGFDIN.entity';
import { TgfissEntity } from './tGFISS.entity';
import { TgflisEntity } from './tGFLIS.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfsemEntity } from './tGFSEM.entity';
import { TriptpsvEntity } from './tRIPTPSV.entity';

@Index('PK_TGFLST', ['codlst'], { unique: true })
@Entity('TGFLST', { schema: 'SANKHYA' })
export class TgflstEntity {
  @Column('int', { primary: true, name: 'CODLST' })
  codlst: number;

  @Column('char', { name: 'DESCRLST', length: 250 })
  descrlst: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', { name: 'ANALITICO', length: 1, default: () => "'S'" })
  analitico: string;

  @Column('int', { name: 'CODLSTPAI' })
  codlstpai: number;

  @Column('int', { name: 'GRAU' })
  grau: number;

  @Column('varchar', {
    name: 'INFORMACODOBRA',
    length: 1,
    default: () => "'N'",
  })
  informacodobra: string;

  @Column('smallint', { name: 'TIPOREPASSE', nullable: true })
  tiporepasse: number | null;

  @Column('varchar', { name: 'CODLSTAUX', nullable: true, length: 15 })
  codlstaux: string | null;

  @Column('char', { name: 'GERAVLRTOTREC', nullable: true, length: 1 })
  geravlrtotrec: string | null;

  @Column('varchar', { name: 'DESDNAC', nullable: true, length: 10 })
  desdnac: string | null;

  @OneToMany(() => TgfdinEntity, (tgfdinEntity) => tgfdinEntity.codlst)
  tgfdins: TgfdinEntity[];

  @OneToMany(() => TgfissEntity, (tgfissEntity) => tgfissEntity.codlst)
  tgfisses: TgfissEntity[];

  @OneToMany(() => TgflisEntity, (tgflisEntity) => tgflisEntity.codlst)
  tgflis: TgflisEntity[];

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.codlst)
  tgfpros: TgfproEntity[];

  @OneToMany(() => TgfsemEntity, (tgfsemEntity) => tgfsemEntity.codlst)
  tgfsems: TgfsemEntity[];

  @OneToMany(() => TriptpsvEntity, (triptpsvEntity) => triptpsvEntity.codlst2)
  triptpsvs: TriptpsvEntity[];
}
