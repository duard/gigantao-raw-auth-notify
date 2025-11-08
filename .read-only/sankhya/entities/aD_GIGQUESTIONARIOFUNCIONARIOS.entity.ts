import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { AdGigquestionariosEntity } from './aD_GIGQUESTIONARIOS.entity';

@Index('PK_AD_GIGQUESTIONARIOFUNCIONARIOS', ['id', 'sequencia'], {
  unique: true,
})
@Entity('AD_GIGQUESTIONARIOFUNCIONARIOS', { schema: 'SANKHYA' })
export class AdGigquestionariofuncionariosEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DT_UPDATED', nullable: true })
  dtUpdated: Date | null;

  @Column('datetime', { name: 'DT_CREATED', nullable: true })
  dtCreated: Date | null;

  @ManyToOne(
    () => TsiusuEntity,
    (tsiusuEntity) => tsiusuEntity.adGigquestionariofuncionarios,
  )
  @JoinColumn([{ name: 'CODUSUGESTOR', referencedColumnName: 'codusu' }])
  codusugestor: TsiusuEntity;

  @ManyToOne(
    () => TsiusuEntity,
    (tsiusuEntity) => tsiusuEntity.adGigquestionariofuncionarios2,
  )
  @JoinColumn([{ name: 'CODUSUALTER', referencedColumnName: 'codusu' }])
  codusualter: TsiusuEntity;

  @ManyToOne(
    () => TsiusuEntity,
    (tsiusuEntity) => tsiusuEntity.adGigquestionariofuncionarios3,
  )
  @JoinColumn([{ name: 'CODUSUAVALIADO', referencedColumnName: 'codusu' }])
  codusuavaliado: TsiusuEntity;

  @ManyToOne(
    () => AdGigquestionariosEntity,
    (adGigquestionariosEntity) =>
      adGigquestionariosEntity.adGigquestionariofuncionarios,
  )
  @JoinColumn([{ name: 'ID', referencedColumnName: 'id' }])
  adGigquestionarios: AdGigquestionariosEntity;
}
