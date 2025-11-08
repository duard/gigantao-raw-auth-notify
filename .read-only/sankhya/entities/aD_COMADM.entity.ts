import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { AdComadm1Entity } from './aD_COMADM1.entity';

@Index('PK_AD_COMADM', ['nuchamado'], { unique: true })
@Entity('AD_COMADM', { schema: 'SANKHYA' })
export class AdComadmEntity {
  @Column('int', { primary: true, name: 'NUCHAMADO' })
  nuchamado: number;

  @Column('datetime', { name: 'DHCHAMADO', nullable: true })
  dhchamado: Date | null;

  @Column('datetime', { name: 'DHPREVENTREGA', nullable: true })
  dhpreventrega: Date | null;

  @Column('varchar', { name: 'TIPOCHAMADO', nullable: true, length: 10 })
  tipochamado: string | null;

  @Column('varchar', { name: 'PRIORIDADE', nullable: true, length: 10 })
  prioridade: string | null;

  @Column('text', { name: 'DESCRCHAMADO', nullable: true })
  descrchamado: string | null;

  @Column('varchar', { name: 'VALIDADO', nullable: true, length: 10 })
  validado: string | null;

  @Column('datetime', { name: 'DHVALIDACAO', nullable: true })
  dhvalidacao: Date | null;

  @Column('datetime', { name: 'DHFINCHAM', nullable: true })
  dhfincham: Date | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 10 })
  status: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.adComadms)
  @JoinColumn([{ name: 'VALIDADOPOR', referencedColumnName: 'codusu' }])
  validadopor: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.adComadms2)
  @JoinColumn([{ name: 'SOLICITANTE', referencedColumnName: 'codusu' }])
  solicitante: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.adComadms3)
  @JoinColumn([{ name: 'SOLICITADO', referencedColumnName: 'codusu' }])
  solicitado: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.adComadms4)
  @JoinColumn([{ name: 'FINALIZADOPOR', referencedColumnName: 'codusu' }])
  finalizadopor: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.adComadms5)
  @JoinColumn([{ name: 'CODUSUALTER', referencedColumnName: 'codusu' }])
  codusualter: TsiusuEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.adComadms)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @OneToMany(
    () => AdComadm1Entity,
    (adComadm1Entity) => adComadm1Entity.nuchamado2,
  )
  adComadms: AdComadm1Entity[];
}
