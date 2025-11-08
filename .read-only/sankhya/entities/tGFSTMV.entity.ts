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
import { TgfempEntity } from './tGFEMP.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfstmvhEntity } from './tGFSTMVH.entity';
import { TgfstmvproEntity } from './tGFSTMVPRO.entity';
import { TgfstmvtEntity } from './tGFSTMVT.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFSTMV', ['nrounico'], { unique: true })
@Entity('TGFSTMV', { schema: 'SANKHYA' })
export class TgfstmvEntity {
  @Column('int', { primary: true, name: 'NROUNICO' })
  nrounico: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'N'" })
  ativo: string;

  @Column('char', { name: 'EXECAUT', length: 1, default: () => "'N'" })
  execaut: string;

  @Column('varchar', { name: 'LISPRODEXC', nullable: true, length: 3103 })
  lisprodexc: string | null;

  @Column('char', { name: 'SUBSTCOMPVEND', length: 1, default: () => "'N'" })
  substcompvend: string;

  @Column('char', { name: 'SUBSTVENDA', length: 1, default: () => "'N'" })
  substvenda: string;

  @Column('char', { name: 'SUBSTCOMPRA', length: 1, default: () => "'N'" })
  substcompra: string;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfstmvs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfstmvs)
  tgfemps: TgfempEntity[];

  @OneToMany(() => TgfstmvhEntity, (tgfstmvhEntity) => tgfstmvhEntity.nrounico2)
  tgfstmvhs: TgfstmvhEntity[];

  @ManyToMany(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfstmvs)
  @JoinTable({
    name: 'TGFSTMVP',
    joinColumns: [{ name: 'NROUNICO', referencedColumnName: 'nrounico' }],
    inverseJoinColumns: [{ name: 'CODPARC', referencedColumnName: 'codparc' }],
    schema: 'SANKHYA',
  })
  tgfpars: TgfparEntity[];

  @OneToMany(
    () => TgfstmvproEntity,
    (tgfstmvproEntity) => tgfstmvproEntity.nrounico,
  )
  tgfstmvpros: TgfstmvproEntity[];

  @OneToMany(() => TgfstmvtEntity, (tgfstmvtEntity) => tgfstmvtEntity.nrounico2)
  tgfstmvts: TgfstmvtEntity[];
}
