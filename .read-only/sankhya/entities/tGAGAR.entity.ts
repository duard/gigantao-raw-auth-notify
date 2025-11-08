import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgaavaEntity } from './tGAAVA.entity';
import { TgaemiEntity } from './tGAEMI.entity';
import { TgasafEntity } from './tGASAF.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgacltEntity } from './tGACLT.entity';
import { TsimoeEntity } from './tSIMOE.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgaareEntity } from './tGAARE.entity';

@Index('PK_TGAGAR', ['nrogar'], { unique: true })
@Entity('TGAGAR', { schema: 'SANKHYA' })
export class TgagarEntity {
  @Column('int', { primary: true, name: 'NROGAR' })
  nrogar: number;

  @Column('float', { name: 'VLRFINMOEDA', nullable: true, precision: 53 })
  vlrfinmoeda: number | null;

  @Column('datetime', { name: 'DTVENC' })
  dtvenc: Date;

  @Column('datetime', { name: 'DTINI' })
  dtini: Date;

  @Column('datetime', { name: 'DTFIM' })
  dtfim: Date;

  @Column('varchar', { name: 'TIPOGAR', nullable: true, length: 1 })
  tipogar: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('varchar', { name: 'NOMECARTORIO', nullable: true, length: 100 })
  nomecartorio: string | null;

  @Column('varchar', { name: 'NROREGCARTORIO', nullable: true, length: 100 })
  nroregcartorio: string | null;

  @Column('datetime', { name: 'DTREGISTRO', nullable: true })
  dtregistro: Date | null;

  @Column('varchar', { name: 'STATUSENDOSSO', nullable: true, length: 1 })
  statusendosso: string | null;

  @Column('int', { name: 'CODPARCENDOSSO', nullable: true })
  codparcendosso: number | null;

  @Column('datetime', { name: 'DTENDOSSO', nullable: true })
  dtendosso: Date | null;

  @Column('varchar', { name: 'CONFIRMADA', length: 1, default: () => "'N'" })
  confirmada: string;

  @OneToMany(() => TgaavaEntity, (tgaavaEntity) => tgaavaEntity.nrogar2)
  tgaavas: TgaavaEntity[];

  @OneToMany(() => TgaemiEntity, (tgaemiEntity) => tgaemiEntity.nrogar2)
  tgaemis: TgaemiEntity[];

  @ManyToOne(() => TgasafEntity, (tgasafEntity) => tgasafEntity.tgagars)
  @JoinColumn([{ name: 'CODSAF', referencedColumnName: 'codsaf' }])
  codsaf: TgasafEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgagars)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgagars)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TgacltEntity, (tgacltEntity) => tgacltEntity.tgagars)
  @JoinColumn([{ name: 'CODCLT', referencedColumnName: 'codclt' }])
  codclt: TgacltEntity;

  @ManyToOne(() => TsimoeEntity, (tsimoeEntity) => tsimoeEntity.tgagars)
  @JoinColumn([{ name: 'CODMOEDA', referencedColumnName: 'codmoeda' }])
  codmoeda: TsimoeEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgagars)
  @JoinColumn([{ name: 'CODPRODPERMUTA', referencedColumnName: 'codprod' }])
  codprodpermuta: TgfproEntity;

  @ManyToOne(() => TgaareEntity, (tgaareEntity) => tgaareEntity.tgagars)
  @JoinColumn([
    { name: 'CODPARC', referencedColumnName: 'codparc' },
    { name: 'CODAREA', referencedColumnName: 'codarea' },
  ])
  tgaare: TgaareEntity;
}
