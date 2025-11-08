import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgwittEntity } from './tGWITT.entity';
import { TgwlboEntity } from './tGWLBO.entity';
import { TgwrecEntity } from './tGWREC.entity';
import { TgwsepEntity } from './tGWSEP.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgwivtEntity } from './tGWIVT.entity';
import { TgwttrEntity } from './tGWTTR.entity';
import { TgwconEntity } from './tGWCON.entity';
import { TgfordEntity } from './tGFORD.entity';
import { TgwtecEntity } from './tGWTEC.entity';
import { TgwtraEntity } from './tGWTRA.entity';
import { TgwuxtEntity } from './tGWUXT.entity';

@Index('PK_TGWTAR', ['nutarefa'], { unique: true })
@Index('TGWTAR_I01', ['codtarefa', 'situacao'], {})
@Entity('TGWTAR', { schema: 'SANKHYA' })
export class TgwtarEntity {
  @Column('int', { primary: true, name: 'NUTAREFA' })
  nutarefa: number;

  @Column('int', { name: 'CODTAREFA', nullable: true })
  codtarefa: number | null;

  @Column('char', { name: 'SITUACAO', length: 1, default: () => "'A'" })
  situacao: string;

  @Column('int', { name: 'NUTAREFAORIGEM', nullable: true })
  nutarefaorigem: number | null;

  @Column('int', { name: 'PRIORIDADE', nullable: true })
  prioridade: number | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('datetime', { name: 'DTTAREFA', default: () => 'getdate()' })
  dttarefa: Date;

  @Column('char', { name: 'PROATIVA', length: 1, default: () => "'N'" })
  proativa: string;

  @Column('int', { name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @OneToMany(() => TgwittEntity, (tgwittEntity) => tgwittEntity.nutarefa2)
  tgwitts: TgwittEntity[];

  @OneToMany(() => TgwlboEntity, (tgwlboEntity) => tgwlboEntity.nutarefa2)
  tgwlbos: TgwlboEntity[];

  @OneToMany(() => TgwrecEntity, (tgwrecEntity) => tgwrecEntity.nutarefa2)
  tgwrecs: TgwrecEntity[];

  @OneToMany(() => TgwsepEntity, (tgwsepEntity) => tgwsepEntity.nutarefa2)
  tgwseps: TgwsepEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwtars)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgwittEntity, (tgwittEntity) => tgwittEntity.tgwtars)
  @JoinColumn([
    { name: 'NUTAREFADEP', referencedColumnName: 'nutarefa' },
    { name: 'SEQUENCIADEP', referencedColumnName: 'sequencia' },
  ])
  tgwitt: TgwittEntity;

  @ManyToOne(() => TgwivtEntity, (tgwivtEntity) => tgwivtEntity.tgwtars)
  @JoinColumn([{ name: 'NUIVT', referencedColumnName: 'nuivt' }])
  nuivt: TgwivtEntity;

  @ManyToOne(() => TgwttrEntity, (tgwttrEntity) => tgwttrEntity.tgwtars)
  @JoinColumn([{ name: 'CODTAREFA', referencedColumnName: 'codtarefa' }])
  codtarefa2: TgwttrEntity;

  @ManyToOne(() => TgwconEntity, (tgwconEntity) => tgwconEntity.tgwtars, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUCONFERENCIA', referencedColumnName: 'nuconferencia' },
  ])
  nuconferencia: TgwconEntity;

  @ManyToOne(() => TgfordEntity, (tgfordEntity) => tgfordEntity.tgwtars)
  @JoinColumn([
    { name: 'CODEMPOC', referencedColumnName: 'codemp' },
    { name: 'ORDEMCARGA', referencedColumnName: 'ordemcarga' },
  ])
  tgford: TgfordEntity;

  @OneToMany(() => TgwtecEntity, (tgwtecEntity) => tgwtecEntity.nutarefa2)
  tgwtecs: TgwtecEntity[];

  @OneToMany(() => TgwtraEntity, (tgwtraEntity) => tgwtraEntity.nutarefa2)
  tgwtras: TgwtraEntity[];

  @OneToMany(() => TgwuxtEntity, (tgwuxtEntity) => tgwuxtEntity.nutarefa2)
  tgwuxts: TgwuxtEntity[];
}
