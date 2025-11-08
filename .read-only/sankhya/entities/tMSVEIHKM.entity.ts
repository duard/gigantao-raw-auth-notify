import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfveiEntity } from './tGFVEI.entity';

@Index('PK_TMSVEIHKM', ['codveiculo', 'sequencia'], { unique: true })
@Entity('TMSVEIHKM', { schema: 'SANKHYA' })
export class TmsveihkmEntity {
  @Column('int', { primary: true, name: 'CODVEICULO' })
  codveiculo: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'KM', nullable: true })
  km: number | null;

  @Column('varchar', { name: 'ORIGEM', nullable: true, length: 10 })
  origem: string | null;

  @Column('int', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('datetime', { name: 'DHREFERENCIA', nullable: true })
  dhreferencia: Date | null;

  @Column('int', { name: 'AD_HORIMETRO', nullable: true })
  adHorimetro: number | null;

  @Column('float', { name: 'AD_ODOMETRO', nullable: true, precision: 53 })
  adOdometro: number | null;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tmsveihkms)
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo2: TgfveiEntity;
}
