import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgweplEntity } from './tGWEPL.entity';
import { TgwestEntity } from './tGWEST.entity';
import { TgwittEntity } from './tGWITT.entity';
import { TgwivrEntity } from './tGWIVR.entity';
import { TgwpxnEntity } from './tGWPXN.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGWRPL', ['idpalete'], { unique: true })
@Entity('TGWRPL', { schema: 'SANKHYA' })
export class TgwrplEntity {
  @Column('int', { primary: true, name: 'IDPALETE' })
  idpalete: number;

  @Column('varchar', { name: 'CONTROLE', length: 11, default: () => "' '" })
  controle: string;

  @Column('smallint', { name: 'SEQPALETE', default: () => '(1)' })
  seqpalete: number;

  @Column('char', { name: 'IMPRESSO', length: 1, default: () => "'N'" })
  impresso: string;

  @OneToMany(() => TgweplEntity, (tgweplEntity) => tgweplEntity.idpalete2)
  tgwepls: TgweplEntity[];

  @OneToMany(() => TgwestEntity, (tgwestEntity) => tgwestEntity.idpalete)
  tgwests: TgwestEntity[];

  @OneToMany(() => TgwittEntity, (tgwittEntity) => tgwittEntity.idpalete)
  tgwitts: TgwittEntity[];

  @OneToMany(() => TgwivrEntity, (tgwivrEntity) => tgwivrEntity.idpalete)
  tgwivrs: TgwivrEntity[];

  @OneToMany(() => TgwpxnEntity, (tgwpxnEntity) => tgwpxnEntity.idpalete2)
  tgwpxns: TgwpxnEntity[];

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgwrpls)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgwrpls)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgwrpls)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwrpls)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
