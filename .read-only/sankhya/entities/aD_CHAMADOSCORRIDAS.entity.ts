import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_AD_CHAMADOSCORRIDAS', ['id'], { unique: true })
@Entity('AD_CHAMADOSCORRIDAS', { schema: 'SANKHYA' })
export class AdChamadoscorridasEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('varchar', { name: 'DESTINO', nullable: true, length: 100 })
  destino: string | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 10 })
  status: string | null;

  @Column('datetime', { name: 'DT_UPDATED', nullable: true })
  dtUpdated: Date | null;

  @Column('datetime', { name: 'DT_FINISHED', nullable: true })
  dtFinished: Date | null;

  @Column('datetime', { name: 'DT_CREATED', nullable: true })
  dtCreated: Date | null;

  @Column('varchar', { name: 'PRIORIDADE', nullable: true, length: 10 })
  prioridade: string | null;

  @Column('varchar', { name: 'BUSCARLEVAR', nullable: true, length: 10 })
  buscarlevar: string | null;

  @Column('text', { name: 'OBS', nullable: true })
  obs: string | null;

  @Column('text', { name: 'PASSAGEIROSMERCADORIA', nullable: true })
  passageirosmercadoria: string | null;

  @Column('datetime', { name: 'DT_ACIONAMENTO', nullable: true })
  dtAcionamento: Date | null;

  @Column('varchar', { name: 'ENVIAWPP', nullable: true, length: 10 })
  enviawpp: string | null;

  @ManyToOne(
    () => TgfparEntity,
    (tgfparEntity) => tgfparEntity.adChamadoscorridas,
  )
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(
    () => TsiusuEntity,
    (tsiusuEntity) => tsiusuEntity.adChamadoscorridas,
  )
  @JoinColumn([{ name: 'USER_ID', referencedColumnName: 'codusu' }])
  user: TsiusuEntity;

  @ManyToOne(
    () => TsiusuEntity,
    (tsiusuEntity) => tsiusuEntity.adChamadoscorridas2,
  )
  @JoinColumn([{ name: 'USU_MOTORISTA', referencedColumnName: 'codusu' }])
  usuMotorista: TsiusuEntity;

  @ManyToOne(
    () => TsiusuEntity,
    (tsiusuEntity) => tsiusuEntity.adChamadoscorridas3,
  )
  @JoinColumn([{ name: 'USU_SOLICITANTE', referencedColumnName: 'codusu' }])
  usuSolicitante: TsiusuEntity;
}
