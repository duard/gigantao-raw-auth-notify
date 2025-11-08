import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { AdGigquestionariofuncionariosEntity } from './aD_GIGQUESTIONARIOFUNCIONARIOS.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_AD_GIGQUESTIONARIOS', ['id'], { unique: true })
@Entity('AD_GIGQUESTIONARIOS', { schema: 'SANKHYA' })
export class AdGigquestionariosEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('varchar', { name: 'DESCR', nullable: true, length: 100 })
  descr: string | null;

  @Column('varchar', { name: 'LINK_FORMS', nullable: true, length: 100 })
  linkForms: string | null;

  @Column('datetime', { name: 'DT_CREATED', nullable: true })
  dtCreated: Date | null;

  @Column('datetime', { name: 'DT_UPDATED', nullable: true })
  dtUpdated: Date | null;

  @Column('int', { name: 'DIAS', nullable: true })
  dias: number | null;

  @Column('int', { name: 'DIAS_ALERTA', nullable: true })
  diasAlerta: number | null;

  @Column('varchar', { name: 'ATIVO', nullable: true, length: 10 })
  ativo: string | null;

  @OneToMany(
    () => AdGigquestionariofuncionariosEntity,
    (adGigquestionariofuncionariosEntity) =>
      adGigquestionariofuncionariosEntity.adGigquestionarios,
  )
  adGigquestionariofuncionarios: AdGigquestionariofuncionariosEntity[];

  @ManyToOne(
    () => TsiusuEntity,
    (tsiusuEntity) => tsiusuEntity.adGigquestionarios,
  )
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
