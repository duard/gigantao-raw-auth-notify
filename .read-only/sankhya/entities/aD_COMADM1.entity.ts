import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { AdComadmEntity } from './aD_COMADM.entity';

@Index('PK_AD_COMADM1', ['nuchamado', 'sequencia'], { unique: true })
@Entity('AD_COMADM1', { schema: 'SANKHYA' })
export class AdComadm1Entity {
  @Column('int', { primary: true, name: 'NUCHAMADO' })
  nuchamado: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('text', { name: 'DESCROCORRENCIA', nullable: true })
  descrocorrencia: string | null;

  @Column('datetime', { name: 'DHOCORRENCIA', nullable: true })
  dhocorrencia: Date | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.adComadms6)
  @JoinColumn([{ name: 'ATENDENTE', referencedColumnName: 'codusu' }])
  atendente: TsiusuEntity;

  @ManyToOne(() => AdComadmEntity, (adComadmEntity) => adComadmEntity.adComadms)
  @JoinColumn([{ name: 'NUCHAMADO', referencedColumnName: 'nuchamado' }])
  nuchamado2: AdComadmEntity;
}
