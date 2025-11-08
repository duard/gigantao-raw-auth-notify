import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';
import { TgfmfeEntity } from './tGFMFE.entity';
import { TgfsatEntity } from './tGFSAT.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFEQF', ['codequip'], { unique: true })
@Entity('TGFEQF', { schema: 'SANKHYA' })
export class TgfeqfEntity {
  @Column('int', { primary: true, name: 'CODEQUIP' })
  codequip: number;

  @Column('char', {
    name: 'TIPOEQUIP',
    nullable: true,
    length: 3,
    default: () => "'ECF'",
  })
  tipoequip: string | null;

  @Column('char', {
    name: 'ATIVO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  ativo: string | null;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 60 })
  descricao: string | null;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tgfeqfs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @OneToMany(() => TgfmfeEntity, (tgfmfeEntity) => tgfmfeEntity.codequip)
  tgfmfes: TgfmfeEntity[];

  @OneToMany(() => TgfsatEntity, (tgfsatEntity) => tgfsatEntity.codequip)
  tgfsats: TgfsatEntity[];

  @OneToMany(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.codequip)
  tsiusus: TsiusuEntity[];
}
