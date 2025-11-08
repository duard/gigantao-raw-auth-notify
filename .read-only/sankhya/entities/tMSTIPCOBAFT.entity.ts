import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TmsordaftiteEntity } from './tMSORDAFTITE.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TgfnatEntity } from './tGFNAT.entity';

@Index('PK_TMSTIPCOBAFT', ['codtipcob'], { unique: true })
@Entity('TMSTIPCOBAFT', { schema: 'SANKHYA' })
export class TmstipcobaftEntity {
  @Column('int', { primary: true, name: 'CODTIPCOB' })
  codtipcob: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;

  @Column('varchar', { name: 'ATIVO', nullable: true, length: 10 })
  ativo: string | null;

  @Column('varchar', { name: 'TIPOPER', nullable: true, length: 10 })
  tipoper: string | null;

  @Column('varchar', { name: 'TIPVALOR', nullable: true, length: 10 })
  tipvalor: string | null;

  @Column('int', { name: 'CODTIPOPER', nullable: true })
  codtipoper: number | null;

  @Column('int', { name: 'CODTIPOPERSIMPLES', nullable: true })
  codtipopersimples: number | null;

  @Column('int', { name: 'CODTIPVENDAAFT', nullable: true })
  codtipvendaaft: number | null;

  @Column('int', { name: 'CODITEMPAMCARD', nullable: true })
  coditempamcard: number | null;

  @Column('int', { name: 'CODTIPVENDAAFTTAC', nullable: true })
  codtipvendaafttac: number | null;

  @Column('int', { name: 'CODNATPFISICA', nullable: true })
  codnatpfisica: number | null;

  @Column('int', { name: 'CODITEMREPOM', nullable: true })
  coditemrepom: number | null;

  @Column('int', { name: 'CODNATMEI', nullable: true })
  codnatmei: number | null;

  @Column('varchar', { name: 'PODEIMPCHEQUE', nullable: true, length: 10 })
  podeimpcheque: string | null;

  @OneToMany(
    () => TmsordaftiteEntity,
    (tmsordaftiteEntity) => tmsordaftiteEntity.codtipcob,
  )
  tmsordaftites: TmsordaftiteEntity[];

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tmstipcobafts)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj: TcsprjEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tmstipcobafts)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat: TgfnatEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tmstipcobafts2)
  @JoinColumn([{ name: 'CODNATSIMPLES', referencedColumnName: 'codnat' }])
  codnatsimples: TgfnatEntity;
}
