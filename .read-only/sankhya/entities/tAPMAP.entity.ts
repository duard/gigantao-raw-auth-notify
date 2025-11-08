import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TapiapEntity } from './tAPIAP.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TappaaEntity } from './tAPPAA.entity';
import { TgfcveEntity } from './tGFCVE.entity';
import { TgffinEntity } from './tGFFIN.entity';

@Index('PK_TAPMAP', ['nuaponta'], { unique: true })
@Entity('TAPMAP', { schema: 'SANKHYA' })
export class TapmapEntity {
  @Column('int', { primary: true, name: 'NUAPONTA' })
  nuaponta: number;

  @Column('datetime', { name: 'DHMOV' })
  dhmov: Date;

  @Column('smallint', { name: 'HRINICIAL', default: () => '(0)' })
  hrinicial: number;

  @Column('smallint', { name: 'HRFINAL', default: () => '(0)' })
  hrfinal: number;

  @Column('int', { name: 'NUMRDO', nullable: true })
  numrdo: number | null;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('text', { name: 'CONTEUDORDO', nullable: true })
  conteudordo: string | null;

  @Column('char', { name: 'CONDCLIMATICAMANHA', nullable: true, length: 1 })
  condclimaticamanha: string | null;

  @Column('char', { name: 'CONDCLIMATICATARDE', nullable: true, length: 1 })
  condclimaticatarde: string | null;

  @Column('smallint', { name: 'INTERVALO', nullable: true })
  intervalo: number | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @OneToMany(() => TapiapEntity, (tapiapEntity) => tapiapEntity.nuaponta2)
  tapiaps: TapiapEntity[];

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tapmaps)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj: TcsprjEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tapmaps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TappaaEntity, (tappaaEntity) => tappaaEntity.nuaponta2)
  tappaas: TappaaEntity[];

  @OneToMany(() => TgfcveEntity, (tgfcveEntity) => tgfcveEntity.nuaponta)
  tgfcves: TgfcveEntity[];

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.nuaponta)
  tgffins: TgffinEntity[];
}
