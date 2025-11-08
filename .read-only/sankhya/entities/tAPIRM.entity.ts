import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { TapiapEntity } from './tAPIAP.entity';
import { TapmrmEntity } from './tAPMRM.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TAPIRM', ['nurm', 'sequencia'], { unique: true })
@Entity('TAPIRM', { schema: 'SANKHYA' })
export class TapirmEntity {
  @Column('int', { primary: true, name: 'NURM' })
  nurm: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('float', { name: 'QTDSERV', nullable: true, precision: 53 })
  qtdserv: number | null;

  @Column('float', { name: 'VLRUNI', nullable: true, precision: 53 })
  vlruni: number | null;

  @Column('char', { name: 'OBSERVACAO', nullable: true, length: 256 })
  observacao: string | null;

  @ManyToMany(() => TapiapEntity, (tapiapEntity) => tapiapEntity.tapirms)
  tapiaps: TapiapEntity[];

  @ManyToOne(() => TapmrmEntity, (tapmrmEntity) => tapmrmEntity.tapirms)
  @JoinColumn([{ name: 'NURM', referencedColumnName: 'nurm' }])
  nurm2: TapmrmEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tapirms)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tapirms)
  @JoinColumn([{ name: 'CODSERV', referencedColumnName: 'codprod' }])
  codserv: TgfproEntity;
}
