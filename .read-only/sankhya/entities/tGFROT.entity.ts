import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfordEntity } from './tGFORD.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfrcdEntity } from './tGFRCD.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfrotcatEntity } from './tGFROTCAT.entity';
import { TgfrtpEntity } from './tGFRTP.entity';
import { TmspedrotEntity } from './tMSPEDROT.entity';

@Index('PK_TGFROT', ['codrota'], { unique: true })
@Entity('TGFROT', { schema: 'SANKHYA' })
export class TgfrotEntity {
  @Column('int', { primary: true, name: 'CODROTA' })
  codrota: number;

  @Column('char', { name: 'DESCRROTA', length: 36 })
  descrrota: string;

  @Column('char', { name: 'OBS', nullable: true, length: 255 })
  obs: string | null;

  @Column('int', { name: 'DISTANCIA', nullable: true })
  distancia: number | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('int', { name: 'CODROTAANTERIOR', nullable: true })
  codrotaanterior: number | null;

  @Column('int', { name: 'CODROTAPOSTERIOR', nullable: true })
  codrotaposterior: number | null;

  @Column('int', { name: 'CODROTAREPOM', nullable: true })
  codrotarepom: number | null;

  @Column('int', { name: 'CODPERCURSOREPOM', nullable: true })
  codpercursorepom: number | null;

  @Column('varchar', { name: 'ROTEIRO', nullable: true, length: 250 })
  roteiro: string | null;

  @Column('int', { name: 'CODCIDORIG', nullable: true })
  codcidorig: number | null;

  @Column('int', { name: 'CODCIDDEST', nullable: true })
  codciddest: number | null;

  @Column('varchar', { name: 'IDAEVOLTA', nullable: true, length: 10 })
  idaevolta: string | null;

  @Column('int', { name: 'CODROTATARGET', nullable: true })
  codrotatarget: number | null;

  @Column('float', { name: 'VLRPEDAGIOEIXO', nullable: true, precision: 53 })
  vlrpedagioeixo: number | null;

  @Column('int', { name: 'CODROTAPAGBEM', nullable: true })
  codrotapagbem: number | null;

  @Column('int', { name: 'CODEMPROTPB', nullable: true })
  codemprotpb: number | null;

  @OneToMany(() => TgfordEntity, (tgfordEntity) => tgfordEntity.codrota)
  tgfords: TgfordEntity[];

  @OneToMany(() => TgfparEntity, (tgfparEntity) => tgfparEntity.codrota)
  tgfpars: TgfparEntity[];

  @OneToMany(() => TgfrcdEntity, (tgfrcdEntity) => tgfrcdEntity.codrota2)
  tgfrcds: TgfrcdEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfrots)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(
    () => TgfrotcatEntity,
    (tgfrotcatEntity) => tgfrotcatEntity.codrota2,
  )
  tgfrotcats: TgfrotcatEntity[];

  @OneToMany(() => TgfrtpEntity, (tgfrtpEntity) => tgfrtpEntity.codrota2)
  tgfrtps: TgfrtpEntity[];

  @OneToMany(
    () => TmspedrotEntity,
    (tmspedrotEntity) => tmspedrotEntity.codrota,
  )
  tmspedrots: TmspedrotEntity[];
}
