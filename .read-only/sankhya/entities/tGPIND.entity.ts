import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgpicpEntity } from './tGPICP.entity';
import { TgpidcEntity } from './tGPIDC.entity';
import { TgpideEntity } from './tGPIDE.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgpperEntity } from './tGPPER.entity';

@Index('PK_TGPIND', ['codindicador'], { unique: true })
@Entity('TGPIND', { schema: 'SANKHYA' })
export class TgpindEntity {
  @Column('int', { primary: true, name: 'CODINDICADOR' })
  codindicador: number;

  @Column('varchar', { name: 'DESCRINDICADOR', nullable: true, length: 200 })
  descrindicador: string | null;

  @Column('varchar', { name: 'PERGUNTA', nullable: true, length: 200 })
  pergunta: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @OneToMany(() => TgpicpEntity, (tgpicpEntity) => tgpicpEntity.codindicador2)
  tgpicps: TgpicpEntity[];

  @OneToMany(() => TgpidcEntity, (tgpidcEntity) => tgpidcEntity.codindicador2)
  tgpidcs: TgpidcEntity[];

  @OneToMany(() => TgpideEntity, (tgpideEntity) => tgpideEntity.codindicador2)
  tgpides: TgpideEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgpinds)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TgpperEntity, (tgpperEntity) => tgpperEntity.codindicador2)
  tgppers: TgpperEntity[];
}
