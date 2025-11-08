import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { AstajuEntity } from './aSTAJU.entity';
import { AstincEntity } from './aSTINC.entity';
import { TgftopEntity } from './tGFTOP.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_ASTREQ', ['codigo'], { unique: true })
@Entity('ASTREQ', { schema: 'SANKHYA' })
export class AstreqEntity {
  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('text', { name: 'JSONREQ', nullable: true })
  jsonreq: string | null;

  @Column('date', { name: 'DHALTER' })
  dhalter: Date;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('varchar', { name: 'IDUNICAREQ', nullable: true, length: 255 })
  idunicareq: string | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('text', { name: 'JSONAJU', nullable: true })
  jsonaju: string | null;

  @Column('varchar', { name: 'NUMNFSE', nullable: true, length: 20 })
  numnfse: string | null;

  @OneToMany(() => AstajuEntity, (astajuEntity) => astajuEntity.codreq)
  astajus: AstajuEntity[];

  @OneToMany(() => AstincEntity, (astincEntity) => astincEntity.codreq)
  astincs: AstincEntity[];

  @ManyToOne(() => TgftopEntity, (tgftopEntity) => tgftopEntity.astreqs)
  @JoinColumn([
    { name: 'CODTIPOPER', referencedColumnName: 'codtipoper' },
    { name: 'DHTIPOPER', referencedColumnName: 'dhalter' },
  ])
  tgftop: TgftopEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.astreqs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.astreqs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.astreqs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;
}
