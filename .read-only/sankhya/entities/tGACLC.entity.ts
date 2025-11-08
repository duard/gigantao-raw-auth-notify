import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgacliEntity } from './tGACLI.entity';
import { TgaclrEntity } from './tGACLR.entity';
import { TgagtEntity } from './tGAGT.entity';
import { TgfcauEntity } from './tGFCAU.entity';
import { TgvpergEntity } from './tGVPERG.entity';

@Index('PK_TGACLC', ['codclc'], { unique: true })
@Index('TGACLC_I01', ['codgrupoclc'], {})
@Index('TGACLC_I02', ['codvinc'], {})
@Entity('TGACLC', { schema: 'SANKHYA' })
export class TgaclcEntity {
  @Column('int', { primary: true, name: 'CODCLC' })
  codclc: number;

  @Column('char', { name: 'NOMECLC', nullable: true, length: 20 })
  nomeclc: string | null;

  @Column('char', { name: 'OBSERVACAO', nullable: true, length: 255 })
  observacao: string | null;

  @Column('int', { name: 'CODVINC', nullable: true })
  codvinc: number | null;

  @Column('char', { name: 'EXIGLIB', length: 1, default: () => "'N'" })
  exiglib: string;

  @Column('char', { name: 'SIGLA', nullable: true, length: 10 })
  sigla: string | null;

  @Column('int', { name: 'CODGRUPOCLC', nullable: true })
  codgrupoclc: number | null;

  @Column('smallint', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('varchar', { name: 'ANALISETERC', length: 1, default: () => "'N'" })
  analiseterc: string;

  @Column('int', { name: 'DECQTD', default: () => '(2)' })
  decqtd: number;

  @Column('char', { name: 'CARACTCONFORME', length: 1, default: () => "'N'" })
  caractconforme: string;

  @ManyToOne(() => TgaclcEntity, (tgaclcEntity) => tgaclcEntity.tgaclcs)
  @JoinColumn([{ name: 'CODGRUPOCLC', referencedColumnName: 'codclc' }])
  codgrupoclc2: TgaclcEntity;

  @OneToMany(() => TgaclcEntity, (tgaclcEntity) => tgaclcEntity.codgrupoclc2)
  tgaclcs: TgaclcEntity[];

  @ManyToOne(() => TgaclcEntity, (tgaclcEntity) => tgaclcEntity.tgaclcs2)
  @JoinColumn([{ name: 'CODVINC', referencedColumnName: 'codclc' }])
  codvinc2: TgaclcEntity;

  @OneToMany(() => TgaclcEntity, (tgaclcEntity) => tgaclcEntity.codvinc2)
  tgaclcs2: TgaclcEntity[];

  @OneToMany(() => TgacliEntity, (tgacliEntity) => tgacliEntity.codclc2)
  tgaclis: TgacliEntity[];

  @OneToMany(() => TgaclrEntity, (tgaclrEntity) => tgaclrEntity.codclc2)
  tgaclrs: TgaclrEntity[];

  @OneToMany(() => TgagtEntity, (tgagtEntity) => tgagtEntity.codclc2)
  tgagts: TgagtEntity[];

  @OneToMany(() => TgfcauEntity, (tgfcauEntity) => tgfcauEntity.codclc2)
  tgfcaus: TgfcauEntity[];

  @OneToMany(() => TgvpergEntity, (tgvpergEntity) => tgvpergEntity.codclc)
  tgvpergs: TgvpergEntity[];
}
