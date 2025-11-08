import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfiteEntity } from './tGFITE.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfetaEntity } from './tGFETA.entity';
import { TgpfluEntity } from './tGPFLU.entity';
import { TgpregEntity } from './tGPREG.entity';

@Index('PK_TGPCAB', ['codproc'], { unique: true })
@Entity('TGPCAB', { schema: 'SANKHYA' })
export class TgpcabEntity {
  @Column('int', { primary: true, name: 'CODPROC' })
  codproc: number;

  @Column('char', { name: 'DESCRPROC', length: 80 })
  descrproc: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @OneToMany(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.codproc)
  tgfites: TgfiteEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgpcabs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfetaEntity, (tgfetaEntity) => tgfetaEntity.tgpcabs)
  @JoinColumn([{ name: 'CODETAPAFINAL', referencedColumnName: 'codetapa' }])
  codetapafinal: TgfetaEntity;

  @OneToMany(() => TgpfluEntity, (tgpfluEntity) => tgpfluEntity.codproc2)
  tgpflus: TgpfluEntity[];

  @OneToMany(() => TgpregEntity, (tgpregEntity) => tgpregEntity.codproc)
  tgpregs: TgpregEntity[];
}
