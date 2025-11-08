import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfveiEntity } from './tGFVEI.entity';
import { AdApontsolEntity } from './aD_APONTSOL.entity';

@Index('PK_AD_APONTAMENTO', ['codigo'], { unique: true })
@Entity('AD_APONTAMENTO', { schema: 'SANKHYA' })
export class AdApontamentoEntity {
  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('float', { name: 'KM', nullable: true, precision: 53 })
  km: number | null;

  @Column('float', { name: 'HORIMETRO', nullable: true, precision: 53 })
  horimetro: number | null;

  @Column('datetime', { name: 'DTINCLUSAO', nullable: true })
  dtinclusao: Date | null;

  @Column('varchar', { name: 'BORRCHARIA', nullable: true, length: 10 })
  borrcharia: string | null;

  @Column('varchar', { name: 'ELETRICA', nullable: true, length: 10 })
  eletrica: string | null;

  @Column('varchar', { name: 'FUNILARIA', nullable: true, length: 10 })
  funilaria: string | null;

  @Column('varchar', { name: 'MECANICA', nullable: true, length: 10 })
  mecanica: string | null;

  @Column('text', { name: 'OBS', nullable: true })
  obs: string | null;

  @Column('varchar', { name: 'OSEXTERNA', nullable: true, length: 10 })
  osexterna: string | null;

  @Column('varchar', { name: 'OPEXTERNO', nullable: true, length: 100 })
  opexterno: string | null;

  @Column('datetime', { name: 'DTPROGRAMACAO', nullable: true })
  dtprogramacao: Date | null;

  @Column('varchar', { name: 'CALDEIRARIA', nullable: true, length: 10 })
  caldeiraria: string | null;

  @Column('int', { name: 'NUOS', nullable: true })
  nuos: number | null;

  @Column('varchar', { name: 'TAG', nullable: true, length: 100 })
  tag: string | null;

  @Column('varchar', { name: 'STATUSOS', nullable: true, length: 10 })
  statusos: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.adApontamentos)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.adApontamentos)
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo: TgfveiEntity;

  @OneToMany(
    () => AdApontsolEntity,
    (adApontsolEntity) => adApontsolEntity.codigo2,
  )
  adApontsols: AdApontsolEntity[];

  @OneToMany(
    () => AdApontsolEntity,
    (adApontsolEntity) => adApontsolEntity.codigo3,
  )
  adApontsols2: AdApontsolEntity[];
}
