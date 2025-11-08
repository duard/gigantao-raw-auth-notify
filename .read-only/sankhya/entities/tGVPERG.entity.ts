import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgvavpEntity } from './tGVAVP.entity';
import { TgvpegEntity } from './tGVPEG.entity';
import { TgvpepEntity } from './tGVPEP.entity';
import { TgvpeprEntity } from './tGVPEPR.entity';
import { TgaclcEntity } from './tGACLC.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgvpetEntity } from './tGVPET.entity';
import { TgvpetpEntity } from './tGVPETP.entity';
import { TgvpeuEntity } from './tGVPEU.entity';
import { TgvresEntity } from './tGVRES.entity';

@Index('PK_TGVPERG', ['codperg'], { unique: true })
@Entity('TGVPERG', { schema: 'SANKHYA' })
export class TgvpergEntity {
  @Column('int', { primary: true, name: 'CODPERG' })
  codperg: number;

  @Column('varchar', { name: 'DESCRPERG', length: 250 })
  descrperg: string;

  @Column('varchar', { name: 'OBRIGATORIA', length: 1 })
  obrigatoria: string;

  @Column('varchar', { name: 'TIPORESP', length: 1 })
  tiporesp: string;

  @Column('varchar', { name: 'REGRESP', length: 1 })
  regresp: string;

  @Column('varchar', { name: 'COTACAO', length: 1 })
  cotacao: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('text', { name: 'LISTARESP', nullable: true })
  listaresp: string | null;

  @Column('smallint', { name: 'VALIDADE', default: () => '(0)' })
  validade: number;

  @OneToMany(() => TgvavpEntity, (tgvavpEntity) => tgvavpEntity.codperg2)
  tgvavps: TgvavpEntity[];

  @OneToMany(() => TgvpegEntity, (tgvpegEntity) => tgvpegEntity.codperg2)
  tgvpegs: TgvpegEntity[];

  @OneToMany(() => TgvpepEntity, (tgvpepEntity) => tgvpepEntity.codperg2)
  tgvpeps: TgvpepEntity[];

  @OneToMany(() => TgvpeprEntity, (tgvpeprEntity) => tgvpeprEntity.codperg2)
  tgvpeprs: TgvpeprEntity[];

  @ManyToOne(() => TgaclcEntity, (tgaclcEntity) => tgaclcEntity.tgvpergs)
  @JoinColumn([{ name: 'CODCLC', referencedColumnName: 'codclc' }])
  codclc: TgaclcEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgvpergs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TgvpetEntity, (tgvpetEntity) => tgvpetEntity.codperg2)
  tgvpets: TgvpetEntity[];

  @OneToMany(() => TgvpetpEntity, (tgvpetpEntity) => tgvpetpEntity.codperg2)
  tgvpetps: TgvpetpEntity[];

  @OneToMany(() => TgvpeuEntity, (tgvpeuEntity) => tgvpeuEntity.codperg2)
  tgvpeus: TgvpeuEntity[];

  @OneToMany(() => TgvresEntity, (tgvresEntity) => tgvresEntity.codperg)
  tgvres: TgvresEntity[];
}
