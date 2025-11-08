import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TsimoeEntity } from './tSIMOE.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TccempEntity } from './tCCEMP.entity';
import { TccforEntity } from './tCCFOR.entity';
import { TccnegEntity } from './tCCNEG.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgffinEntity } from './tGFFIN.entity';

@Index('PK_TCCCON', ['codcc'], { unique: true })
@Entity('TCCCON', { schema: 'SANKHYA' })
export class TccconEntity {
  @Column('int', { primary: true, name: 'CODCC' })
  codcc: number;

  @Column('datetime', { name: 'DTCONTRATO' })
  dtcontrato: Date;

  @Column('char', { name: 'TPCONTRATO', length: 1 })
  tpcontrato: string;

  @Column('datetime', { name: 'DTASSINATURA', nullable: true })
  dtassinatura: Date | null;

  @Column('datetime', { name: 'DTPREVISAO', nullable: true })
  dtprevisao: Date | null;

  @Column('char', {
    name: 'ATIVO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  ativo: string | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 2500 })
  observacao: string | null;

  @Column('int', { name: 'CODTIPOPER', nullable: true })
  codtipoper: number | null;

  @Column('datetime', { name: 'DTULTVAR', nullable: true })
  dtultvar: Date | null;

  @Column('int', { name: 'INDTIPOPER', nullable: true })
  indtipoper: number | null;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcccons)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcccons)
  @JoinColumn([{ name: 'CODPARCFIN', referencedColumnName: 'codparc' }])
  codparcfin: TgfparEntity;

  @ManyToOne(() => TsimoeEntity, (tsimoeEntity) => tsimoeEntity.tcccons)
  @JoinColumn([{ name: 'CODMOEDA', referencedColumnName: 'codmoeda' }])
  codmoeda: TsimoeEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcccons)
  @JoinColumn([{ name: 'CODUSUVAR', referencedColumnName: 'codusu' }])
  codusuvar: TsiusuEntity;

  @ManyToOne(() => TccempEntity, (tccempEntity) => tccempEntity.tcccons)
  @JoinColumn([{ name: 'CODEMPREE', referencedColumnName: 'codempree' }])
  codempree: TccempEntity;

  @ManyToOne(() => TccforEntity, (tccforEntity) => tccforEntity.tcccons)
  @JoinColumn([{ name: 'CODFORM', referencedColumnName: 'codform' }])
  codform: TccforEntity;

  @OneToMany(() => TccnegEntity, (tccnegEntity) => tccnegEntity.codcc2)
  tccnegs: TccnegEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.codcc)
  tgfcabs: TgfcabEntity[];

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.codcc)
  tgffins: TgffinEntity[];
}
