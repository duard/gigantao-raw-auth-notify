import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgacltEntity } from './tGACLT.entity';
import { TgaclcEntity } from './tGACLC.entity';
import { TgapciEntity } from './tGAPCI.entity';

@Index('PK_TGACLI', ['codclt', 'codclc'], { unique: true })
@Index('TGACLI_I01', ['codclc', 'codclt'], { unique: true })
@Entity('TGACLI', { schema: 'SANKHYA' })
export class TgacliEntity {
  @Column('int', { primary: true, name: 'CODCLT' })
  codclt: number;

  @Column('int', { primary: true, name: 'CODCLC' })
  codclc: number;

  @Column('float', { name: 'MINIMO', nullable: true, precision: 53 })
  minimo: number | null;

  @Column('float', { name: 'MAXIMO', nullable: true, precision: 53 })
  maximo: number | null;

  @Column('float', { name: 'DESCONTAR', nullable: true, precision: 53 })
  descontar: number | null;

  @Column('char', { name: 'FORMULADESC', nullable: true, length: 255 })
  formuladesc: string | null;

  @Column('char', { name: 'OBSERVACAO', nullable: true, length: 255 })
  observacao: string | null;

  @Column('char', { name: 'OBRIGATORIO', length: 1, default: () => "'S'" })
  obrigatorio: string;

  @Column('varchar', {
    name: 'USAINTERVALO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  usaintervalo: string | null;

  @Column('float', { name: 'VLRCALCINDICE', nullable: true, precision: 53 })
  vlrcalcindice: number | null;

  @Column('char', {
    name: 'USAINDICE',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  usaindice: string | null;

  @ManyToOne(() => TgacltEntity, (tgacltEntity) => tgacltEntity.tgaclis, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODCLT', referencedColumnName: 'codclt' }])
  codclt2: TgacltEntity;

  @ManyToOne(() => TgaclcEntity, (tgaclcEntity) => tgaclcEntity.tgaclis)
  @JoinColumn([{ name: 'CODCLC', referencedColumnName: 'codclc' }])
  codclc2: TgaclcEntity;

  @OneToMany(() => TgapciEntity, (tgapciEntity) => tgapciEntity.tgacli)
  tgapcis: TgapciEntity[];
}
