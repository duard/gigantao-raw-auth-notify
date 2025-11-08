import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TsicidEntity } from './tSICID.entity';
import { TsibaiEntity } from './tSIBAI.entity';
import { TimlicEntity } from './tIMLIC.entity';
import { TimlotEntity } from './tIMLOT.entity';
import { TimlteEntity } from './tIMLTE.entity';

@Index('PK_TIMCAR', ['carcodigo'], { unique: true })
@Entity('TIMCAR', { schema: 'SANKHYA' })
export class TimcarEntity {
  @Column('int', { primary: true, name: 'CARCODIGO' })
  carcodigo: number;

  @Column('varchar', { name: 'CARCARTORIO', length: 120 })
  carcartorio: string;

  @Column('varchar', { name: 'CARCEP', nullable: true, length: 8 })
  carcep: string | null;

  @Column('varchar', { name: 'CARNUMEND', nullable: true, length: 40 })
  carnumend: string | null;

  @Column('varchar', { name: 'CARCOMPLEMENTO', nullable: true, length: 30 })
  carcomplemento: string | null;

  @Column('varchar', { name: 'CARTELEFONES', nullable: true, length: 13 })
  cartelefones: string | null;

  @Column('int', { name: 'CARCODEND', nullable: true, default: () => '(0)' })
  carcodend: number | null;

  @Column('text', { name: 'CAROBSERVACAO', nullable: true })
  carobservacao: string | null;

  @Column('varchar', { name: 'CARENDERECO', nullable: true, length: 40 })
  carendereco: string | null;

  @Column('char', { name: 'CARLEGADO', nullable: true, length: 1 })
  carlegado: string | null;

  @OneToMany(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timcartorio)
  tgfpars: TgfparEntity[];

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.timcars)
  @JoinColumn([{ name: 'CARCIDADE', referencedColumnName: 'codcid' }])
  carcidade: TsicidEntity;

  @ManyToOne(() => TsibaiEntity, (tsibaiEntity) => tsibaiEntity.timcars)
  @JoinColumn([{ name: 'CARBAIRRO', referencedColumnName: 'codbai' }])
  carbairro: TsibaiEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timcars)
  @JoinColumn([{ name: 'CARPARCEIRO', referencedColumnName: 'codparc' }])
  carparceiro: TgfparEntity;

  @OneToMany(() => TimlicEntity, (timlicEntity) => timlicEntity.liccartorio)
  timlics: TimlicEntity[];

  @OneToMany(() => TimlotEntity, (timlotEntity) => timlotEntity.lotmdcartorio)
  timlots: TimlotEntity[];

  @OneToMany(() => TimlotEntity, (timlotEntity) => timlotEntity.lotcartoriosuge)
  timlots2: TimlotEntity[];

  @OneToMany(() => TimlteEntity, (timlteEntity) => timlteEntity.ltecartorio)
  timltes: TimlteEntity[];
}
