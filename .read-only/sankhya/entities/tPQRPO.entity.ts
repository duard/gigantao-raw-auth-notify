import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tpqrp1Entity } from './tPQRP1.entity';
import { Tpqqu1Entity } from './tPQQU1.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfveiEntity } from './tGFVEI.entity';

@Index('PK_TPQRPO', ['nurespperg'], { unique: true })
@Index('TPQRPO_I01', ['codparcmotorista', 'codveiculo', 'dtresp'], {})
@Index('TPQRPO_I02', ['codveiculo', 'codparcmotorista', 'dtresp'], {})
@Entity('TPQRPO', { schema: 'SANKHYA' })
export class TpqrpoEntity {
  @Column('int', { primary: true, name: 'NURESPPERG' })
  nurespperg: number;

  @Column('int', { name: 'CODPARCMOTORISTA', default: () => '(0)' })
  codparcmotorista: number;

  @Column('int', { name: 'CODVEICULO', default: () => '(0)' })
  codveiculo: number;

  @Column('datetime', { name: 'DTRESP' })
  dtresp: Date;

  @Column('int', { name: 'PONTUACAO' })
  pontuacao: number;

  @Column('varchar', { name: 'IMPEDITIVA', length: 1, default: () => "'S'" })
  impeditiva: string;

  @Column('varchar', { name: 'OBS', nullable: true, length: 250 })
  obs: string | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('int', { name: 'ORDEMCARGA', nullable: true })
  ordemcarga: number | null;

  @Column('varchar', { name: 'CONFIRMADO', length: 1, default: () => "'N'" })
  confirmado: string;

  @OneToMany(() => Tpqrp1Entity, (tpqrp1Entity) => tpqrp1Entity.nurespperg2)
  tpqrps: Tpqrp1Entity[];

  @ManyToOne(() => Tpqqu1Entity, (tpqqu1Entity) => tpqqu1Entity.tpqrpos)
  @JoinColumn([{ name: 'CODQUESTMOTORISTA', referencedColumnName: 'codquest' }])
  codquestmotorista: Tpqqu1Entity;

  @ManyToOne(() => Tpqqu1Entity, (tpqqu1Entity) => tpqqu1Entity.tpqrpos2)
  @JoinColumn([{ name: 'CODQUESTVEICULO', referencedColumnName: 'codquest' }])
  codquestveiculo: Tpqqu1Entity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tpqrpos)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tpqrpos)
  @JoinColumn([{ name: 'CODPARCMOTORISTA', referencedColumnName: 'codparc' }])
  codparcmotorista2: TgfparEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tpqrpos)
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo2: TgfveiEntity;
}
