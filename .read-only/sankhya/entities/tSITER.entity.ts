import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfipmEntity } from './tGFIPM.entity';
import { TsitdaEntity } from './tSITDA.entity';
import { TsimmmEntity } from './tSIMMM.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsiempEntity } from './tSIEMP.entity';

@Index('PK_TSITER', ['codterminal'], { unique: true })
@Entity('TSITER', { schema: 'SANKHYA' })
export class TsiterEntity {
  @Column('int', { primary: true, name: 'CODTERMINAL' })
  codterminal: number;

  @Column('varchar', { name: 'IPTERMINAL', length: 15 })
  ipterminal: string;

  @Column('varchar', { name: 'VALIDACMD', length: 1, default: () => "'S'" })
  validacmd: string;

  @Column('int', { name: 'CODPROGRAMA', default: () => '(1)' })
  codprograma: number;

  @Column('varchar', { name: 'PEDEVENDEDOR', length: 1, default: () => "'S'" })
  pedevendedor: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('int', { name: 'NROTERMINAL', nullable: true })
  nroterminal: number | null;

  @Column('varchar', { name: 'IMPNOTA', nullable: true, length: 255 })
  impnota: string | null;

  @Column('varchar', { name: 'DESCRTERM', nullable: true, length: 100 })
  descrterm: string | null;

  @Column('varchar', { name: 'CANCELAITEM', length: 1, default: () => "'N'" })
  cancelaitem: string;

  @Column('varchar', {
    name: 'INFORMARPRODPOR',
    length: 1,
    default: () => "'0'",
  })
  informarprodpor: string;

  @Column('smallint', { name: 'CODMODNF', default: () => '(0)' })
  codmodnf: number;

  @OneToMany(() => TgfipmEntity, (tgfipmEntity) => tgfipmEntity.codterminal2)
  tgfipms: TgfipmEntity[];

  @OneToMany(() => TsitdaEntity, (tsitdaEntity) => tsitdaEntity.codterminal2)
  tsitdas: TsitdaEntity[];

  @ManyToOne(() => TsimmmEntity, (tsimmmEntity) => tsimmmEntity.tsiters)
  @JoinColumn([{ name: 'CODMARCA', referencedColumnName: 'codmarca' }])
  codmarca: TsimmmEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsiters)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tsiters)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;
}
