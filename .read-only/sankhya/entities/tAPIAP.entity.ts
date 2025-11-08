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
import { TapirmEntity } from './tAPIRM.entity';
import { TapcamEntity } from './tAPCAM.entity';
import { TapmapEntity } from './tAPMAP.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TAPIAP', ['nuaponta', 'numitem'], { unique: true })
@Entity('TAPIAP', { schema: 'SANKHYA' })
export class TapiapEntity {
  @Column('int', { primary: true, name: 'NUAPONTA' })
  nuaponta: number;

  @Column('smallint', { primary: true, name: 'NUMITEM', default: () => '(0)' })
  numitem: number;

  @Column('char', { name: 'NOMETAB', length: 32 })
  nometab: string;

  @Column('char', { name: 'IDOBJETO', length: 50 })
  idobjeto: string;

  @Column('float', { name: 'QTDSERV', precision: 53, default: () => '(0)' })
  qtdserv: number;

  @Column('char', {
    name: 'CODVOL',
    nullable: true,
    length: 2,
    default: () => "'0'",
  })
  codvol: string | null;

  @Column('char', { name: 'OBSERVACAO', nullable: true, length: 256 })
  observacao: string | null;

  @ManyToMany(() => TapirmEntity, (tapirmEntity) => tapirmEntity.tapiaps)
  @JoinTable({
    name: 'TAPARM',
    joinColumns: [
      { name: 'NUAPONTA', referencedColumnName: 'nuaponta' },
      { name: 'NUMITEM', referencedColumnName: 'numitem' },
    ],
    inverseJoinColumns: [
      { name: 'NURM', referencedColumnName: 'nurm' },
      { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    ],
    schema: 'SANKHYA',
  })
  tapirms: TapirmEntity[];

  @OneToMany(() => TapcamEntity, (tapcamEntity) => tapcamEntity.tapiap)
  tapcams: TapcamEntity[];

  @ManyToOne(() => TapmapEntity, (tapmapEntity) => tapmapEntity.tapiaps)
  @JoinColumn([{ name: 'NUAPONTA', referencedColumnName: 'nuaponta' }])
  nuaponta2: TapmapEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tapiaps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tapiaps)
  @JoinColumn([{ name: 'CODSERV', referencedColumnName: 'codprod' }])
  codserv: TgfproEntity;
}
