import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { TgffinEntity } from './tGFFIN.entity';
import { TcsoseEntity } from './tCSOSE.entity';
import { TgfhteEntity } from './tGFHTE.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfvenEntity } from './tGFVEN.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFTEL', ['nurel'], { unique: true })
@Index('TGFTEL_I01', ['codparc', 'dhchamada', 'codprod', 'situacao'], {
  unique: true,
})
@Index('TGFTEL_I02', ['pendente', 'codparc'], {})
@Entity('TGFTEL', { schema: 'SANKHYA' })
export class TgftelEntity {
  @Column('int', { primary: true, name: 'NUREL' })
  nurel: number;

  @Column('int', { name: 'CODPARC' })
  codparc: number;

  @Column('datetime', { name: 'DHCHAMADA' })
  dhchamada: Date;

  @Column('int', { name: 'CODPROD', nullable: true, default: () => '(0)' })
  codprod: number | null;

  @Column('char', { name: 'TIPCHAM', nullable: true, length: 1 })
  tipcham: string | null;

  @Column('int', { name: 'CODCONTATO', nullable: true })
  codcontato: number | null;

  @Column('varchar', { name: 'COMENTARIOS', nullable: true, length: 300 })
  comentarios: string | null;

  @Column('datetime', { name: 'DHPROXCHAM', nullable: true })
  dhproxcham: Date | null;

  @Column('char', { name: 'PENDENTE', length: 1, default: () => "'S'" })
  pendente: string;

  @Column('varchar', { name: 'COMENTARIOS2', nullable: true, length: 200 })
  comentarios2: string | null;

  @Column('char', { name: 'SITUACAO', length: 1, default: () => "'P'" })
  situacao: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('datetime', { name: 'TEMPPREVISTO', nullable: true })
  tempprevisto: Date | null;

  @Column('int', { name: 'NUAVISO', nullable: true })
  nuaviso: number | null;

  @ManyToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgftels)
  tgffins: TgffinEntity[];

  @ManyToOne(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.tgftels)
  @JoinColumn([{ name: 'NUMOS', referencedColumnName: 'numos' }])
  numos: TcsoseEntity;

  @ManyToOne(() => TgfhteEntity, (tgfhteEntity) => tgfhteEntity.tgftels)
  @JoinColumn([{ name: 'CODHIST', referencedColumnName: 'codhist' }])
  codhist: TgfhteEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgftels)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.tgftels)
  @JoinColumn([{ name: 'CODVEND', referencedColumnName: 'codvend' }])
  codvend: TgfvenEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgftels)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgftels2)
  @JoinColumn([{ name: 'CODATENDENTE', referencedColumnName: 'codusu' }])
  codatendente: TsiusuEntity;
}
