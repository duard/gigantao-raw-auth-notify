import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfcaiEntity } from './tGFCAI.entity';
import { TsictaEntity } from './tSICTA.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfpwuEntity } from './tGFPWU.entity';

@Index('PK__TGFPDV__B6D611CC16328469', ['codpdv'], { unique: true })
@Entity('TGFPDV', { schema: 'SANKHYA' })
export class TgfpdvEntity {
  @Column('int', { primary: true, name: 'CODPDV' })
  codpdv: number;

  @Column('varchar', { name: 'DESCRICAO', length: 40 })
  descricao: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('varchar', { name: 'IDMAQUINALOCAL', nullable: true, length: 40 })
  idmaquinalocal: string | null;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('datetime', { name: 'DTINCID', nullable: true })
  dtincid: Date | null;

  @Column('char', { name: 'PDVTERCEIRO', nullable: true, length: 1 })
  pdvterceiro: string | null;

  @OneToMany(() => TgfcaiEntity, (tgfcaiEntity) => tgfcaiEntity.codpdv)
  tgfcais: TgfcaiEntity[];

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tgfpdvs)
  @JoinColumn([{ name: 'CODCONTAPDV', referencedColumnName: 'codctabcoint' }])
  codcontapdv: TsictaEntity;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tgfpdvs2)
  @JoinColumn([{ name: 'CODCONTATES', referencedColumnName: 'codctabcoint' }])
  codcontates: TsictaEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfpdvs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfpdvs)
  @JoinColumn([{ name: 'CODUSUALTER', referencedColumnName: 'codusu' }])
  codusualter: TsiusuEntity;

  @OneToMany(() => TgfpwuEntity, (tgfpwuEntity) => tgfpwuEntity.codpdv2)
  tgfpwus: TgfpwuEntity[];
}
