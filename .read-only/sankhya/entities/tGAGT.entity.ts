import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgaclcEntity } from './tGACLC.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgagtmEntity } from './tGAGTM.entity';
import { TgagtpEntity } from './tGAGTP.entity';
import { TgagtsEntity } from './tGAGTS.entity';
import { TgfiteEntity } from './tGFITE.entity';

@Index('PK_TGAGT', ['grupotransg'], { unique: true })
@Index('TGAGT_ICODCLC', ['codclc', 'grupotransg'], {})
@Entity('TGAGT', { schema: 'SANKHYA' })
export class TgagtEntity {
  @Column('int', { primary: true, name: 'GRUPOTRANSG' })
  grupotransg: number;

  @Column('char', { name: 'DESCRGRUPO', length: 40 })
  descrgrupo: string;

  @Column('float', { name: 'CREDITO', precision: 53 })
  credito: number;

  @Column('int', { name: 'CODCLC' })
  codclc: number;

  @Column('float', { name: 'PERCROYALT', precision: 53 })
  percroyalt: number;

  @Column('float', { name: 'PERCROYALTND', precision: 53 })
  percroyaltnd: number;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgagts)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgagts)
  @JoinColumn([{ name: 'CODSERV', referencedColumnName: 'codprod' }])
  codserv: TgfproEntity;

  @ManyToOne(() => TgaclcEntity, (tgaclcEntity) => tgaclcEntity.tgagts)
  @JoinColumn([{ name: 'CODCLC', referencedColumnName: 'codclc' }])
  codclc2: TgaclcEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgagts2)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @OneToMany(() => TgagtmEntity, (tgagtmEntity) => tgagtmEntity.grupotransg2)
  tgagtms: TgagtmEntity[];

  @OneToMany(() => TgagtpEntity, (tgagtpEntity) => tgagtpEntity.grupotransg2)
  tgagtps: TgagtpEntity[];

  @OneToMany(() => TgagtsEntity, (tgagtsEntity) => tgagtsEntity.grupotransg2)
  tgagts: TgagtsEntity[];

  @OneToMany(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.grupotransg)
  tgfites: TgfiteEntity[];

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.grupotransg)
  tgfpros: TgfproEntity[];
}
