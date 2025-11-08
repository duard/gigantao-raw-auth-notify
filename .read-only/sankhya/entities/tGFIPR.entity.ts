import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TgfiteEntity } from './tGFITE.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfperdaEntity } from './tGFPERDA.entity';
import { TgpacoEntity } from './tGPACO.entity';
import { TgpregEntity } from './tGPREG.entity';

@Index('PK_TGFIPR', ['codbarra'], { unique: true })
@Index('TGFIPR_IFK', ['nunota', 'sequencia'], {})
@Entity('TGFIPR', { schema: 'SANKHYA' })
export class TgfiprEntity {
  @Column('varchar', { primary: true, name: 'CODBARRA', length: 80 })
  codbarra: string;

  @Column('int', { name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('char', { name: 'PRONTO', length: 1, default: () => "'N'" })
  pronto: string;

  @Column('char', { name: 'PERDA', length: 1, default: () => "'N'" })
  perda: string;

  @Column('datetime', { name: 'DTCONF', nullable: true })
  dtconf: Date | null;

  @Column('char', { name: 'CONFERIDO', length: 1, default: () => "'N'" })
  conferido: string;

  @ManyToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgfiprs)
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfiprs)
  @JoinColumn([{ name: 'CONFERENTE', referencedColumnName: 'codusu' }])
  conferente: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfiprs2)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToOne(() => TgfperdaEntity, (tgfperdaEntity) => tgfperdaEntity.codbarra2)
  tgfperda: TgfperdaEntity;

  @OneToMany(() => TgpacoEntity, (tgpacoEntity) => tgpacoEntity.codbarra2)
  tgpacos: TgpacoEntity[];

  @OneToMany(() => TgpregEntity, (tgpregEntity) => tgpregEntity.codbarra2)
  tgpregs: TgpregEntity[];
}
