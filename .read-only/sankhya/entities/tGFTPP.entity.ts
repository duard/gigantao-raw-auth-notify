import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcaaluEntity } from './tCAALU.entity';
import { TcspapEntity } from './tCSPAP.entity';
import { TfcbcoEntity } from './tFCBCO.entity';
import { TgfcvgEntity } from './tGFCVG.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfntaEntity } from './tGFNTA.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfppaEntity } from './tGFPPA.entity';

@Index('PK_TGFTPP', ['codtipparc'], { unique: true })
@Entity('TGFTPP', { schema: 'SANKHYA' })
export class TgftppEntity {
  @Column('int', { primary: true, name: 'CODTIPPARC' })
  codtipparc: number;

  @Column('char', { name: 'DESCRTIPPARC', length: 60 })
  descrtipparc: string;

  @Column('smallint', { name: 'CODANT', nullable: true })
  codant: number | null;

  @Column('char', { name: 'TIPANT', nullable: true, length: 1 })
  tipant: string | null;

  @Column('int', { name: 'CODTIPPARCPAI' })
  codtipparcpai: number;

  @Column('smallint', { name: 'GRAU', nullable: true })
  grau: number | null;

  @Column('char', { name: 'ANALITICO', length: 1, default: () => "'S'" })
  analitico: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('float', { name: 'PERCCOMMM', nullable: true, precision: 53 })
  perccommm: number | null;

  @Column('char', { name: 'SEGATUA', length: 1, default: () => "'N'" })
  segatua: string;

  @OneToMany(() => TcaaluEntity, (tcaaluEntity) => tcaaluEntity.codtpresp)
  tcaalus: TcaaluEntity[];

  @OneToMany(() => TcspapEntity, (tcspapEntity) => tcspapEntity.codtipparc)
  tcspaps: TcspapEntity[];

  @ManyToMany(() => TcspapEntity, (tcspapEntity) => tcspapEntity.tgftpps)
  @JoinTable({
    name: 'TCSPPP',
    joinColumns: [{ name: 'CODTIPPARC', referencedColumnName: 'codtipparc' }],
    inverseJoinColumns: [{ name: 'CODPAP', referencedColumnName: 'codpap' }],
    schema: 'SANKHYA',
  })
  tcspaps2: TcspapEntity[];

  @OneToMany(() => TfcbcoEntity, (tfcbcoEntity) => tfcbcoEntity.codtipparc)
  tfcbcos: TfcbcoEntity[];

  @OneToMany(() => TgfcvgEntity, (tgfcvgEntity) => tgfcvgEntity.codtipparc2)
  tgfcvgs: TgfcvgEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.codtipparc)
  tgfemps: TgfempEntity[];

  @ManyToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgftpps)
  @JoinTable({
    name: 'TGFGRA',
    joinColumns: [{ name: 'CODTIPPARC', referencedColumnName: 'codtipparc' }],
    inverseJoinColumns: [{ name: 'CODPROD', referencedColumnName: 'codprod' }],
    schema: 'SANKHYA',
  })
  tgfpros: TgfproEntity[];

  @OneToMany(() => TgfntaEntity, (tgfntaEntity) => tgfntaEntity.codtipparc)
  tgfntas: TgfntaEntity[];

  @OneToMany(() => TgfparEntity, (tgfparEntity) => tgfparEntity.codtipparc)
  tgfpars: TgfparEntity[];

  @OneToMany(() => TgfppaEntity, (tgfppaEntity) => tgfppaEntity.codtipparc2)
  tgfppas: TgfppaEntity[];

  @ManyToOne(() => TgfntaEntity, (tgfntaEntity) => tgfntaEntity.tgftpps)
  @JoinColumn([{ name: 'CODTAB', referencedColumnName: 'codtab' }])
  codtab: TgfntaEntity;
}
