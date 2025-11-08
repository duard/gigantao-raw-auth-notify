import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsictaEntity } from './tSICTA.entity';
import { TgftitEntity } from './tGFTIT.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TgfdttEntity } from './tGFDTT.entity';

@Index('PK_TGFATT', ['codatt'], { unique: true })
@Entity('TGFATT', { schema: 'SANKHYA' })
export class TgfattEntity {
  @Column('int', { primary: true, name: 'CODATT' })
  codatt: number;

  @Column('varchar', { name: 'DESCRICAO', length: 40 })
  descricao: string;

  @Column('smallint', { name: 'CODTIPOPERREC' })
  codtipoperrec: number;

  @Column('smallint', { name: 'CODTIPOPERDESP' })
  codtipoperdesp: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tgfatts)
  @JoinColumn([{ name: 'CODCTABCOINT', referencedColumnName: 'codctabcoint' }])
  codctabcoint: TsictaEntity;

  @ManyToOne(() => TgftitEntity, (tgftitEntity) => tgftitEntity.tgfatts)
  @JoinColumn([{ name: 'CODTIPTITREC', referencedColumnName: 'codtiptit' }])
  codtiptitrec: TgftitEntity;

  @ManyToOne(() => TgftitEntity, (tgftitEntity) => tgftitEntity.tgfatts2)
  @JoinColumn([{ name: 'CODTIPTITDESP', referencedColumnName: 'codtiptit' }])
  codtiptitdesp: TgftitEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tgfatts)
  @JoinColumn([{ name: 'CODNATDESP', referencedColumnName: 'codnat' }])
  codnatdesp: TgfnatEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tgfatts2)
  @JoinColumn([{ name: 'CODNATREC', referencedColumnName: 'codnat' }])
  codnatrec: TgfnatEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfatts)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tgfatts)
  @JoinColumn([{ name: 'CODCENCUSDESP', referencedColumnName: 'codcencus' }])
  codcencusdesp: TsicusEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tgfatts2)
  @JoinColumn([{ name: 'CODCENCUSREC', referencedColumnName: 'codcencus' }])
  codcencusrec: TsicusEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tgfatts)
  @JoinColumn([{ name: 'CODPROJDESP', referencedColumnName: 'codproj' }])
  codprojdesp: TcsprjEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tgfatts2)
  @JoinColumn([{ name: 'CODPROJREC', referencedColumnName: 'codproj' }])
  codprojrec: TcsprjEntity;

  @OneToMany(() => TgfdttEntity, (tgfdttEntity) => tgfdttEntity.codatt2)
  tgfdtts: TgfdttEntity[];
}
